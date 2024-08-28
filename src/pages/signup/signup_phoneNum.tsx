import { useEffect, useState } from "react";
import { phoneNumberState } from "../../atoms/authState";
import { useRecoilState } from "recoil";
import * as S from "./signup.styles";
import axiosInstance from "../../apis/axiosInstance";

interface PhoneNumberStepProps {
  goToStep: (step: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
}

export default function PhoneNumStep({ goToStep }: PhoneNumberStepProps) {
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [code, setCode] = useState("");
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [timer, setTimer] = useState(180);

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const numbersOnly = e.target.value.replace(/\D/g, "");
    if (numbersOnly.length <= 11) {
      setPhoneNumber(numbersOnly);
    }
  };

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value.length <= 4) {
      setVerificationCode(e.target.value);
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

  // 인증번호 전송 함수
  const sendVerification = async (phoneNumber: string) => {
    if (phoneNumber.length < 10) return;
    setIsVerificationSent(true);
    console.log(phoneNumber);

    try {
      const response = await axiosInstance.get("/users/sms", {
        params: {
          phoneNum: phoneNumber,
        },
      });
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("전화번호 인증 실패: ", error);
      alert("전화번호를 다시 입력해주세요.");
    }
  };

  // 인증번호 재전송 함수
  const reSendVerification = () => {
    setTimer(180);
    setVerificationCode("");
    sendVerification(phoneNumber);
  };

  // 인증번호 확인 함수
  const verifyCode = () => {
    // 인증번호 확인하는 로직
    setIsCodeVerified(true);
  };

  //타이머 함수
  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVerificationSent) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsVerificationSent(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isVerificationSent]);

  const handleNext = () => {
    goToStep("name");
  };

  return (
    <>
      <S.Title>휴대폰 번호를 입력해주세요</S.Title>
      <S.Subtitle>
        개인정보는 정보통신망법에 따라 안전하게 보관됩니다
      </S.Subtitle>
      <S.InputContainer>
        <S.EachInput>
          <S.InputWrapper>
            <S.InputText>휴대폰 번호</S.InputText>
            <S.Input
              type="tel"
              value={displayFormattedPhoneNumber(phoneNumber)}
              onChange={handlePhoneChange}
              placeholder="010-0000-0000"
            />
          </S.InputWrapper>
          <S.CertButton
            onClick={() => {
              !isVerificationSent ? sendVerification(phoneNumber) : reSendVerification();
            }}
            style={
              phoneNumber.length === 11
                ? { color: "white", backgroundColor: "black" }
                : {}
            }
            disabled={phoneNumber.length < 11}
          >
            {!isVerificationSent ? "인증번호 받기" : "재전송"}
          </S.CertButton>
        </S.EachInput>
        {isVerificationSent && (
          <S.EachInput>
            <S.InputWrapper>
              <S.InputText>인증번호</S.InputText>
              <S.Input
                type="tel"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                placeholder="0000"
              />
            </S.InputWrapper>
            <div>
              <S.CertTime>{formatTime()}</S.CertTime>
              <S.CertButton
                onClick={verifyCode}
                style={
                  verificationCode.length === 4
                    ? { color: "white", backgroundColor: "black" }
                    : {}
                }
                disabled={verificationCode.length < 4}
              >
                확인
              </S.CertButton>
            </div>
          </S.EachInput>
        )}
      </S.InputContainer>
      {isCodeVerified && <S.Button onClick={handleNext}>다음</S.Button>}
    </>
  );
}
