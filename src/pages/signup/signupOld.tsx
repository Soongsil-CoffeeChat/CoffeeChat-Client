import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import { authState } from "../../atoms/authState";
import { useRecoilValue } from "recoil";
import LeftArrow from "../../assets/ArrowLeft.svg";
import BlackLine from "../../assets/BlackLine.svg";
import * as styles from "./signupOld.styles";

// 회원가입 페이지

function SignUp() {
  const navigate = useNavigate();
  const { token } = useRecoilValue(authState);
  const [email, setEmail] = useState<string>("");
  const [domain, setDomain] = useState<string>("@self");
  const [code, setCode] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDomainChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDomain(event.target.value);
  };

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {}, [activeButton]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton((prev) => (prev === buttonName ? "" : buttonName));
  };

  const getEmailLink = () => {
    if (domain === "@self") {
      return `https://cogo.life/api/v1/email?email=${email}`;
    } else {
      return `https://cogo.life/api/v1/email?email=${email}${domain}`;
    }
  };

  const sendEmail = () => {
    const link = getEmailLink();
    axios
      .get(link, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("이메일 전송 성공! 📨");
        const receivedCode = response.data;
        localStorage.setItem("authCode", receivedCode);
        alert("이메일 전송이 완료되었습니다.");
      })
      .catch((error) => {
        console.error("Error: ", error);
        alert("이메일 전송에 실패했습니다. 다시 시도해주세요 🥹");
      });
  };

  const verifyCode = () => {
    const savedCode = localStorage.getItem("authCode");
    if (code === savedCode) {
      alert("인증 성공!🙌🏻");
    } else {
      alert("인증 코드가 일치하지 않습니다. 다시 시도해주세요 🥹");
    }
  };

  const submitSignUp = () => {
    const url = "https://cogo.life/api/v1/user/join/mentee";
    const userData = {
      email: `${email}${domain}`,
      nickname: nickname,
      part: activeButton,
    };

    axios
      .post(url, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("회원가입 성공! 코고와 함께 성공해봐요!! 🔥");
        navigate("/");
      })
      .catch((error) => {
        console.error("회원가입 실패: ", error);
        alert("회원가입 과정에서 오류가 발생했습니다. 다시 시도해주세요 😱");
      });
  };

  return (
    <>
      <styles.Container>
        <styles.HeaderContainer>
          <styles.LeftArrow
            src={LeftArrow}
            alt="arrowBnt"
            onClick={goToLogin}
          />
          <styles.HeaderTitle>
            코고에 가입하려면
            <br />
            추가정보가 필요해요{" "}
          </styles.HeaderTitle>
          <styles.HeaderText>
            개인정보는 정보통신망법에 따라 안전하게 보관됩니다.
          </styles.HeaderText>
        </styles.HeaderContainer>
        <styles.InputContainer>
          <styles.HeaderTitle>
            <styles.EmailText>이메일</styles.EmailText>
            <styles.HeaderText>
              이메일(해당 메일로 안내 메일이 갑니다)
            </styles.HeaderText>
          </styles.HeaderTitle>
          <styles.EmailContainer>
            <styles.EmailInput
              type="email"
              name="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
            />
            <styles.EmailSelect value={domain} onChange={handleDomainChange}>
              <option value="@self">직접입력</option>
              <option value="@gmail.com">@gmail.com</option>
              <option value="@naver.com">@naver.com</option>
              <option value="@soongsil.ac.kr">@soongsil.ac.kr</option>
              <option value="@kakao.com">@kakao.com</option>
              <option value="@daum.net">@daum.net</option>
            </styles.EmailSelect>
          </styles.EmailContainer>
          <styles.EmailReceiveBtn onClick={sendEmail}>
            이메일 받기
          </styles.EmailReceiveBtn>
          <styles.CodeInputContainer>
            <styles.CodeInput
              type="code"
              name="code"
              placeholder="인증번호 입력해주세요."
              value={code}
              onChange={handleCodeChange}
            />
            <styles.CheckBtn onClick={verifyCode}>확인</styles.CheckBtn>
          </styles.CodeInputContainer>
          <styles.BlackLine>
            <img src={BlackLine} alt="BlackLine" />
          </styles.BlackLine>
          <styles.HeaderTitle>
            <styles.NicknameTitle>닉네임</styles.NicknameTitle>
          </styles.HeaderTitle>
          <styles.NicknameInputContainer>
            <styles.NicknameInput
              type="nickname"
              name="nickname"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={handleNicknameChange}
            />
          </styles.NicknameInputContainer>
          <styles.BlackLine>
            <img src={BlackLine} alt="BlackLine" />
          </styles.BlackLine>
          <styles.FieldContainer>
            <styles.FieldText>
              나의 관심사 또는 희망하는
              <br />
              분야을 선택해주세요
            </styles.FieldText>
            <styles.FieldButtonContainer>
              {["기획", "FE", "BE", "디자인"].map((buttonName) => (
                <styles.FieldButton
                  key={buttonName}
                  active={activeButton.includes(buttonName)}
                  onClick={() => handleButtonClick(buttonName)}
                >
                  {buttonName}
                </styles.FieldButton>
              ))}
            </styles.FieldButtonContainer>
          </styles.FieldContainer>
          <styles.StartBtn onClick={submitSignUp}>시작하기</styles.StartBtn>
        </styles.InputContainer>
      </styles.Container>
    </>
  );
}

export default SignUp;
