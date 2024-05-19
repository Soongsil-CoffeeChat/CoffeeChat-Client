import React, { useEffect, useState } from "react";
import * as styles from "./main.styles";
import { useNavigate } from "react-router-dom";
import LeftButton from "../../assets/LeftButton.svg";
import RightButton from "../../assets/RightButton.svg";

interface MentorData {
  picture: string;
  mentorName: string;
  clubName: string[];
  field: string;
  username: string;
}

function Main() {
  const [activeButtons, setActiveButtons] = useState<string[]>([]);
  const [mentorData, setMentorData] = useState<MentorData[] | null>(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {}, [activeButtons]);

  useEffect(() => {
    const token = process.env.REACT_APP_TOKEN;
    // process.env.REACT_APP_TOKEN;
    const url = `https://cogo.run/api/v1/mentor/BE`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setActiveButtons((prev) => {
      const isActive = prev.includes(buttonName);
      if (isActive) {
        return prev.filter((name) => name !== buttonName);
      } else {
        return [...prev, buttonName];
      }
    });
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
        <styles.HeaderText>동아리별 코고 선배 알아보기</styles.HeaderText>
        <styles.HeaderButtonContainer>
          {["기획", "FE", "BE", "디자인"].map((buttonName) => (
            <styles.HeaderButton
              key={buttonName}
              active={activeButtons.includes(buttonName)}
              onClick={() => handleButtonClick(buttonName)}>
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
            <styles.ProfileCircle />
            <styles.ImageButton
              src={RightButton}
              alt="Right"
              onClick={handleNextClick}
            />
          </styles.ProfileTopContainer>
          <styles.ProfileBottomContainer>
            <styles.ProfileIcon>ㅎㅇ</styles.ProfileIcon>
            <styles.ProfileIcon>ㅎㅇ</styles.ProfileIcon>
            <styles.ProfileIcon>ㅎㅇ</styles.ProfileIcon>
          </styles.ProfileBottomContainer>
        </styles.BodyProfile>
        <styles.BodyIntroduce>
          {/* <styles.BodyIntroduceHeader> */}
          {/* {mentorData[currentIndex].} */}
          {/* </styles.BodyIntroduceHeader> */}
          <styles.BodyIntroduceText>
            {mentorData !== null ? mentorData[currentIndex].field : null}
            {/* {profiles[currentIndex].text} */}
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
