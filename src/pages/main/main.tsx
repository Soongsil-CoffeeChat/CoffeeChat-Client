import React, { useEffect, useState } from "react";
import * as styles from "./main.styles";
import { useNavigate } from "react-router-dom";
import LeftButton from "../../assets/LeftButton.svg";
import RightButton from "../../assets/RightButton.svg";

function Main() {
  const [activeButtons, setActiveButtons] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 클릭한 분야 변경 시 데이터 가져오기
  }, [activeButtons]);

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
    navigate("/mypage"); // '/mypage' 경로로 이동
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
            <styles.ImageButton src={LeftButton} alt="Left" />
            <styles.ProfileCircle />
            <styles.ImageButton src={RightButton} alt="Right" />
          </styles.ProfileTopContainer>
          <styles.ProfileBottomContainer>
            <styles.ProfileIcon>ㅎㅇ</styles.ProfileIcon>
            <styles.ProfileIcon>ㅎㅇ</styles.ProfileIcon>
            <styles.ProfileIcon>ㅎㅇ</styles.ProfileIcon>
          </styles.ProfileBottomContainer>
        </styles.BodyProfile>
        <styles.BodyIntroduce>
          <styles.BodyIntroduceHeader>
            {"아픈건 딱 질색이니까"}
          </styles.BodyIntroduceHeader>
          <styles.BodyIntroduceText>
            {
              "오늘도 아침엔 입에 빵을 물고야 평온했던 하늘이 무너지고어둡던 눈앞이\
            붉어지며뭔가 잊고 온 게 있는 것 같아괜히 이상하게 막 울 것만\
            같고그냥 지나치는 게 나을 것 같아나는 생각은 딱 질색이니까 오랫동안\
            나를 아는슬픈 표정을 하고 oh, oh흔적 없는 기억 밖혹 과거에 미래에 딴\
            차원에 세계에One, two, three, four, five, six, seven, eight 평온했던\
            하늘이 무너지고어둡던 눈앞이 붉어져도다시 놓쳐버리는 것만 같아괜히\
            이상하게 막 울 것만 같고 오늘도 아침엔 입에 빵을 물고야 평온했던\
            하늘이 무너지고어둡던 눈앞이 붉어지며뭔가 잊고 온 게 있는 것\
            같아괜히 이상하게 막 울 것만 같고그냥 지나치는 게 나을 것 같아나는\
            생각은 딱 질색이니까 오랫동안 나를 아는슬픈 표정을 하고 oh, oh흔적\
            없는 기억 밖혹 과거에 미래에 딴 차원에 세계에One, two, three, four,\
            five, six, seven, eight 평온했던 하늘이 무너지고어둡던 눈앞이\
            붉어져도다시 놓쳐버리는 것만 같아괜히 이상하게 막 울 것만 같고\
            오늘도 아침엔 입에 빵을 물고야 평온했던 하늘이 무너지고어둡던 눈앞이\
            붉어지며뭔가 잊고 온 게 있는 것 같아괜히 이상하게 막 울 것만\
            같고그냥 지나치는 게 나을 것 같아나는 생각은 딱 질색이니까 오랫동안\
            나를 아는슬픈 표정을 하고 oh, oh흔적 없는 기억 밖혹 과거에 미래에 딴\
            차원에 세계에One, two, three, four, five, six, seven, eight 평온했던\
            하늘이 무너지고어둡던 눈앞이 붉어져도다시 놓쳐버리는 것만 같아괜히\
            이상하게 막 울 것만 같고 오늘도 아침엔 입에 빵을 물고야 평온했던\
            하늘이 무너지고어둡던 눈앞이 붉어지며뭔가 잊고 온 게 있는 것\
            같아괜히 이상하게 막 울 것만 같고그냥 지나치는 게 나을 것 같아나는\
            생각은 딱 질색이니까 오랫동안 나를 아는슬픈 표정을 하고 oh, oh흔적\
            없는 기억 밖혹 과거에 미래에 딴 차원에 세계에One, two, three, four,\
            five, six, seven, eight 평온했던 하늘이 무너지고어둡던 눈앞이\
            붉어져도다시 놓쳐버리는 것만 같아괜히 이상하게 막 울 것만 같고"
            }
          </styles.BodyIntroduceText>
          <styles.ApplyButton>코고 신청하기</styles.ApplyButton>
        </styles.BodyIntroduce>
      </styles.BodyContainer>
    </styles.Container>
  );
}

export default Main;
