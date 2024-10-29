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
import axiosInstance from "../../apis/axiosInstance"; // axiosInstance 추가

export default function ApplyCogoComplete() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 상태 추가

  const handleNextButton = async () => {
    // 로딩 상태 시작
    setIsLoading(true);

    try {
      // localStorage에서 데이터 불러오기
      const mentorIdStr = localStorage.getItem("mentorId");
      const possibleDateIdStr = localStorage.getItem("possible_date_id");
      const memoText = localStorage.getItem("memoText");

      // 데이터 존재 여부 확인
      if (!mentorIdStr || !possibleDateIdStr || !memoText) {
        alert("필수 데이터가 누락되었습니다. 다시 시도해주세요.");
        setIsLoading(false);
        return;
      }

      // 문자열을 숫자로 변환
      const mentorId = Number(mentorIdStr);
      const possibleDateId = Number(possibleDateIdStr);

      // 변환된 데이터 유효성 검사
      if (isNaN(mentorId) || isNaN(possibleDateId)) {
        alert("데이터 형식이 올바르지 않습니다.");
        setIsLoading(false);
        return;
      }

      // API 요청을 위한 페이로드 준비
      const payload = {
        mentorId: mentorId,
        possibleDateId: possibleDateId,
        memo: memoText,
      };

      console.log(payload)
      // API 요청 보내기 (예시 엔드포인트 사용)
      const response = await axiosInstance.post("/applications", payload);

      // 요청 성공 시 처리
      console.log("API 응답:", response.data);
      alert("COGO 신청이 완료되었습니다!");
      
      // 필요 시 localStorage 데이터 정리
      localStorage.removeItem("mentorId");
      localStorage.removeItem("possible_date_id");
      localStorage.removeItem("memoText");

      // 다음 페이지로 네비게이션
      navigate("/cogo");
    } catch (error) {
      console.error("API 요청 실패:", error);
      alert("COGO 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      // 로딩 상태 해제
      setIsLoading(false);
    }
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
          <S.CompleteButton 
            onClick={handleNextButton} 
            disabled={isLoading} // 로딩 중 버튼 비활성화
          >
            {isLoading ? "처리 중..." : "코고 신청 완료하기"}
          </S.CompleteButton>
          <S.NavFirst to="/">처음으로 돌아가기</S.NavFirst>
        </S.SecondContainer>
      </S.BodyContainer>
    </S.Container>
  );
}
