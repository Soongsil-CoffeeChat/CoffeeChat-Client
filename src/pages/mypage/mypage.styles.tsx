import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 20vh; // 전체 화면 높이를 차지하도록 설정
  justify-content: center;
  align-items: center;
  /* 선형 그라데이션 배경 설정 */
  background: linear-gradient(to top, white, skyblue);
`;

export const BodyContainer = styled.div`
  display: block;
  margin: 10px;
  width: 100%;
`;

export const BodyContentContainer = styled.div`
  display: block;
  margin: 10px;
  width: 100%;
`;

export const BodyTitle = styled.div`
font-size: 24px;
`
export const BodyText = styled.div`
font-size: 18px;
`


interface HeaderButtonProps {
  active: boolean;
}

export const HeaderTitle = styled.div`
display: flex;
background: #
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

export const ProfileButton = styled.div`
  display: flex; // 내부 콘텐츠를 가운데 정렬하기 위한 설정
  width: 150px; // 원의 크기를 정하기 위해 너비 설정
  height: 150px; // 원의 크기를 정하기 위해 높이 설정
  border-radius: 50%; // 완벽한 원을 만들기 위해 border-radius를 50%로 설정
  background-color: white; // 배경색을 흰색으로 설정
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start; /* 상단 정렬 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  height: 10%; /* 필요한 경우 높이 설정 */
  width: 100%; /* 필요한 경우 너비 설정 */


`




