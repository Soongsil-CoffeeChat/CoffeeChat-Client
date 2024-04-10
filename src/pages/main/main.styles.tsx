import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  display: block;
  margin: 10px;
  width: 100%;
  border-bottom: 1px solid black;
`;

export const HeaderTitle = styled.div`
display: flex;
justify-content: space-between; // 양쪽으로 내용을 분산시킵니다.
align-items: center;
  font-weight: bold;
  font-size: 15px;
`;

export const HeaderText = styled.div`
  font-size: 12px;
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface HeaderButtonProps {
  active: boolean;
}

export const HeaderButton = styled.div<HeaderButtonProps>`
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  background-color: ${(props) =>
    props.active ? "#02A6CB" : "#e9fbff"}; // 활성 상태에 따라 배경색 변경
  border-radius: 13px;
  padding: 12px 18px;
  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderProfileButton = styled.div<HeaderButtonProps>`
  padding: 15px 15px; // 예시 패딩, 필요에 따라 조정하세요
  border-radius: 20px; // 동그란 모양을 만들기 위해 border-radius 값을 적당히 조정
  border: 1px solid #000; // 예시 테두리, 필요에 따라 조정하세요
  background-color: ${(props) =>
    props.active ? "#02A6CB" : "#e9fbff"}; // 활성 상태에 따라 배경색 변경
  color: #000; // 텍스트 색상

`;
