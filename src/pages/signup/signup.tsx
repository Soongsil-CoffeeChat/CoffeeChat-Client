import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import LeftArrow from "../../assets/ArrowLeft.svg";
import * as styles from "./signup.styles";

// 회원가입 페이지

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [domain, setDomain] = useState<string>("@gmail.com");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDomainChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDomain(event.target.value);
  };

  const goToLogin = () => {
    navigate("/login");
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
          <styles.HeaderTitle>이메일로 가입해 주세요 </styles.HeaderTitle>
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
              <option value="@gmail.com">@gmail.com</option>
              <option value="@naver.com">@naver.com</option>
              <option value="@soongsil.ac.kr">@soongsil.ac.kr</option>
              <option value="@kakao.com">@kakao.com</option>
              <option value="@daum.net">@daum.net</option>
            </styles.EmailSelect>
          </styles.EmailContainer>
          <styles.EmailReceiveBtn>이메일 받기</styles.EmailReceiveBtn>
        </styles.InputContainer>
      </styles.Container>
    </>
  );
}

export default SignUp;
