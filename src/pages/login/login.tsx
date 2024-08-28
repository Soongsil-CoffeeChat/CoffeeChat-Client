import LoginHeart from "../../assets/heart.svg";
import GoogleBtn from "../../assets/GoogleButton.svg";
import * as S from "./login.styles";

// 로그인 모달

const LoginModal = () => {
  const onGoogleLogin = () => {
    window.location.href = "https://cogo.life/oauth2/authorization/google";
  };

  return (
    <S.ModalBackdrop>
      <S.ModalContainer>
        <S.ModalHeader>
          지금 가입하고
          <br />
          <b>대학생 커뮤니티</b>에 참여하세요!
        </S.ModalHeader>
        <S.HeartImage src={LoginHeart} alt="heart" />
        <S.GoogleButton
          src={GoogleBtn}
          alt="GoogleButton"
          onClick={onGoogleLogin}
        />
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
};

export default LoginModal;
