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
  background: linear-gradient(to right, #C3F1FD ,skyblue);  // 선형 그라데이션 배경 설정
  width: 100%; 
  box-sizing: border-box;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;  // 전체 화면 너비를 차지하도록 설정
  box-sizing: border-box;  // padding과 border를 포함한 박스 모델 사용
  padding: 0 20px;  // 좌우 패딩 추가
`;

export const BodyTitle = styled.h2`
  padding-top: 10px;
  margin: 10px auto;  // 중앙 정렬을 위해 auto 사용
  font-size: 24px;
  width: 100%;  // 전체 화면 너비를 차지하도록 설정
  text-align: left;  // 텍스트 중앙 정렬
  box-sizing: border-box;  // padding과 border를 포함한 박스 모델 사용
`;

export const BodyText = styled.p`
  margin: 10px auto;  // 중앙 정렬을 위해 auto 사용
  font-size: 18px;
  width: 100%;  // 전체 화면 너비를 차지하도록 설정
  text-align: left;  // 텍스트 중앙 정렬
  box-sizing: border-box;  // padding과 border를 포함한 박스 모델 사용
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
  display: flex;  // 내부 콘텐츠를 가운데 정렬하기 위한 설정
  width: 200px;  // 원의 크기를 정하기 위해 너비 설정
  height: 200px;  // 원의 크기를 정하기 위해 높이 설정
  border-radius: 50%;  // 완벽한 원을 만들기 위해 border-radius를 50%로 설정
  background-color: white;  // 배경색을 흰색으로 설정
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;  /* 상단 정렬 */
  justify-content: flex-start;  /* 왼쪽 정렬 */
  height: 10%;
  width: 100%;
`;