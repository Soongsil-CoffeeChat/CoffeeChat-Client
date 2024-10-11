import { useEffect, useState } from "react";
import GoogleBtn from "../../assets/GoogleButton.svg";
import Logo from "../../assets/Logo.svg";
import { Container } from "../../components/global.styles";
import * as S from "./login.styles";
import Intro from "../intro/intro";

// 로그인 모달

const LoginModal = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const onGoogleLogin = () => {
    window.location.href = "https://cogo.life/oauth2/authorization/google";
  };

  useEffect(() => {
    const introDuration = 2500;
    const fadeDuration = 500;

    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setShowIntro(false);
      }, fadeDuration);
    }, introDuration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.Container>
      {showIntro ? (
        <S.AnimatedContainer fadeOut={fadeOut}>
          <Intro />
        </S.AnimatedContainer>
      ) : (
        <S.AnimatedContainer fadeIn>
          <Container>
            <S.LoginContainer>
              <S.Logo src={Logo} alt="Logo" />
              <S.GoogleButton
                src={GoogleBtn}
                alt="GoogleButton"
                onClick={onGoogleLogin}
              />
            </S.LoginContainer>
          </Container>
        </S.AnimatedContainer>
      )}
    </S.Container>
  );
};

export default LoginModal;
