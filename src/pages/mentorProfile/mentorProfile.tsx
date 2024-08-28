import React, { useEffect, useState } from "react";
import * as S from "./mentorProfile.styles";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/authState";
import { useRecoilState } from "recoil";
import LeftButton from "../../assets/LeftButton.svg";
import RightButton from "../../assets/RightButton.svg";
import axios from "axios";
import axiosInstance from "../../apis/axiosInstance";
import {
  Container,
  FixedButton,
  Header,
  Subtitle,
  Title,
} from "../../components/global.styles";
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search.svg";
import BackButton from "../../components/button/backButton";

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

interface MentorData {
  picture: string;
  mentorName: string;
  clubName: string[];
  field: string;
  username: string;
}

const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

const saveCategoryToLocalStorage = (category: keyof MentorCategory) => {
  localStorage.setItem("activeCategory", category);
};

const getCategoryFromLocalStorage = () => {
  return localStorage.getItem("activeCategory") as keyof MentorCategory;
};

export default function MentorProfile() {
  const [activeButtons, setActiveButtons] = useState<keyof MentorCategory>(
    getCategoryFromLocalStorage() || "기획"
  );
  const [mentorData, setMentorData] = useState<MentorData[] | null>(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [auth, setAuth] = useRecoilState(authState);

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   } else {
  //     const token = getTokenFromLocalStorage();
  //     if (token) {
  //       setAuth((prevAuth) => ({
  //         ...prevAuth,
  //         token,
  //         isLoggedIn: true,
  //       }));
  //     }
  //   }
  // }, [navigate, setAuth]);

  // useEffect(() => {
  //   if (auth.token) {
  //     saveTokenToLocalStorage(auth.token);
  //   }
  // }, [auth.token]);

  const getMentorData = () => {
    const url = `/mentors/part?part=${mentorCategory[activeButtons]}`;

    axiosInstance
      .get(url)
      .then((response) => {
        setMentorData(response.data);
        console.log(response.data);
        console.log("토큰 아직 유효해용~");
      })
      .catch(async (error) => {
        console.error("Error:", error);
        // error.response가 undefined가 아닌지 확인
        if (error.response) {
          console.log("리이슈 요청 보내야 해용~");
          const originalRequest = error.config;

          // 액세스 토큰 만료 확인
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
              // 리이슈 요청
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

              // 새로운 액세스 토큰 저장
              const newToken = response.headers.access;
              saveTokenToLocalStorage(newToken);
              if (newToken) {
                console.log("리이슈 성공이용~", newToken);
              }

              // 원래 요청의 헤더 업데이트
              originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

              // 원래 요청 재시도
              return axiosInstance(originalRequest);
            } catch (reissueError) {
              // 리이슈 요청 실패 시
              console.error("Failed to reissue access token:", reissueError);
              return Promise.reject(reissueError);
            }

            // if (error.response && error.response.status === 401) {
            //   localStorage.removeItem("isLoggedIn");
            //   navigate("/login");
          } else {
            console.log("An unexpected error occurred");
          }
        } else {
          // error.response가 없는 경우
          console.log("Network or unexpected error occurred");
        }
      });
  };

  useEffect(() => {
    getMentorData();
    saveCategoryToLocalStorage(activeButtons);
  }, [activeButtons]);

  const handleButtonClick = (buttonName: keyof MentorCategory) => {
    setActiveButtons(buttonName);
  };

  const handleApplyBtnClick = () => {
    navigate("/applycogotime");
  };

  return (
    <Container>
      <S.HeaderContainer>
        <BackButton />
        <S.MenotorName>나는 교휘 멘토님</S.MenotorName>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.ProfileContainer>
          <S.ProfileCircle>
            <S.ProfileImg
              src={
                mentorData?.[currentIndex]?.picture
                  ? mentorData[currentIndex].picture.slice(1, -1)
                  : "https://picsum.photos/250/250"
              }
            />
          </S.ProfileCircle>
          <S.ProfileBottomContainer>
            <S.ProfileIcon>{activeButtons}</S.ProfileIcon>
            <S.ProfileIcon>직무직무</S.ProfileIcon>
            <S.ProfileIcon>경력</S.ProfileIcon>
          </S.ProfileBottomContainer>
        </S.ProfileContainer>
        <S.IntroduceContainer>
          <S.IntroduceTitle>아픈건 딱 질색이니까</S.IntroduceTitle>
          <S.IntroduceContent>
            오늘도 아침엔 입에 빵을 물고 똑같이 하루를 시작하고 온종일 한 손엔
            아이스 아메리카노피곤해 죽겠네
            오늘도 아침엔 입에 빵을 물고 똑같이 하루를 시작하고 온종일 한 손엔
            아이스 아메리카노피곤해 죽겠네
          </S.IntroduceContent>
        </S.IntroduceContainer>
        <FixedButton onClick={handleApplyBtnClick}>코고 신청하기</FixedButton>
      </S.BodyContainer>
    </Container>
  );
}
