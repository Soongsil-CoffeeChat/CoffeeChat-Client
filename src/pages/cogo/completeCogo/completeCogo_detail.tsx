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

export default function CompleteCogoDetail() {
  const [time, setTime] = useState<string>(""); // 메모 텍스트 상태 추가
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate("/cogo/complete");
  };

  const options = [
    "09:00 ~ 10:00",
    "10:00 ~ 11:00",
    "11:00 ~ 12:00",
    "13:00 ~ 14:00",
    "19:00 ~ 20:00",
  ];
  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>김지은님과의 코고일정입니다</Title>
        <Subtitle>COGO를 하면서 많은 성장을 기원해요!</Subtitle>
      </S.BodyContainer>
      <S.MenuContainer>
        <S.MemoText>
          안녕하세요, 저는 코고 개발자 김지은입니다. 다름이 아니라, 어쩌구저쩌구
        </S.MemoText>
      </S.MenuContainer>
      <S.TimeContainer>
        <S.TimeTable>
          <S.Date>12/28</S.Date>
          <S.TimeWrapper>
            {options.map((option) => (
              <S.Time
                key={option}
                isSelected={time === option}
                onClick={() => setTime(option)}
              >
                {option}
              </S.Time>
            ))}
          </S.TimeWrapper>
        </S.TimeTable>
      </S.TimeContainer>
      <S.ButtonContainer>
        <S.HalfButtonG onClick={handleNextButton}>거절</S.HalfButtonG>
        <S.HalfButtonB onClick={handleNextButton}>수락</S.HalfButtonB>
      </S.ButtonContainer>
    </S.Container>
  );
}
