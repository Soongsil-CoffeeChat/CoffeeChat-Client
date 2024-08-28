import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 18em;
  align-items: center;
  background: linear-gradient(to right, #c3f1fd, skyblue);
  width: 100%;
  box-sizing: border-box;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
`;

export const BodyTitle = styled.h2`
  padding-top: 10px;
  margin: 10px auto;
  font-size: 24px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
`;

export const BodyText = styled.p`
  margin: 10px auto;
  font-size: 18px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
`;

export const HeaderText = styled.div`
  font-size: 12px;
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileButtonContainer = styled.div`
  align-items: center;
  margin: 10px;
`;

export const ProfileButton = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 10%;
  width: 100%;
`;
