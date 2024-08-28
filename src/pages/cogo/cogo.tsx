import { useState } from "react";
import {
  clubState,
  nameState,
  partState,
  userTypeState,
} from "../../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "./cogo.styles";
import {
  Container,
  HalfFixedButton,
  Header,
  Subtitle,
  Title,
} from "../../components/global.styles";
import BackButton from "../../components/button/backButton";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/ArrowRight.svg"

export default function Cogo() {
  const [memoText, setMemoText] = useState<string>(""); // 메모 텍스트 상태 추가
  const navigate = useNavigate();

  // 글자 수를 변경하는 함수
  const handleMemoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoText(event.target.value);
  };

  const handleSendButton = () => {
    navigate("/cogo/send");
  };

  const handleCompleteButton = () => {
    navigate("/cogo/complete");
  };

  return (
    <S.Container>
      <Header style={{opacity: "0"}}>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>내 코고함</Title>
        <Subtitle>COGO를 하면서 많은 성장을 기원해요!</Subtitle>
        
      </S.BodyContainer>
      <S.MenuContainer>
        <S.MenuWrapper onClick={handleSendButton}>
          <S.MenuText>받은 코고</S.MenuText>
          <S.ArrowImg src={Arrow} alt="Arrow" />
        </S.MenuWrapper>
        <S.Hr />
        <S.MenuWrapper onClick={handleCompleteButton}>
          <S.MenuText>성사된 코고</S.MenuText>
          <S.ArrowImg src={Arrow} alt="Arrow" />
        </S.MenuWrapper>
      </S.MenuContainer>
    </S.Container>
  );
}
    