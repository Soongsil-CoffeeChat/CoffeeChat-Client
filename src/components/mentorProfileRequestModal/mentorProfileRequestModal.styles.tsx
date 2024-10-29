import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: 5rem;
  border: 1px solid black;
  margin: 2rem 0 0 0 ;
  padding: 0.3rem 2rem 0.3rem 0.75rem;
`;

export const SearchIcon = styled.img`
  height: 4.5rem;
  width: auto;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  font-size: 2.2rem;
  max-width: 24rem;
  border-radius: 0;
  &::placeholder {
    color: #aeaeb2;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: black;
  color: white;
  border-radius: 3rem;
  padding: 1rem 2rem;
`;

export const TagText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const TagDeleteBtn = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ButtonTitle = styled.p`
  font-size: 1.6rem;
  color: #aeaeb2;
`;

export const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  margin-bottom: 3rem;

  & > :nth-last-child(1):nth-child(odd) {
    grid-column: span 2; // 마지막 요소가 가득 차도록 설정
  }
`;

export const OptionButton = styled.button<{ isSelected?: boolean }>`
  padding: 1.6rem;
  font-size: 2.2rem;
  font-weight: 500;
  width: 100%;
  margin: 1.5rem auto 0 auto;
  flex: 1;
  border: 1px solid #C1C1C1;
  background-color: ${(props) => (props.isSelected ? "black" : "#F8F8F8")};
  color: ${(props) => (props.isSelected ? "white" : "#C1C1C1")};
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

interface HeaderButtonProps {
  $active?: boolean;
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 2rem 0;
  border: ${(props) => (props.$active ? "none" : "1px solid #e2e2e2")};
  color: ${(props) => (props.$active ? "white" : "#8F8F8F")};
  background-color: ${(props) => (props.$active ? "black" : "white")};
  width: 10rem;
`;

export const Hr = styled.hr`
  width: 100%;
  border: 0.5px solid #c1c1c1;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 -3rem 0;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin: -1.5rem 0 0 0;
  padding: 1rem 0.75rem 1rem 0.75rem;
  overflow-y: auto;
  /* 웹킷 기반 브라우저 */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  /* 파이어폭스 */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
`;

export const ProfileCardContainer = styled.div`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  width: 100%;
  height: calc(100dvh - 26rem);
  padding: 2rem;
  gap: 2rem;
`;

export const ProfileCard = styled.div`
  border-radius: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  // box-shadow: 0.5rem 0.5rem 2rem rgba(162, 162, 162, 0.5);
  box-shadow: -0.5rem -0.6rem 0.3rem 0 rgba(239, 239, 239, 0.3),
    0.6rem 0.6rem 1.2rem 0 rgba(163, 163, 163, 0.3);
  position: relative;
  padding: 3rem 2rem;
  gap: 2rem;
`;

export const ProfileClub = styled.div`
  position: absolute;
  color: #E0E0E0;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.4rem;
  left: 2rem;
  bottom: 2rem;
`;

export const ProfileName = styled.span`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const ProfileMiddleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ProfileText = styled.span`
  width: calc(100% - 14rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProfileTitle = styled.span`
  width: 100%;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const ProfileContents = styled.span`
  width: 100%;
  font-weight: 600;
  font-size: 1.2rem;
  color: #606060;
`;

export const ProfileCircle = styled.div`
  width: 11.8rem;
  height: 11.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(
    --Linear,
    linear-gradient(
      236deg,
      #eb4436 20.97%,
      #f6b805 43.66%,
      #4286f5 63.36%,
      #149a5d 82.85%
    )
  );
  border-radius: 50%;
`;

export const ProfileImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;

export const ProfileBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ProfileIcon = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  background-color: black;
  border-radius: 3rem;
  padding: 0.65rem 2rem;
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
  /* width: 360px; */
  height: 50px;
  border-radius: 7px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
export const CardWrapper = styled.div`
  display: flex;
  width: 300%;
  overflow: hidden;
`;

export const Card = styled.div`
  min-width: 100%;
  transition: all 0.5s ease;
`;
