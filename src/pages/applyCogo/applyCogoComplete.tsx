import { useState } from "react";
import {
  clubState,
  nameState,
  partState,
  userTypeState,
} from "../../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "./applyCogo.styles";
import {
  Container,
  HalfFixedButton,
  Header,
} from "../../components/global.styles";
import BackButton from "../../components/button/backButton";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Coffee from "../../assets/Coffee.svg";

export default function ApplyCogoComplete() {
  const [memoText, setMemoText] = useState<string>(""); // 메모 텍스트 상태 추가
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate("/cogo");
  };

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <S.Title>멘토님과의 매칭이 곧 이루어질 예정이에요!</S.Title>
        <S.Subtitle>COGO를 하면서 많은 성장을 기원해요!</S.Subtitle>
        <S.SecondContainer>
          <S.CoffeeImg src={Coffee} alt="Coffee"/>
          <S.CompleteButton onClick={handleNextButton}>코고 신청 완료하기</S.CompleteButton>
          <S.NavFirst to="/">처음으로 돌아가기</S.NavFirst>
        </S.SecondContainer>
      </S.BodyContainer>
    </S.Container>
  );
}
