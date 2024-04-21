import styled from "styled-components";
import loadingGIF from "../../assets/loading.gif";

function LoginCallback() {
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
  /* gap: 16px;
  background: var(--Background, #121212); */

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
