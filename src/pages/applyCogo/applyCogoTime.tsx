import { useEffect, useState } from "react";
import * as S from "./applyCogo.styles";
import {
  HalfFixedButton,
  Header,
  Subtitle,
  Title,
} from "../../components/global.styles";
import BackButton from "../../components/button/backButton";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";

type PossibleDate = {
  possible_date_id: number;
  date: string;
  start_time: string;
  end_time: string;
};

type PossibleDatesData = PossibleDate[];

// 날짜 비교를 위한 유틸리티 함수
function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export default function ApplyCogoTime() {
  // 오늘 날짜를 정규화하여 초기값으로 설정
  const today = new Date();
  const normalizedToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    normalizedToday
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timesForDate, setTimesForDate] = useState<string[]>([]);
  const { mentorid } = useParams();
  const [possibleDates, setPossibleDates] = useState<PossibleDatesData>([]);
  const navigate = useNavigate();

  const fetchPossibleDates = async () => {
    try {
      const response = await axiosInstance.get(`/possibleDates/${mentorid}`);
      console.log("possibleDates get: ", response.data.content);
      setPossibleDates(response.data.content || []);
    } catch (error) {
      console.error("멘토아이디 조회 실패: ", error);
      alert("데이터를 가져오는 데 실패했습니다.");
      setPossibleDates([]);
    }
  };

  useEffect(() => {
      fetchPossibleDates();
  }, []);

  // selectedDate 또는 possibleDates가 변경될 때 timesForDate 업데이트
  useEffect(() => {
    if (selectedDate) {
      const dateString = moment(selectedDate).format("YYYY-MM-DD");
      const timesForSelectedDate = possibleDates
        .filter((pd) => pd.date === dateString)
        .map(
          (pd) => `${pd.start_time.slice(0, 5)} ~ ${pd.end_time.slice(0, 5)}`
        );

      setTimesForDate(timesForSelectedDate);
    } else {
      setTimesForDate([]);
    }
  }, [selectedDate, possibleDates]);

  // 다음 14일의 날짜 배열을 생성하고 시간 부분을 제거하여 정규화
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    // 시간 부분을 0으로 설정하여 날짜를 정규화
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  });

  const formatDate = (date: Date) => date.getDate();
  const formatDay = (date: Date) =>
    date.toLocaleDateString("ko-KR", { weekday: "short" });

  const handleDateChange = (value: Date) => {
    // 선택된 날짜를 정규화하여 시간 부분 제거
    const normalizedDate = new Date(
      value.getFullYear(),
      value.getMonth(),
      value.getDate()
    );

    if (selectedDate && isSameDay(selectedDate, normalizedDate)) {
      // 이미 선택된 날짜라면 선택 해제
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      // 새로운 날짜 선택
      setSelectedDate(normalizedDate);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (option: string) => {
    if (selectedTime === option) {
      // 이미 선택된 시간대라면 선택 해제
      setSelectedTime(null);
    } else {
      // 새로운 시간대 선택
      setSelectedTime(option);
    }
  };

  const handleNextButton = () => {
    // 필요한 데이터 전달 및 다음 화면으로 이동

    // Find the possible_date_id
    const formattedSelectedDate = selectedDate
      ? moment(selectedDate).format("YYYY-MM-DD")
      : null;

    const matchingPossibleDate = possibleDates.find((pd) => {
      const timeOption = `${pd.start_time.slice(0, 5)} ~ ${pd.end_time.slice(
        0,
        5
      )}`;
      return pd.date === formattedSelectedDate && timeOption === selectedTime;
    });

    const possible_date_id = matchingPossibleDate
      ? matchingPossibleDate.possible_date_id
      : null;

    console.log("Possible Date ID:", possible_date_id);

    // Store in localStorage
    if (possible_date_id) {
      localStorage.setItem("possible_date_id", possible_date_id.toString());
    } else {
      console.warn("No matching possible_date_id found.");
    }

    navigate(`/applyCogoMemo/${mentorid}`, {
      state: {
        selectedDate: formattedSelectedDate,
        selectedTime,
      },
    });
  };

  console.log(selectedDate, selectedTime);

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>멘토님과 시간을 맞춰보세요</Title>
        <Subtitle>COGO를 진행하기 편한 시간 대를 알려주세요.</Subtitle>
        <S.CalendarWrapper>
          <S.MonthYearCircle>
            <S.DayText>{normalizedToday.getFullYear()}</S.DayText>
            <S.DateText>{normalizedToday.getMonth() + 1}월</S.DateText>
          </S.MonthYearCircle>
          {dates.map((date, index) => (
            <S.Circle
              key={index}
              onClick={() => handleDateChange(date)}
              isSelected={selectedDate ? isSameDay(selectedDate, date) : false}
            >
              <S.DateText>{formatDate(date)}</S.DateText>
              <S.DayText>{formatDay(date)}</S.DayText>
            </S.Circle>
          ))}
        </S.CalendarWrapper>
        <S.TimeContainer>
          {selectedDate && (
            <div>
              <S.ButtonContainer>
                {timesForDate.length > 0 ? (
                  timesForDate.map((timeOption, index) => (
                    <S.TimeButton
                      key={index}
                      isSelected={selectedTime === timeOption}
                      onClick={() => handleTimeClick(timeOption)}
                    >
                      {timeOption}
                    </S.TimeButton>
                  ))
                ) : (
                  <div style={{ fontSize: "1.5rem" }}>
                    해당 날짜에는 가능한 시간이 없습니다.
                  </div>
                )}
              </S.ButtonContainer>
            </div>
          )}
        </S.TimeContainer>
      </S.BodyContainer>
      <HalfFixedButton
        onClick={handleNextButton}
        disabled={!selectedDate || !selectedTime}
        style={{
          boxShadow: "0 0.4rem 1.2rem rgba(0, 0, 0, 0.25)",
          opacity: !selectedDate || !selectedTime ? 0.5 : 1,
        }}
      >
        다음
      </HalfFixedButton>
    </S.Container>
  );
}
