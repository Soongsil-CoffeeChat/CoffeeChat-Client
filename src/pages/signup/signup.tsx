import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BackButton from "../../components/button/backButton";
import { useRecoilState } from "recoil";
import {
  phoneNumberState,
  nameState,
  userTypeState,
  partState,
  clubState,
} from "../../atoms/authState";
import * as S from "./signup.styles";
import TermsStep from "./signup_terms";
import NameStep from "./signup_name";
import PhoneNumStep from "./signup_phoneNum";
import OptionSelectStep from "./signup_optionSelect";
import CheckStep from "./signup_check";
import CompleteStep from "./signup_complete";

export default function SignUp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step") || "terms";
  const navigate = useNavigate();

  // 상태 변수들
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [name, setName] = useRecoilState(nameState);
  const [userOption, setUserOption] = useRecoilState(userTypeState);
  const [part, setPart] = useRecoilState(partState);
  const [club, setClub] = useRecoilState(clubState);

  // 단계를 변경하는 함수
  const goToStep = (newStep: string) => {
    setSearchParams({ step: newStep });
  };

  // 새로고침 감지하여 signup으로 리다이렉트
  useEffect(() => {
    // PerformanceNavigationTiming 타입으로 캐스팅
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    if (navigation.type === "reload") {
      navigate("/signup", { replace: true });
    }
  }, [navigate]);

  // 각 단계별 렌더링 함수
  const renderStep = () => {
    switch (step) {
      case "terms":
        return <TermsStep goToStep={goToStep} />;
      case "phonenum":
        return (
          <PhoneNumStep
            goToStep={goToStep}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );
      case "name":
        return <NameStep goToStep={goToStep} name={name} setName={setName} />;
      case "usertype":
        return (
          <OptionSelectStep
            title="거의 다 되었습니다!"
            subtitle="멘토로 가입하실지, 멘티로 가입하실지 알려주세요"
            options={["멘토", "멘티"]}
            selectedOption={userOption}
            setSelectedOption={setUserOption}
            nextStep="part"
            goToStep={goToStep}
          />
        );
      case "part":
        const nextStepAfterPart = userOption === "멘토" ? "club" : "complete";
        return (
          <OptionSelectStep
            title="나의 관심사 또는 희망하는 직종을 선택해주세요"
            subtitle="나중에 관심사가 바뀌어도 수정이 가능해요"
            options={["FE", "BE", "PM", "DESIGN"]}
            selectedOption={part}
            setSelectedOption={setPart}
            nextStep={nextStepAfterPart}
            goToStep={goToStep}
          />
        );
      case "club":
        return (
          <OptionSelectStep
            title="소속된 동아리가 있나요?"
            subtitle="입력하신 정보는 마이페이지에서 수정이 가능해요"
            options={["GDSC", "YOURSSU", "UMC", "LIKELION", "NO CLUB"]}
            selectedOption={club}
            setSelectedOption={setClub}
            nextStep="check"
            goToStep={goToStep}
          />
        );
      case "check":
        return <CheckStep goToStep={goToStep} />;
      case "complete":
        return <CompleteStep />;
      default:
        return <TermsStep goToStep={goToStep} />;
    }
  };

  return (
    <S.Container>
      <S.Header>
        <BackButton />
      </S.Header>
      {renderStep()}
    </S.Container>
  );
}
