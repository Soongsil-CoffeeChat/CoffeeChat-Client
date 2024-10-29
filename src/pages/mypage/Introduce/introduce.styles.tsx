import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

// 캘린더를 감싸주는 스타일
export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
    background-color: white;
  }

  // 비활성화된 날짜 스타일
  .react-calendar__tile:disabled{
    background-color: white;
    color: #AEAEB2;
    abbr {
      color: #AEAEB2;
    }
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      font-size: 1.8rem;
      font-weight: 400;
      color: black;
    }
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 600;
    font-size: 2rem;
    color: black;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: ${(props) => props.theme.darkBlack};
  }
  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }
  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays {
    margin-bottom: 2rem;
    abbr {
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 2rem 0;
    position: relative;
  }
  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    border-radius: 20rem;
    color: white;
    background-color: transparent;
    padding: 0;
    /* abbr {
      display: flex;
      width: 3.6rem;
      height: 3.6rem;
      align-items: center;
      justify-content: center;
      margin: auto;
      background-color: black;
      border-radius: 5rem;
      color: white;
      font-weight: 600;
    } */
  }
  .react-calendar__tile--now {
    background-color: white;
  }
  .selected-date {
    background-color: white;
    padding: 0;
    abbr {
      display: flex;
      width: 3.6rem;
      height: 3.6rem;
      align-items: center;
      justify-content: center;
      margin: auto;
      font-weight: 600;
      background-color: black !important;
      color: white !important;
      border-radius: 5rem;
    }
  }
`;

// 캘린더를 불러옴
export const StyledCalendar = styled(Calendar)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background-color: white;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  color: #aeaeb2;
  margin-bottom: 1rem;
`;

export const BodyContainer = styled.div`
  width: 100%;
`;

export const CalendarWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CalendarCircle = styled.div`
  width: 6rem;
  height: 6rem;
`;

export const Hr = styled.hr`
  width: 100%;
  border: 0.5px solid #c1c1c1;
`;

export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  margin-top: 2rem;
  margin-bottom: 8rem;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  & > :nth-last-child(1):nth-child(odd) {
    grid-column: span 2; // 마지막 요소가 가득 차도록 설정
  }
`;

export const TimeButton = styled.button<{ isSelected?: boolean }>`
  padding: 1rem;
  font-size: 1.7rem;
  background-color: #ededed;
  color: black;
  font-weight: 500;
  width: 100%;
  margin: 1.5rem auto 0 auto;
  flex: 1;
  background-color: ${(props) => (props.isSelected ? "black" : "#EDEDED")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;

//
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 0 3rem 0;
`;

export const MemoTitle = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
`;

export const MemoText = styled.textarea`
  width: 100%;
  height: 26rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 184%;
  background-color: #F4F4F4;
  border-radius: 1.3rem;
  border: none;
  padding: 2rem;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &::placeholder {
    color: #AEAEB2;
  }
`;

export const MemoTextLength = styled.span`
  width: 100%;
  text-align: end;
  color: #AEAEB2;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoffeeImg = styled.img`
  width: 25rem;
  height: auto;
  margin: 8rem auto;
`;

export const CompleteButton = styled.button`
  padding: 1.6rem;
  background-color: #ededed;
  color: black;
  font-size: 2.2rem;
  font-weight: 500;
  width: 100%;
  margin: 3rem auto;
`;

export const NavFirst = styled(Link)`
  font-size: 1.4rem;
  font-weight: 500;
  color: #AEAEB2;
  text-decoration: underline;
  cursor: pointer;
`;