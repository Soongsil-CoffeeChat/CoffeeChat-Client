import { useState } from "react";
import * as S from "./mypage.styles";
import { useNavigate } from "react-router-dom";
import {
  Container,
} from "../../components/global.styles";
import Arrow from "../../assets/ArrowRight.svg"

export default function MyPage() {
  const [username, setUsername] = useState<string>("멘티_User");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  const handleMyProfileButton = () => {
    navigate("/mypage/myprofile");
  };

  const handleIntroduceButton = () => {
    navigate("/mypage/introduce");
  };

  const handleTimeSelectButton = () => {
    navigate("/mypage/timeselect");
  };

  return (
    <Container>
      <S.HeaderContainer>
        <S.MenotorName>{username}</S.MenotorName>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.ProfileContainer>
          <S.ProfileCircle>
            <S.ProfileImg />
          </S.ProfileCircle>
          <S.ProfileBottomContainer>
            <S.ProfileIcon>BE</S.ProfileIcon>
            <S.ProfileIcon>동아리 이름</S.ProfileIcon>
          </S.ProfileBottomContainer>
        </S.ProfileContainer>
        <S.MenuContainer>
          <S.MenuWrapper onClick={handleMyProfileButton}>
            <S.MenuText>내 정보 관리</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" />
          </S.MenuWrapper>
          <S.Hr />
          <S.MenuWrapper onClick={handleIntroduceButton}>
            <S.MenuText>자기 소개 관리</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" />
          </S.MenuWrapper>
          <S.Hr />
          <S.MenuWrapper onClick={handleTimeSelectButton}>
            <S.MenuText>코고 시간 설정</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" />
          </S.MenuWrapper>
          <S.Hr />
          <S.MenuWrapper onClick={handleLogout}>
            <S.MenuText>로그아웃</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" style={{opacity: "0"}} />
          </S.MenuWrapper>
        </S.MenuContainer>
      </S.BodyContainer>
    </Container>
  );
}
