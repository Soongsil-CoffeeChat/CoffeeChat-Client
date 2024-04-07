import React, { useEffect, useState } from "react";
import * as styles from "./main.styles";

function Main() {
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

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

  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.HeaderTitle>어떤 동아리 선배가 있을까요?</styles.HeaderTitle>
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
    </styles.Container>
  );
}

export default Main;
