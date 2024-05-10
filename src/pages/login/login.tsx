import LoginHeart from "../../assets/heart.svg";
import GoogleBtn from "../../assets/GoogleButton.svg";
import * as styles from "./login.styles";

// 로그인 모달

const LoginModal = () => {
  const onGoogleLogin = () => {
    // 로걸 http://localhost:3000/
    // https://cogo.life
    // https://cogo.run/
    window.location.href = " https://cogo.life/oauth2/authorization/google";
  };

  return (
    <styles.ModalBackdrop>
      <styles.ModalContainer>
        <styles.ModalHeader>
          지금 가입하고
          <br />
          <b>대학생 커뮤니티</b>에 참여하세요!
        </styles.ModalHeader>
        <styles.HeartImage src={LoginHeart} alt="heart" />
        <styles.GoogleButton
          src={GoogleBtn}
          alt="GoogleButton"
          onClick={onGoogleLogin}
        />
      </styles.ModalContainer>
    </styles.ModalBackdrop>
  );
};

export default LoginModal;
