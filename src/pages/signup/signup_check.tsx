import {
  clubState,
  nameState,
  partState,
  userTypeState,
} from "../../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "./signup.styles";

interface NameStepProps {
  goToStep: (step: string) => void;
}

export default function CheckStep({ goToStep }: NameStepProps) {
  const name = useRecoilValue(nameState);
  const userOption = useRecoilValue(userTypeState);
  const part = useRecoilValue(partState);
  const club = useRecoilValue(clubState);

  const handleClear = () => {
    goToStep("complete");
  };

  // "멘티"일 때는 club을 제외한 배열을 생성
  const optionsToDisplay =
    userOption === "멘티" ? [name, part] : [name, part, club];

  return (
    <>
      <S.FormBoxContainer>
        <S.Title>{userOption}님의 정보를 확인해주세요</S.Title>
        <S.Subtitle>입력하신 정보는 하단의 MY에서 수정이 가능해요</S.Subtitle>
        <S.ButtonContainer>
          {optionsToDisplay.map((option) => (
            <S.OptionButton
              key={option}
              style={{ color: "white", backgroundColor: "black" }}
            >
              {option}
            </S.OptionButton>
          ))}
        </S.ButtonContainer>
      </S.FormBoxContainer>
      <S.Button onClick={handleClear}>다음</S.Button>
    </>
  );
}
