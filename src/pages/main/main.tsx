import { useEffect, useState } from "react";
import * as S from "./main.styles";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/authState";
import { useRecoilState } from "recoil";
import axios from "axios";
import axiosInstance from "../../apis/axiosInstance";
import { Container, Header } from "../../components/global.styles";
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search.svg";
import MentorCard from "../../components/mentorCard/mentorCard";
import { MentorData } from "../../types/mentorData";

type MentorCategory = {
  기획: "PM";
  디자인: "DESIGN";
  FE: "FE";
  BE: "BE";
};

const mentorCategory: MentorCategory = {
  기획: "PM",
  디자인: "DESIGN",
  FE: "FE",
  BE: "BE",
};

const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

const saveCategoryToLocalStorage = (category: keyof MentorCategory) => {
  localStorage.setItem("activeCategory", category);
};

const getCategoryFromLocalStorage = (): keyof MentorCategory => {
  const category = localStorage.getItem("activeCategory");
  if (category && category in mentorCategory) {
    return category as keyof MentorCategory;
  }
  return "기획"; // 기본값 설정
};

function Main() {
  const [activeCategory, setActiveCategory] = useState<keyof MentorCategory>(
    getCategoryFromLocalStorage()
  );
  const [mentorData, setMentorData] = useState<MentorData[]>([]);
  const [selectedMentorData, setSelectedMentorData] = useState<MentorData | null>(null);
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const token = getTokenFromLocalStorage();
      if (token) {
        setAuth((prevAuth) => ({
          ...prevAuth,
          token,
          isLoggedIn: true,
        }));
      }
    }
  }, [navigate, setAuth]);

  useEffect(() => {
    if (auth.token) {
      saveTokenToLocalStorage(auth.token);
    }
  }, [auth.token]);

  const getMentorData = async () => {
    const url = `/mentors/part?part=${mentorCategory[activeCategory]}`;

    try {
      const response = await axiosInstance.get(url);
      console.log("Fetched data:", response.data);

      if (response.data && Array.isArray(response.data.content)) {
        setMentorData(response.data.content);
      } else {
        setMentorData([]);
        console.error("Invalid data format:", response.data);
      }
    } catch (error: any) {
      console.error("Error:", error);
      if (error.response) {
        console.log("리이슈 요청 보내야 해요");
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const response = await axios.post(
              "https://cogo.life/reissue",
              {},
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            );

            const newToken = response.headers.access;
            saveTokenToLocalStorage(newToken);
            if (newToken) {
              console.log("리이슈 성공", newToken);
            }

            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

            // 원래 요청 재시도
            const retryResponse = await axiosInstance(originalRequest);
            // 필요한 경우 retryResponse를 처리합니다.
            return retryResponse;
          } catch (reissueError) {
            console.error("Failed to reissue access token:", reissueError);
            navigate("/login");
          }
        } else {
          console.log("An unexpected error occurred");
        }
      } else {
        console.log("Network or unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    getMentorData();
    saveCategoryToLocalStorage(activeCategory);
  }, [activeCategory]);

  const handleButtonClick = (buttonName: keyof MentorCategory) => {
    setActiveCategory(buttonName);
  };

  const handleProfileSelect = (mentor: MentorData) => {
    setSelectedMentorData(mentor);
    console.log("selectedData: ", mentor);
    navigate(`/mentor-detail/${mentor.mentorId}`);
  };

  const handleSearchBtnClick = () => {
    navigate("/search");
  };

  return (
    <Container>
      <Header>
        <S.HeaderButtonContainer style={{ marginBottom: "1rem" }}>
          <S.Logo src={Logo} alt="Logo" />
          <S.Search src={Search} alt="Search" onClick={handleSearchBtnClick} />
        </S.HeaderButtonContainer>
        <S.HeaderButtonContainer>
          {["기획", "디자인", "FE", "BE"].map((buttonName) => (
            <S.HeaderButton
              key={buttonName}
              $active={activeCategory === buttonName}
              onClick={() => handleButtonClick(buttonName as keyof MentorCategory)}
            >
              {buttonName}
            </S.HeaderButton>
          ))}
        </S.HeaderButtonContainer>
        <S.Hr />
      </Header>
      <S.BodyContainer>
        {mentorData.map((mentor) => (
          <MentorCard
            key={mentor.mentorId}
            mentor={mentor}
            onClick={handleProfileSelect}
          />
        ))}
      </S.BodyContainer>
    </Container>
  );
}

export default Main;
