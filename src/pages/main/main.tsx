import React, { useEffect, useState } from "react";
import * as styles from "./main.styles";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/authState";
import { useRecoilState } from "recoil";
import LeftButton from "../../assets/LeftButton.svg";
import RightButton from "../../assets/RightButton.svg";

type MentorCategory = {
  기획: "PM";
  FE: "FE";
  BE: "BE";
  디자인: "DE";
};

const mentorCategory: MentorCategory = {
  기획: "PM",
  FE: "FE",
  BE: "BE",
  디자인: "DE",
};

interface MentorData {
  picture: string;
  mentorName: string;
  clubName: string[];
  field: string;
  username: string;
}

// 토큰을 로컬 스토리지에 저장
const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

// 로컬 스토리지에서 토큰을 불러오기
const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

function Main() {
  const [activeButtons, setActiveButtons] =
    useState<keyof MentorCategory>("기획");
  const [mentorData, setMentorData] = useState<MentorData[] | null>(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const getMentorData = () => {
    const url = `https://cogo.life/api/v1/mentor/${mentorCategory[activeButtons]}`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMentorData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getMentorData();
  }, []);

  useEffect(() => {
    getMentorData();
  }, [activeButtons]);

  const handleButtonClick = (buttonName: keyof MentorCategory) => {
    setActiveButtons(buttonName);
  };

  const handleProfileButtonClick = (buttonName: string) => {
    navigate("/mypage");
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < (mentorData !== null ? mentorData.length - 1 : 0)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.HeaderTitle>
          어떤 동아리 선배가 있을까요?
          <styles.HeaderButtonContainer>
            {[""].map((buttonName) => (
              <styles.HeaderProfileButton
                key={buttonName}
                active={activeButtons.includes(buttonName)}
                onClick={() => handleProfileButtonClick(buttonName)}>
                {buttonName}
              </styles.HeaderProfileButton>
            ))}
          </styles.HeaderButtonContainer>
        </styles.HeaderTitle>
        <styles.HeaderText>동아리별 COGO 선배 알아보기</styles.HeaderText>
        <styles.HeaderButtonContainer>
          {["기획", "BE", "FE", "디자인"].map((buttonName) => (
            <styles.HeaderButton
              key={buttonName}
              active={activeButtons.includes(buttonName)}
              onClick={() => {
                handleButtonClick(buttonName as keyof MentorCategory);
              }}>
              {buttonName}
            </styles.HeaderButton>
          ))}
        </styles.HeaderButtonContainer>
      </styles.HeaderContainer>
      <styles.BodyContainer>
        <styles.BodyProfile>
          <styles.ProfileTopContainer>
            <styles.ImageButton
              src={LeftButton}
              alt="Left"
              onClick={handlePrevClick}
            />
            <styles.ProfileCircle
              src={
                mentorData !== null
                  ? mentorData[currentIndex].picture.slice(1, -1)
                  : "https://picsum.photos/250/250"
              }
            />
            <styles.ImageButton
              src={RightButton}
              alt="Right"
              onClick={handleNextClick}
            />
          </styles.ProfileTopContainer>
          <styles.ProfileBottomContainer>
            <styles.ProfileIcon>동아리</styles.ProfileIcon>
            <styles.ProfileIcon>{activeButtons}</styles.ProfileIcon>
            <styles.ProfileIcon>Lead</styles.ProfileIcon>
          </styles.ProfileBottomContainer>
        </styles.BodyProfile>
        <styles.BodyIntroduce>
          <styles.BodyIntroduceText>
            {mentorData !== null ? mentorData[currentIndex].mentorName : null}
          </styles.BodyIntroduceText>
          <styles.ApplyButton
            onClick={() => {
              navigate("/timeselect", {
                state: {
                  key:
                    mentorData !== null
                      ? mentorData[currentIndex].username
                      : null,
                },
              });
            }}>
            코고 신청하기
          </styles.ApplyButton>
        </styles.BodyIntroduce>
      </styles.BodyContainer>
    </styles.Container>
  );
}

export default Main;
