import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import LeftArrow from "../../assets/ArrowLeft.svg";
import * as styles from "./signup.styles";

// 회원가입 페이지

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [domain, setDomain] = useState<string>("직접입력");
  const [nickname, setNickname] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDomainChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDomain(event.target.value);
  };

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    // 클릭한 분야 변경 시 데이터 가져오기
  }, [activeButton]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton((prev) => (prev === buttonName ? "" : buttonName));
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
              (해당 메일로 안내 메일이 갑니다)
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
          <styles.EmailReceiveBtn>이메일 받기</styles.EmailReceiveBtn>
          <styles.NicknameInputContainer>
            <styles.NicknameInput
              type="nickname"
              name="nickname"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={handleNicknameChange}
            />
            <styles.NicknameBtn>확인</styles.NicknameBtn>
          </styles.NicknameInputContainer>
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
          <styles.StartBtn onClick={goToHome}>시작하기</styles.StartBtn>
        </styles.InputContainer>
      </styles.Container>
    </>
  );
}

export default SignUp;
