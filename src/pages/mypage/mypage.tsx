import React, { useEffect, useState } from "react";
import * as styles from "./mypage.styles";
import BackButton from "../../components/button/backButton";

function MyPage() {
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

  useEffect(() => {
    // 클릭한 분야 변경 시 데이터 가져오기
  }, [activeButtons]);

  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.ButtonContainer>
          <BackButton />
        </styles.ButtonContainer>
        <styles.ProfileButton />
      </styles.HeaderContainer>
      <styles.BodyContainer>
        <styles.BodyContentContainer>
          <styles.BodyTitle>멘티_User님 안녕하세요</styles.BodyTitle>
        </styles.BodyContentContainer>
        <styles.BodyContentContainer>
          <styles.BodyText>내정보관리</styles.BodyText>
        </styles.BodyContentContainer>
        <styles.BodyContentContainer>
          <styles.BodyText>버그제보</styles.BodyText>
        </styles.BodyContentContainer>
        <styles.BodyContentContainer>
          <styles.BodyText>코고소개</styles.BodyText>
        </styles.BodyContentContainer>
        <styles.BodyContentContainer>
          <styles.BodyText>로그아웃</styles.BodyText>
        </styles.BodyContentContainer>
      </styles.BodyContainer>
    </styles.Container>
  );
}

export default MyPage;
