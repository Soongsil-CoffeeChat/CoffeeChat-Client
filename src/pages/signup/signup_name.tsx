import { nameState, phoneNumberState } from "../../atoms/authState";
import { useRecoilState } from "recoil";
import * as S from "./signup.styles";
import axiosInstance from "../../apis/axiosInstance";

interface NameStepProps {
  goToStep: (step: string) => void;
  name: string;
  setName: (name: string) => void;
}

export default function NameStep({ goToStep }: NameStepProps) {
  const [name, setName] = useRecoilState(nameState);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    sendUserData(name, phoneNumber);
    goToStep("usertype");
  };

  const sendUserData = async (name: string, phoneNumber: string) => {
    const userData = {
      phoneNum: phoneNumber,
      name: name,
    };

    try {
      const response = await axiosInstance.post("/users", userData);
      console.log(response.data.content);
    } catch (error) {
      console.error("전화번호 인증 실패: ", error);
      alert("전화번호를 다시 입력해주세요.");
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
