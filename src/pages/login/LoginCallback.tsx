import axios from "axios";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/authState";
import styled from "styled-components";
import loadingGIF from "../../assets/loading.gif";

function LoginCallback() {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();
  const isFetchingRef = useRef(false); // 추가된 부분: 요청 중인지 확인하는 플래그

  useEffect(() => {
    const fetchToken = async () => {
      if (isFetchingRef.current) return; // 이미 요청 중이면 리턴
      isFetchingRef.current = true; // 요청 시작

      try {
        const response = await axios.post(
          "https://cogo.life/reissue",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
            maxRedirects: 0, // 리다이렉션 방지
          }
        );

        console.log("응답 헤더:", response.data);

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
                console.log("signup");
                navigate("/signup");
                break;
              case "main":
                console.log("main");
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
          if (error.response && error.response.status === 302) {
            console.error("리다이렉션 발생:", error.response.headers.location);
          }
        } else {
          console.error("알 수 없는 오류 발생:", error);
        } 
      } finally {
        isFetchingRef.current = false; // 요청 완료
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
