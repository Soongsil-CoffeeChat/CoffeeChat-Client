import styled from "styled-components";

export const Logo = styled.img`
  height: 4rem;
  width: auto;
`;

export const Search = styled.img`
  height: 4.5rem;
  width: auto;
  cursor: pointer;
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
  display: flex;
  width: 100%;
`;

export const ProfileCardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
  padding: 2rem 2rem 2rem 0.75rem;
  gap: 3rem;
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
  padding: 6.5rem 1rem 6rem 1rem;
`;

export const ProfileClub = styled.div`
  position: absolute;
  transform: rotate(90deg);
  color: #E0E0E0;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.3rem;
  left: -1rem;
  top: 6rem;
`;

export const ProfileCircle = styled.div`
  width: 15.5rem;
  height: 15.5rem;
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
  margin: 0 6rem;
`;

export const ProfileImg = styled.img`
  width: 14.5rem;
  height: 14.5rem;
  border-radius: 50%;
`;

export const ProfileName = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 2.2rem 0 3.5rem 0;
`;

export const ProfileBottomContainer = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
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
