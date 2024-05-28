import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/authState";
import styled from "styled-components";
import loadingGIF from "../../assets/loading.gif";

function getCookieValue(name: string): string | null {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];

  return cookieValue || null;
}

function LoginCallback() {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  useEffect(() => {
    const sendTokenRequest = async () => {
      try {
        const response = await axios({
          method: "post",
          url: "https://cogo.life/reissue",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        setTimeout(() => {
          const refreshToken = getCookieValue("refresh");
          const loginStatus = getCookieValue("loginStatus");

          if (refreshToken && loginStatus) {
            setAuth({
              isLoggedIn: true,
              username: null,
              token: refreshToken,
            });

            switch (loginStatus) {
              case "signup":
                navigate("/signup");
                break;
              case "main":
                navigate("/");
                break;
              default:
                console.error("로그인 상태가 없음", loginStatus);
            }
          } else {
            console.error("쿠키가 없음");
            setAuth({
              isLoggedIn: false,
              username: null,
              token: null,
            });
          }
        }, 100);
      } catch (error) {
        console.error("토큰이 없음", error);
        setAuth({
          isLoggedIn: false,
          username: null,
          token: null,
        });
      }
    };

    sendTokenRequest();
  }, [setAuth, navigate]);

  return (
    <LoginCallbackWrap>
      <img className="gif" src={loadingGIF} alt="Loading" />
      <div className="text">코고와 함께 성장해보세요!</div>
    </LoginCallbackWrap>
  );
}
export default LoginCallback;

const LoginCallbackWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .gif {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }
  .text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 30px;
  }
`;
