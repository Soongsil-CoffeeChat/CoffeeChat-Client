import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: block;
  margin-bottom: 1rem;
  padding-top: 10px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
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
  /* 활성화 버튼 색 수정 */
  background-color: ${(props) => (props.active ? "#79E5FF" : "#e9fbff")};
  border-radius: 13px;
  padding: 12px 18px;
  margin: 15px 10px;
  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderProfileButton = styled.div<HeaderButtonProps>`
  padding: 15px 15px;
  border-radius: 20px;
  border: 0.3px solid black; //선을 최소화 진행
  background-color: ${(props) => (props.active ? "#02A6CB" : "#e9fbff")};
  color: #000;
`;

export const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 80%;
`;

export const BodyProfile = styled.div`
  flex: 4.5;
  border-radius: 13px 13px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    to left,
    rgba(137, 105, 172, 0.75) 0%,
    rgba(253, 214, 85, 0.75) 100%
  );
  position: relative;
`;
export const ImageButton = styled.img`
  margin: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const ProfileCircle = styled.div`
  width: 196px;
  height: 196px;
  background-color: white;
  border-radius: 50%;
  flex: none;
`;
export const ProfileTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

export const ProfileIcon = styled.div`
  font-weight: bold;
  font-size: 15px;
  background-color: white;
  border-radius: 13px;
  padding: 0.3rem 1rem;
  margin: 0 0.5rem;
`;

export const ProfileBottomContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const BodyIntroduce = styled.div`
  flex: 5;
  display: flex;
  justify-content: space-around;
  height: 50%;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: translateX(0%); // 초기 위치
`;

export const BodyIntroduceHeader = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;
export const BodyIntroduceText = styled.div`
  margin: 10px 0;
  max-height: 70%;
  overflow-y: auto;
  font-size: 12px;
`;

export const ApplyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #62c6c4 0%, #02a6cb 100%);
  width: 360px;
  height: 50px;
  border-radius: 7px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
export const CardWrapper = styled.div`
  display: flex;
  width: 300%; // 각 카드가 100% 너비를 가지므로 총 카드 수에 따라 조정
  overflow: hidden;
`;

export const Card = styled.div`
  min-width: 100%; // 각 카드가 전체 화면 너비를 차지
  transition: all 0.5s ease; // 부드러운 전환 효과
`;
