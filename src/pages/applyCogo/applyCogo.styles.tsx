// applyCogo.styles.tsx

import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

// 캘린더를 감싸주는 스타일
export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  padding: 1rem 0 2rem 0;
  min-width: 0;
  border-bottom: 1px solid #EDEDED;
`;

// 년도와 월을 표시하는 서클
export const MonthYearCircle = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 1.9rem;
  color: #626262;
  border: 1px solid #AEAEB2;
`;

// 날짜를 표시하는 서클
export const Circle = styled.div<{ isSelected?: boolean }>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? "#000" : "#EDEDED")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 1.9rem;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#626262")};
  cursor: pointer;
`;

export const DateText = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const DayText = styled.p`
  font-size: 1.3rem;
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
  background-color: ${({ isSelected }) => (isSelected ? "black" : "#EDEDED")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  font-weight: 500;
  width: 100%;
  margin: 1.5rem auto 0 auto;
  flex: 1;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const MemoText = styled.textarea`
  width: 100%;
  min-height: 36rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 184%;
  background-color: #f4f4f4;
  border-radius: 1.3rem;
  border: none;
  padding: 2rem;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &::placeholder {
    color: #aeaeb2;
  }
`;

export const MemoTextLength = styled.span`
  width: 100%;
  text-align: end;
  color: #aeaeb2;
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
  color: #aeaeb2;
  text-decoration: underline;
  cursor: pointer;
`;
