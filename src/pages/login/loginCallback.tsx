import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import loadingGIF from "../../assets/loading.gif";

function LoginCallback() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      axios
        .post("http://cogo.run/reissue", { code }, { withCredentials: true })
        .then((response) => {
          localStorage.setItem("accessToken", response.data.accessToken);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error: ", error);
          alert("다시 로그인 해주세요! 🙏🏻");
        });
    } else {
      window.location.href = "/signup";
    }
  }, []);

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
