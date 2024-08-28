import { nameState } from "../../atoms/authState";
import { useRecoilState } from "recoil";
import * as S from "./signup.styles";

interface NameStepProps {
  goToStep: (step: string) => void;
  name: string;
  setName: (name: string) => void;
}

export default function NameStep({ goToStep }: NameStepProps) {
  const [name, setName] = useRecoilState(nameState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    if (name === "") {
      alert("성함을 작성해 주세요.");
    } else {
      goToStep("usertype");
    }
  };

  return (
    <>
      <S.Title>성함을 작성해 주세요</S.Title>
      <S.Subtitle>
        입력하신 정보는 홈 화면의 더보기에서 수정이 가능해요
      </S.Subtitle>
      <S.NameInput
        type="text"
        placeholder="성함"
        value={name}
        onChange={handleInputChange}
      />
      {name && <S.Button onClick={handleClear}>다음</S.Button>}
    </>
  );
}
