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
  padding: 0 20px;
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
  display: flex; // 내부 콘텐츠를 가운데 정렬하기 위한 설정
  width: 200px; // 원의 크기를 정하기 위해 너비 설정
  height: 200px; // 원의 크기를 정하기 위해 높이 설정
  border-radius: 50%; // 완벽한 원을 만들기 위해 border-radius를 50%로 설정
  background-color: white; // 배경색을 흰색으로 설정
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start; /* 상단 정렬 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  height: 10%;
  width: 100%;
`;
