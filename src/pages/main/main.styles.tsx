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
  justify-content: space-between;
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
  background-color: ${(props) => (props.active ? "#02A6CB" : "#e9fbff")};
  border-radius: 13px;
  padding: 12px 18px;
  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderProfileButton = styled.div<HeaderButtonProps>`
  padding: 15px 15px;
  border-radius: 20px;
  border: 1px solid #000;
  background-color: ${(props) => (props.active ? "#02A6CB" : "#e9fbff")};
  color: #000;
`;
