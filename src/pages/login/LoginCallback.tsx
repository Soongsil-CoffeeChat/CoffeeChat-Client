import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/authState";
import styled from "styled-components";
import loadingGIF from "../../assets/loading.gif";

function LoginCallback() {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          "https://cogo.life/reissue",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        // console.log("응답 헤더:", response.headers);

        if (response.status === 200) {
          const accessToken = response.headers["access"];
          const loginStatus = response.headers["loginstatus"];

          if (accessToken && loginStatus) {
            setAuth({
              isLoggedIn: true,
              username: null,
              token: accessToken,
            });

            localStorage.setItem("isLoggedIn", "true");

            switch (loginStatus) {
              case "signup":
                navigate("/signup");
                break;
              case "main":
                navigate("/");
                break;
              default:
                console.error("알 수 없는 로그인 상태:", loginStatus);
            }
          } else {
            console.error("필수 토큰이나 로그인 상태가 없음");
            setAuth({
              isLoggedIn: false,
              username: null,
              token: null,
            });
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("요청 처리 중 오류 발생:", error.message);
        } else {
          console.error("알 수 없는 오류 발생:", error);
        }
      }
    };

    fetchToken();
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
