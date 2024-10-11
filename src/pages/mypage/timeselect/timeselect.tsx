import { useEffect, useMemo, useState } from "react";
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
import axiosInstance from "../../../apis/axiosInstance";

interface PossibleDate {
  possible_date_id: number;
  date: string;
  start_time: string;
  end_time: string;
}

interface UpdatedDate {
  date: string;
  start_time: string;
  end_time: string;
}

interface TimeSlot {
  start_time: string;
  end_time: string;
}

type PossibleDatesData = PossibleDate[];
type UpdatedDatesData = UpdatedDate[];

export default function TimeSelect() {
  const today = new Date();
  const todayWithoutTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const maxDate = moment(todayWithoutTime).add(13, "days").toDate();
  const [possibleDates, setPossibleDates] = useState<PossibleDatesData>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [mentorId, setMentorId] = useState<string>("");
  const [timesPerDate, setTimesPerDate] = useState<{
    [key: string]: TimeSlot[];
  }>({});
  const [currentSelectedDate, setCurrentSelectedDate] = useState<Date | null>(null);

  const fetchPossibleDates = async () => {
    try {
      const response = await axiosInstance.get(`/possibleDates/${mentorId}`);
      console.log("possibleDates get: ", response.data.content);
      setPossibleDates(response.data.content || []);
    } catch (error) {
      console.error("멘토아이디 조회 실패: ", error);
      alert("데이터를 가져오는 데 실패했습니다.");
      setPossibleDates([]);
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((response) => {
        console.log(response.data.content);
        setMentorId(response.data.content.mentorId);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, []);

  useEffect(() => {
    if (mentorId) {
      fetchPossibleDates();
    }
  }, [mentorId]);

  const handleDateChange = (value: Date) => {
    const dateString = moment(value).format("YYYY-MM-DD");

    // 현재 클릭된 날짜를 업데이트
    setCurrentSelectedDate(value);
  };

  const handleTimeClick = (date: Date, option: string) => {
    const dateString = moment(date).format("YYYY-MM-DD");
    const [start_time, end_time] = option.split(" ~ ").map((s) => s.trim());

    if (!timesPerDate[dateString]) {
      setTimesPerDate({
        ...timesPerDate,
        [dateString]: [{ start_time, end_time }],
      });
      return;
    }

    const existingIndex = timesPerDate[dateString].findIndex(
      (slot) => slot.start_time === start_time && slot.end_time === end_time
    );

    if (existingIndex !== -1) {
      // 이미 선택된 시간대라면 배열에서 제거
      const updatedSlots = [...timesPerDate[dateString]];
      updatedSlots.splice(existingIndex, 1);

      if (updatedSlots.length === 0) {
        // 시간대 배열이 비어 있으면 해당 날짜도 삭제
        const updatedTimesPerDate = { ...timesPerDate };
        delete updatedTimesPerDate[dateString];
        setTimesPerDate(updatedTimesPerDate);
      } else {
        setTimesPerDate({
          ...timesPerDate,
          [dateString]: updatedSlots,
        });
      }
    } else {
      // 선택되지 않은 시간대라면 배열에 추가
      setTimesPerDate({
        ...timesPerDate,
        [dateString]: [...timesPerDate[dateString], { start_time, end_time }],
      });
    }
  };

  console.log("timesPerDate: ", timesPerDate);
  const optionsToDisplay = [
    "10:00 ~ 11:00",
    "11:00 ~ 12:00",
    "12:00 ~ 13:00",
    "13:00 ~ 14:00",
    "14:00 ~ 15:00",
    "15:00 ~ 16:00",
    "16:00 ~ 17:00",
    "17:00 ~ 18:00",
    "18:00 ~ 19:00",
    "19:00 ~ 20:00",
    "20:00 ~ 21:00",
    "21:00 ~ 22:00",
  ];

  // possibleDates를 날짜별로 그룹화하고, 각 그룹 내의 시간대를 정렬
  const groupedPossibleDates = useMemo(() => {
    if (!possibleDates || possibleDates.length === 0) {
      return { grouped: {}, sortedDates: [] };
    }

    // 그룹화
    const grouped = possibleDates.reduce((acc, curr) => {
      if (!acc[curr.date]) {
        acc[curr.date] = [];
      }
      acc[curr.date].push(curr);
      return acc;
    }, {} as { [key: string]: PossibleDate[] });

    // 날짜 오름차순 정렬
    const sortedDates = Object.keys(grouped).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );

    // 각 날짜 내의 시간대 정렬 (오름차순)
    sortedDates.forEach((date) => {
      grouped[date].sort((a, b) => a.start_time.localeCompare(b.start_time));
    });

    return { grouped, sortedDates };
  }, [possibleDates]);

  const handleEditBtn = async () => {
    if (!possibleDates) {
      alert("사용자 데이터를 불러오는 중입니다.");
      return;
    }

    // API 요청에 사용할 데이터
    const updatedDatesData: UpdatedDatesData = [];

    Object.keys(timesPerDate).forEach((dateStr) => {
      timesPerDate[dateStr].forEach((slot) => {
        updatedDatesData.push({
          date: dateStr,
          start_time: slot.start_time,
          end_time: slot.end_time,
        });
      });
    });
    console.log("updatedDatesData", updatedDatesData);

    try {
      const response = await axiosInstance.post(
        `/possibleDates`,
        updatedDatesData
      );
      console.log("사용자 정보 업데이트 성공:", response.data);
      setIsEditing(false);
      alert("정보가 성공적으로 저장되었습니다.");

      // 최신 데이터를 다시 가져옵니다.
      await fetchPossibleDates();
    } catch (error) {
      console.error("사용자 정보 업데이트 실패:", error);
      alert("정보를 저장하는 데 실패했습니다.");
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>COGO 시간</Title>
        <Subtitle>COGO를 진행하기 편한 시간 대를 알려주세요.</Subtitle>
        {isEditing ? (
          <>
            <S.StyledCalendarWrapper>
              <S.StyledCalendar
                value={null}
                onClickDay={handleDateChange}
                minDate={todayWithoutTime} // 최소 선택 가능 날짜
                maxDate={maxDate} // 최대 선택 가능 날짜
                tileDisabled={({ date, view }) =>
                  view === "month" &&
                  (date < todayWithoutTime || date > maxDate)
                }
                tileClassName={({ date, view }) => {
                  if (view === "month") {
                    const dateTime = date.getTime();
                    const dateString = moment(date).format("YYYY-MM-DD");

                    if (timesPerDate[dateString] && timesPerDate[dateString].length > 0) {
                      // 시간대가 선택된 날짜
                      return "date-selected-with-time";
                    } else if (currentSelectedDate && currentSelectedDate.getTime() === dateTime) {
                      // 현재 클릭된 날짜 (시간대 선택 없음)
                      return "date-selected-no-time";
                    }
                  }
                  return null;
                }}
                formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
                formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
                formatMonthYear={(locale, date) =>
                  moment(date).format("YYYY. MM")
                } // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                calendarType="gregory" // 일요일 부터 시작
                showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
                next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                minDetail="month" // 10년단위 년도 숨기기
              />
            </S.StyledCalendarWrapper>
            {currentSelectedDate && (
              <S.TimeContainer>
                <div>
                  <S.Subtitle>{moment(currentSelectedDate).format("YYYY-MM-DD")}</S.Subtitle>
                  <S.ButtonContainer>
                    {optionsToDisplay.map((option) => (
                      <S.TimeButton
                        key={option}
                        isSelected={
                          timesPerDate[moment(currentSelectedDate).format("YYYY-MM-DD")]?.some(
                            (slot) =>
                              `${slot.start_time} ~ ${slot.end_time}` ===
                              option
                          ) || false
                        }
                        onClick={() => handleTimeClick(currentSelectedDate, option)}
                      >
                        {option}
                      </S.TimeButton>
                    ))}
                  </S.ButtonContainer>
                </div>
              </S.TimeContainer>
            )}
          </>
        ) : (
          <>
            {possibleDates.length > 0 ? (
              <S.TimeContainer>
                {groupedPossibleDates.sortedDates.map(date => (
                  <div key={date}>
                    <S.Subtitle>{moment(date).format("M/D")}</S.Subtitle>
                    <S.ButtonContainer>
                      {groupedPossibleDates.grouped[date].map(slot => (
                        <S.TimeButton
                          key={slot.possible_date_id}
                          style={{ color: "white", backgroundColor: "black" }}
                        >
                          {`${slot.start_time.slice(0, 5)} ~ ${slot.end_time.slice(0, 5)}`}
                        </S.TimeButton>
                      ))}
                    </S.ButtonContainer>
                  </div>
                ))}
              </S.TimeContainer>
            ) : (
              <S.NoDatesMessage>
                코고를 진행 가능한 날짜가 없습니다.
              </S.NoDatesMessage>
            )}
          </>
        )}
      </S.BodyContainer>
      <HalfFixedButton
        onClick={isEditing ? handleEditBtn : toggleEditMode}
        style={{ boxShadow: "0 0.4rem 1.2rem rgba(0, 0, 0, 0.25)" }}
      >
        {isEditing ? "저장하기" : "수정하기"}
      </HalfFixedButton>
    </S.Container>
  );
}
