import styled from "styled-components";

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

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrapperBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 2.5rem;
  padding: 3rem 1rem;
`;

export const MenuText = styled.span`
  font-size: 1.9rem;
  font-weight: 500;
  margin-left: 1rem;
`;

export const DateText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #AEAEB2;
  margin-right: 1rem;
`;

export const ArrowImg = styled.img`
  width: 2.2rem;
  height: auto;
`;

export const Hr = styled.hr`
  width: 100%;
  border: 1px solid #ededed;
`;

export const MemoText = styled.div`
  width: 100%;
  min-height: 36rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 184%;
  background-color: #F4F4F4;
  border-radius: 1.3rem;
  border: none;
  color: black;
  padding: 2rem;
  overflow-y: auto;
`;

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0 10rem 0;
`;

export const TimeTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Date = styled.div`
  background-color: black;
  color: white;
  font-size: 1.9rem;
  font-weight: 500;
  border-radius: 10rem;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const Time = styled.button<{ isSelected?: boolean }>`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.3rem 1.1rem;
  border: ${(props) => (props.isSelected ? "none" : "1px solid #E2E2E2")};
  border-radius: 5rem;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "#8f8f8f")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 10.5rem;
  width: calc(100% - 5rem);
  max-width: 468px;
`;

export const HalfButtonG = styled.button`
  padding: 1.6rem;
  background-color: #EDEDED;
  color: black;
  font-size: 2.2rem;
  font-weight: 500;
  // box-shadow: 0 0.4rem 1.3rem rgba(0, 0, 0, 0.25);
  z-index: 100;
  width: 47.5%;
`;

export const HalfButtonB = styled.button`
  padding: 1.6rem;
  background-color: black;
  color: white;
  font-size: 2.2rem;
  font-weight: 500;
  // box-shadow: 0 0.4rem 1.3rem rgba(0, 0, 0, 0.25);
  z-index: 100;
  width: 47.5%;
`;
