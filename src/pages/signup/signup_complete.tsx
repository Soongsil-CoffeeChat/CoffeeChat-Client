import {
  clubState,
  nameState,
  partState,
  phoneNumberState,
  userTypeState,
} from "../../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "./signup.styles";
import { useNavigate } from "react-router-dom";
import StartCogoFire from "../../assets/StartCogoFire.svg";
import { FullButton } from "../../components/global.styles";

export default function CompleteStep() {
  const name = useRecoilValue(nameState);
  const phonenum = useRecoilValue(phoneNumberState);
  const userOption = useRecoilValue(userTypeState);
  const part = useRecoilValue(partState);
  const club = useRecoilValue(clubState);
  const navigate = useNavigate();

  const handleClear = () => {
    navigate("/");
  };

  return (
    <>
      <S.FormBoxContainer>
        <S.Title>
          {name} {userOption}님! 반갑습니다.
        </S.Title>
        <S.Subtitle>
          COGO와 함께 커뮤니티 활성화에 동참해주셔서 고마워요 <br /> 앞으로
          열혈한 활동 기대할게요!
        </S.Subtitle>
        <S.ButtonContainer>
          <S.FireImg
            src={StartCogoFire}
            alt="StartCogoFire"
          />
        </S.ButtonContainer>
      </S.FormBoxContainer>
      <FullButton onClick={handleClear}>코고 가입 완료하기</FullButton>
    </>
  );
}
