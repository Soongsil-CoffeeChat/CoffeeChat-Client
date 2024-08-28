import React, { useEffect, useState } from "react";
import * as styles from "./my.styles";
import BackButton from "../../components/button/backButton";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const [activeButtons, setActiveButtons] = useState<string[]>([]);
  const [Username, setUsername] = useState<string>("멘티_User");
  const navigate = useNavigate();

  useEffect(() => {
    // 클릭한 분야 변경 시 데이터 가져오기
  }, [activeButtons]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.ButtonContainer>
          <BackButton />
        </styles.ButtonContainer>
        <styles.ProfileButtonContainer>
          <styles.ProfileButton />
        </styles.ProfileButtonContainer>
      </styles.HeaderContainer>
      <styles.BodyContainer>
        <styles.BodyTitle>{Username} 님 안녕하세요</styles.BodyTitle>
        <styles.BodyText>내정보관리</styles.BodyText>
        <styles.BodyText>버그관리</styles.BodyText>
        <styles.BodyText>코고소개</styles.BodyText>
        <styles.BodyText onClick={handleLogout}>로그아웃</styles.BodyText>
      </styles.BodyContainer>
    </styles.Container>
  );
}

export default MyPage;
