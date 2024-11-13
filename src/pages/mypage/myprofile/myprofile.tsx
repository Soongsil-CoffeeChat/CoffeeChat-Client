import { useEffect, useState } from "react";
import * as S from "../../signup/signup.styles";
import axiosInstance from "../../../apis/axiosInstance";
import {
  Container,
  Header,
  BodyContainer,
  HalfFixedButton,
} from "../../../components/global.styles";
import BackButton from "../../../components/button/backButton";
import authAxiosInstance from "../../../apis/authAxiosInstance";
import { UserData } from "../../../types/userData";

export default function MyProfile() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneVerificationCode, setPhoneVerificationCode] = useState("");
  const [isPhoneVericationSent, setIsPhoneVericationSent] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [emailCode, setEmailCode] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [isEmailVericationSent, setIsEmailVericationSent] = useState(false);
  const [isPhoneCodeVerified, setIsPhoneCodeVerified] = useState(false);
  const [isEmailCodeVerified, setIsEmailCodeVerified] = useState(false);
  const [phoneTimer, setPhoneTimer] = useState(180);
  const [emailTimer, setEmailTimer] = useState(180);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((response) => {
        console.log(response.data.content);
        setUserData(response.data.content);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const numbersOnly = e.target.value.replace(/\D/g, "");
    if (numbersOnly.length <= 11) {
      setPhoneNumber(numbersOnly);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (!isValidEmail(inputEmail)) {
      setEmailError("유효한 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  // 이메일 유효성 검사 함수
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePhoneCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      setPhoneCode(e.target.value);
    }
  };

  const handleEmailCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 6) {
      setEmailCode(e.target.value);
    }
  };

  // 전화번호 입력에 '-' 넣는 함수
  const displayFormattedPhoneNumber = (numbers: string) => {
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7
      )}`;
    }
  };

  // 전화번호 인증번호 전송 함수
  const phoneSendVerification = async (phoneNumber: string) => {
    if (phoneNumber.length < 10) return;
    console.log(phoneNumber);

    try {
      const response = await axiosInstance.get("/users/sms", {
        params: {
          phoneNum: phoneNumber,
        },
      });
      if (response.status === 200) {
        console.log(response.data.content);
        setPhoneVerificationCode(response.data.content.verificationCode);
        setIsPhoneVericationSent(true);
        setPhoneTimer(180); // 타이머 초기화
      }
    } catch (error) {
      setIsPhoneVericationSent(false);
      console.error("전화번호 인증 실패: ", error);
      alert("전화번호를 다시 입력해주세요.");
    }
  };

  // 전화번호 인증번호 재전송 함수
  const phoneResendVerification = () => {
    setPhoneTimer(180);
    setPhoneCode("");
    phoneSendVerification(phoneNumber);
  };

  // 이메일 인증번호 전송 함수
  const emailSendVerification = async (email: string) => {
    if (!isValidEmail(email)) return;
    try {
      const response = await authAxiosInstance.get("/auth/email", {
        params: {
          email: email,
        },
      });
      if (response.status === 200) {
        console.log(response.data.content);
        setEmailVerificationCode(response.data.content.code);
        setIsEmailVericationSent(true);
        setEmailTimer(180); // 타이머 초기화
      }
    } catch (error) {
      setIsEmailVericationSent(false);
      console.error("이메일 인증 실패: ", error);
      alert("이메일을 다시 입력해주세요.");
    }
  };

  // 전화번호 인증번호 재전송 함수
  const emailResendVerification = () => {
    setEmailTimer(180);
    setEmailCode("");
    emailSendVerification(email);
  };

  // 인증번호 확인 함수
  const verifyPhoneCode = () => {
    if (phoneCode === phoneVerificationCode) {
      setIsPhoneCodeVerified(true);
      alert("전화번호 인증이 완료되었습니다.");
    } else {
      setIsPhoneCodeVerified(false);
      alert("인증번호가 일치하지 않습니다.");
    }
  };
  const verifyEmailCode = () => {
    if (emailCode === emailVerificationCode) {
      setIsEmailCodeVerified(true);
      alert("이메일 인증이 완료되었습니다.");
    } else {
      setIsEmailCodeVerified(false);
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  // 타이머 포맷 함수
  const formatTime = (timer: number) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPhoneVericationSent) {
      interval = setInterval(() => {
        setPhoneTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsPhoneVericationSent(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPhoneVericationSent]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isEmailVericationSent) {
      interval = setInterval(() => {
        setEmailTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsEmailVericationSent(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isEmailVericationSent]);

  // 전화번호와 이메일이 변경되었는지 확인
  const phoneChanged = phoneNumber !== "" && userData ? phoneNumber !== userData.phoneNum : false;
  const emailChanged = email !== "" && userData ? email !== userData.email : false;

  // "저장" 버튼 활성화 조건 정의
  const isSaveDisabled = isEditing && (
    (phoneChanged && !isPhoneCodeVerified) ||
    (emailChanged && !isEmailCodeVerified)
  );

  const handleEditBtn = () => {
    if (!userData) {
      alert("사용자 데이터를 불러오는 중입니다.");
      return;
    }

    // 빈 필드는 userData의 기존 값으로 대체
    const updatedName = name.trim() === "" ? userData.name : name;
    const updatedPhoneNumber =
      phoneNumber.trim() === "" ? userData.phoneNum : phoneNumber;
    const updatedEmail = email.trim() === "" ? userData.email : email;

    // API 요청에 사용할 데이터
    const updatedData = {
      name: updatedName,
      phoneNum: updatedPhoneNumber,
      email: updatedEmail,
    };

    axiosInstance
      .patch("/users", updatedData)
      .then((response) => {
        console.log(updatedData);
        console.log("사용자 정보 업데이트 성공:", response.data.content);
        setIsEditing(false); // 저장 후 편집 모드 종료
        alert("정보가 성공적으로 저장되었습니다.");
        setUserData(response.data.content); // 서버에서 반환한 최신 데이터로 업데이트
      })
      .catch((error) => {
        console.error("사용자 정보 업데이트 실패:", error);
        alert("정보를 저장하는 데 실패했습니다.");
      });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <BodyContainer>
        <S.Title>코고 회원 정보</S.Title>
        <S.Subtitle>
          개인정보는 정보통신망법에 따라 안전하게 보관됩니다
        </S.Subtitle>
        <S.InputContainer>
          <S.EachInput>
            <S.InputWrapper>
              {/* 이름 */}
              <S.InputText>이름</S.InputText>
              {isEditing ? (
                <S.Input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder={userData?.name}
                />
              ) : (
                <S.DisplayText>{userData?.name || name}</S.DisplayText>
              )}
            </S.InputWrapper>
          </S.EachInput>

          {/* 휴대폰 번호 */}
          <S.EachInput>
            <S.InputWrapper>
              <S.InputText>휴대폰 번호</S.InputText>
              {isEditing ? (
                <S.Input
                  type="tel"
                  value={displayFormattedPhoneNumber(phoneNumber)}
                  onChange={handlePhoneChange}
                  placeholder={displayFormattedPhoneNumber(
                    userData?.phoneNum || phoneNumber
                  )}
                />
              ) : (
                <S.DisplayText>
                  {displayFormattedPhoneNumber(
                    userData?.phoneNum || phoneNumber
                  )}
                </S.DisplayText>
              )}
            </S.InputWrapper>
            {isEditing &&
              phoneNumber !== userData?.phoneNum &&
              phoneNumber !== "" && (
                <S.CertButton
                  onClick={() => {
                    !isPhoneVericationSent
                      ? phoneSendVerification(phoneNumber)
                      : phoneResendVerification();
                  }}
                  style={
                    phoneNumber.length === 11
                      ? { color: "white", backgroundColor: "black" }
                      : {}
                  }
                  disabled={phoneNumber.length < 11}
                >
                  {!isPhoneVericationSent ? "인증번호 받기" : "재전송"}
                </S.CertButton>
              )}
          </S.EachInput>

          {/* 인증번호 입력 */}
          {isPhoneVericationSent && isEditing && (
            <S.EachInput>
              <S.InputWrapper>
                <S.InputText>인증번호</S.InputText>
                <S.Input
                  type="tel"
                  value={phoneCode}
                  onChange={handlePhoneCodeChange}
                  placeholder="0000"
                />
              </S.InputWrapper>
              <div>
                {!isPhoneCodeVerified && (
                  <S.CertTime>{formatTime(phoneTimer)}</S.CertTime>
                )}
                <S.CertButton
                  onClick={verifyPhoneCode}
                  style={
                    phoneCode.length === 4
                      ? { color: "white", backgroundColor: "black" }
                      : {}
                  }
                  disabled={phoneCode.length < 4}
                >
                  확인
                </S.CertButton>
              </div>
            </S.EachInput>
          )}

          {/* 이메일 */}
          <S.EachInput>
            <S.InputWrapper>
              <S.InputText>이메일 주소</S.InputText>
              {isEditing ? (
                <S.Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={userData?.email}
                />
              ) : (
                <S.DisplayText>{userData?.email || email}</S.DisplayText>
              )}
            </S.InputWrapper>
            {isEditing && email !== userData?.email && email !== "" && (
              <S.CertButton
                onClick={() => {
                  !isEmailVericationSent
                    ? emailSendVerification(email)
                    : emailResendVerification();
                }}
                style={
                  isValidEmail(email)
                    ? { color: "white", backgroundColor: "black" }
                    : {}
                }
                disabled={!isValidEmail(email)}
              >
                {!isEmailVericationSent ? "인증번호 받기" : "재전송"}
              </S.CertButton>
            )}
          </S.EachInput>
          {emailError && <S.ErrorText>{emailError}</S.ErrorText>}

          {/* 인증번호 입력 */}
          {isEmailVericationSent && isEditing && (
            <S.EachInput>
              <S.InputWrapper>
                <S.InputText>인증번호</S.InputText>
                <S.Input
                  type="tel"
                  value={emailCode}
                  onChange={handleEmailCodeChange}
                  placeholder="0000"
                />
              </S.InputWrapper>
              <div>
                {!isEmailCodeVerified && (
                  <S.CertTime>{formatTime(emailTimer)}</S.CertTime>
                )}
                <S.CertButton
                  onClick={verifyEmailCode}
                  style={
                    emailCode.length === 6
                      ? { color: "white", backgroundColor: "black" }
                      : {}
                  }
                  disabled={emailCode.length < 6}
                >
                  확인
                </S.CertButton>
              </div>
            </S.EachInput>
          )}
        </S.InputContainer>
      </BodyContainer>
      {name !== "" || email !== "" || phoneNumber !== "" || !isEditing ? (
        <HalfFixedButton
          onClick={isEditing ? handleEditBtn : toggleEditMode}
          disabled={isSaveDisabled}
        >
          {isEditing ? "저장하기" : "수정하기"}
        </HalfFixedButton>
      ) : (
        <></>
      )}
    </Container>
  );
}
