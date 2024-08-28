import { useState } from "react";
import {
  clubState,
  nameState,
  partState,
  userTypeState,
} from "../.././../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "./introduce.styles";
import {
  Container,
  HalfFixedButton,
  Header,
  Subtitle,
  Title,
} from "../../../components/global.styles";
import BackButton from "../../../components/button/backButton";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Introduce() {
  const [memoText, setMemoText] = useState<string>(""); // 메모 텍스트 상태 추가
  const navigate = useNavigate();

  // 글자 수를 변경하는 함수
  const handleMemoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoText(event.target.value);
  };
  const handleNextButton = () => {
    navigate("/applyCogoComplete");
  };

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>프로필의 자기소개를 남겨주세요</Title>
        <Subtitle>입력하신 정보는 하단의  MY에서 수정이 가능해요</Subtitle>
        
      </S.BodyContainer>
      <S.TextContainer>
        <S.MemoText 
          placeholder="내용을 입력해주세요"
          value={memoText} // 상태 값을 텍스트 영역에 바인딩
          onChange={handleMemoChange} // 텍스트 변경 시 handleMemoChange 호출
          maxLength={200} // 글자 수 제한 (선택 사항)
        />
        <S.MemoTextLength>{memoText.length}/200</S.MemoTextLength>
      </S.TextContainer>
      <HalfFixedButton onClick={handleNextButton}>다음</HalfFixedButton>
    </S.Container>
  );
}
