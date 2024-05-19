import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100vw;
  height: 100vh; */
`;

export const HeaderContainer = styled.div``;

export const BackButton = styled.button`
  left: 20px;
  top: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const HeaderText = styled.h1`
  font-size: 18px;
  color: #333;
`;

export const HeaderSubText = styled.p`
  font-size: 14px;
  color: #666;
`;

export const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimeSlotContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center; // 중앙 정렬을 위해 추가
`;

interface TimeSlotButton {
  isSelected: boolean;
}
export const TimeSlotButton = styled.button<TimeSlotButton>`
  background-color: ${(props) =>
    props.isSelected ? "#87CEEB" : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: 1px solid ${(props) => (props.isSelected ? "#87CEEB" : "grey")};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: calc(50% - 22px); // 전체 폭의 절반에서 간격을 고려한 너비 설정

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#87CEEB" : "#e0f0ff")};
  }
`;
export const ApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #62c6c4 0%, #02a6cb 100%);
  width: 330px;
  height: 50px;
  border-radius: 7px;
  border: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start; /* 상단 정렬 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  height: 10%; /* 필요한 경우 높이 설정 */
  width: 100%; /* 필요한 경우 너비 설정 */
`;
