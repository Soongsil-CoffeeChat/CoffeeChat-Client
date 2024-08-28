import { useState } from "react";
import {
  clubState,
  nameState,
  partState,
  userTypeState,
} from "../../../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "../cogo.styles";
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

export default function SendCogo() {
  const [memoText, setMemoText] = useState<string>(""); // 메모 텍스트 상태 추가
  const navigate = useNavigate();

  // 글자 수를 변경하는 함수
  const handleMemoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoText(event.target.value);
  };

  const handleDetailButton = () => {
    navigate("/cogo/send/detail");
  };

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>받은 코고</Title>
        <Subtitle>COGO를 하면서 많은 성장을 기원해요!</Subtitle>
        
      </S.BodyContainer>
      <S.MenuContainer>
        <S.MenuWrapperBox onClick={handleDetailButton}>
          <S.MenuText>나는지은님의 코고신청</S.MenuText>
          <S.DateText>2024/07/24</S.DateText>
        </S.MenuWrapperBox>
        <S.MenuWrapperBox onClick={handleDetailButton}>
          <S.MenuText>나는 지은님의 코고신청</S.MenuText>
          <S.DateText>2024/07/24</S.DateText>
        </S.MenuWrapperBox>
      </S.MenuContainer>
    </S.Container>
  );
}
    