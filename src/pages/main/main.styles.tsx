import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  display: block;
  margin: 10px;
  width: 100%;
  border-bottom: 1px solid black;
`;

export const HeaderTitle = styled.div`
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
