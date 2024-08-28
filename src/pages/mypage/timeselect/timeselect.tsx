import { useState } from "react";
import {
  clubState,
  nameState,
  partState,
  userTypeState,
} from "../../../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "./timeselect.styles";
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

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function TimeSelect() {
  const today = new Date();
  const todayWithoutTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const [dates, setDates] = useState<Date[]>([todayWithoutTime]);
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    todayWithoutTime,
  ]);
  const maxDate = moment(todayWithoutTime).add(13, "days").toDate();
  const attendDay = ["2023-12-03", "2023-12-13"]; // 예시
  const navigate = useNavigate();

  const [timesPerDate, setTimesPerDate] = useState<{ [key: string]: string[] }>(
    {}
  );

  const handleDateChange = (value: Date) => {
    const dateString = moment(value).format("YYYY-MM-DD");

    if (selectedDates.some((date) => date.getTime() === value.getTime())) {
      // 이미 선택된 날짜라면 제거
      setSelectedDates(
        selectedDates.filter((date) => date.getTime() !== value.getTime())
      );
      // 해당 날짜의 시간 정보도 함께 제거
      const updatedTimes = { ...timesPerDate };
      delete updatedTimes[dateString];
      setTimesPerDate(updatedTimes);
    } else {
      // 선택되지 않은 날짜라면 추가
      setSelectedDates([...selectedDates, value]);
      // 날짜를 추가할 때 해당 날짜의 시간 배열 초기화
      setTimesPerDate({
        ...timesPerDate,
        [dateString]: [],
      });
    }
  };

  const handleTimeClick = (date: Date, option: string) => {
    const dateString = moment(date).format("YYYY-MM-DD");

    if (timesPerDate[dateString]?.includes(option)) {
      // 이미 선택된 시간대라면 배열에서 제거
      const updatedTimes = timesPerDate[dateString].filter(
        (time) => time !== option
      );

      // 시간대 배열이 비어 있으면 해당 날짜도 삭제
      if (updatedTimes.length === 0) {
        setSelectedDates(
          selectedDates.filter((d) => d.getTime() !== date.getTime())
        );
        const updatedTimesPerDate = { ...timesPerDate };
        delete updatedTimesPerDate[dateString];
        setTimesPerDate(updatedTimesPerDate);
      } else {
        setTimesPerDate({
          ...timesPerDate,
          [dateString]: updatedTimes,
        });
      }
    } else {
      // 선택되지 않은 시간대라면 배열에 추가
      setTimesPerDate({
        ...timesPerDate,
        [dateString]: [...(timesPerDate[dateString] || []), option],
      });
    }
  };

  const optionsToDisplay = [
    "10: 00 ~ 11: 00",
    "11: 00 ~ 12: 00",
    "12: 00 ~ 13: 00",
    "13: 00 ~ 14: 00",
    "14: 00 ~ 15: 00",
    "15: 00 ~ 16: 00",
    "16: 00 ~ 17: 00",
    "17: 00 ~ 18: 00",
    "18: 00 ~ 19: 00",
    "19: 00 ~ 20: 00",
    "20: 00 ~ 21: 00",
    "21: 00 ~ 22: 00",
  ];

  // 날짜를 오름차순으로 정렬
  const sortedDates = selectedDates.sort((a, b) => a.getTime() - b.getTime());

  const handleNextButton = () => {
    navigate("/applyCogoMemo");
  };

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>COGO 시간</Title>
        <Subtitle>COGO를 진행하기 편한 시간 대를 알려주세요.</Subtitle>
        <S.StyledCalendarWrapper>
          <S.StyledCalendar
            value={null}
            onClickDay={handleDateChange}
            minDate={todayWithoutTime} // 최소 선택 가능 날짜
            maxDate={maxDate} // 최대 선택 가능 날짜
            tileDisabled={({ date, view }) =>
              view === "month" && (date < todayWithoutTime || date > maxDate)
            }
            tileClassName={({ date, view }) => {
              if (
                view === "month" &&
                selectedDates.some((d) => d.getTime() === date.getTime())
              ) {
                return "selected-date"; // 선택된 날짜에 스타일을 적용
              }
              return null;
            }}
            formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
            formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
            formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
            calendarType="gregory" // 일요일 부터 시작
            showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
            next2Label={null} // +1년 & +10년 이동 버튼 숨기기
            prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
            minDetail="month" // 10년단위 년도 숨기기
          />
        </S.StyledCalendarWrapper>
        <S.TimeContainer>
          {sortedDates.map((date) => {
            const dateString = moment(date).format("YYYY-MM-DD");
            return (
              <div key={dateString}>
                <S.Subtitle>{dateString}</S.Subtitle>
                <S.ButtonContainer>
                  {optionsToDisplay.map((option) => (
                    <S.TimeButton
                      key={option}
                      isSelected={timesPerDate[dateString]?.includes(option)}
                      onClick={() => handleTimeClick(date, option)}
                    >
                      {option}
                    </S.TimeButton>
                  ))}
                </S.ButtonContainer>
              </div>
            );
          })}
        </S.TimeContainer>
      </S.BodyContainer>
      <HalfFixedButton
        onClick={handleNextButton}
        style={{ boxShadow: "0 0.4rem 1.2rem rgba(0, 0, 0, 0.25)" }}
      >
        다음
      </HalfFixedButton>
    </S.Container>
  );
}
