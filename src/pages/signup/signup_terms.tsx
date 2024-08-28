import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface TermsStepProps {
  goToStep: (step: string) => void;
}

interface CheckStates {
  [key: string]: boolean;
}

export default function TermsStep({ goToStep }: TermsStepProps) {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (allChecked === false) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500); // 페이드아웃 애니메이션 시간과 일치
      return () => clearTimeout(timer);
    }
  }, []);

  // 체크박스 로직 통합
  const [checkStates, setCheckStates] = useState<CheckStates>({
    checkState1: false,
    checkState2: false,
    checkState3: false,
    checkState4: false,
    checkState5: false,
  });

  const checkDescriptions: { [key: string]: string } = {
    checkState1: "서비스 이용약관 (필수)",
    checkState2: "개인정보 수집 및 이용 동의 (필수)",
    checkState3: "만 14세 이상 (필수)",
    checkState4: "서비스 알림 수신 (필수)",
    checkState5: "서비스 혜택 정보 수신 (선택)",
  };

  // 체크박스 로직 중 전체선택
  const toggleAllCheck = () => {
    const newAllCheck = !allChecked;
    setAllChecked(newAllCheck);
    setCheckStates({
      checkState1: newAllCheck,
      checkState2: newAllCheck,
      checkState3: newAllCheck,
      checkState4: newAllCheck,
      checkState5: checkStates.checkState5,
    });
  };

  // 개별 체크박스 선택
  const toggleCheck = (name: string) => {
    const newCheckStates = {
      ...checkStates,
      [name]: !checkStates[name],
    };
    setCheckStates(newCheckStates);

    // 전체 동의 체크 여부 확인
    const allCheck = Object.values(newCheckStates).every((state) => state);
    setAllChecked(allCheck);
  };

  const handleAgreeAll = () => {
    toggleAllCheck();
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        goToStep("phonenum");
      }, 600);
    }, 500);
  };

  return (
    <ModalOverlay isOpen={isVisible}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* 체크박스 로직 map함수로 뿌려줌 */}
        {Object.keys(checkStates).map((checkStateName) => (
          <CheckBoxItem key={checkStateName}>
            <input
              type="checkbox"
              id={checkStateName}
              checked={checkStates[checkStateName]}
              onChange={() => toggleCheck(checkStateName)}
            ></input>
            <span>{checkDescriptions[checkStateName]}</span>
          </CheckBoxItem>
        ))}
        <CloseButton onClick={handleAgreeAll} allChecked={allChecked}>
          동의하고 시작하기
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}

interface CloseButtonProps {
  allChecked: boolean;
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(237, 237, 237, 1);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  height: 100dvh;
  z-index: 1000;
  animation: ${({ isOpen }) => (isOpen ? "" : slideDown)} 0.5s ease-out forwards;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  width: 100%;
  max-height: 80%;
  overflow-y: auto;
  transform: translateY(100%);
  opacity: 0;
  animation: ${slideUp} 0.5s ease-out forwards;
`;

const CheckBoxItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  gap: 1rem;
  padding: 0 2rem;
  span {
    margin: 0;
    font-size: 1.6rem;
    display: inline-block;
  }
`;

const CloseButton = styled.button<CloseButtonProps>`
  background-color: ${(props) => (props.allChecked ? "black" : "#EDEDED")};
  color: ${(props) => (props.allChecked ? "white" : "black")};
  font-size: 2rem;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem;
  margin: 2rem 0;
`;
