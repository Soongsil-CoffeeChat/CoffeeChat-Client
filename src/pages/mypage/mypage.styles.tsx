import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

export const MenotorName = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translate(-50%);
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: auto;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin: 4rem auto 5rem auto;
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
  background-color: white;
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

export const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8rem;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrapperBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 2.5rem;
  padding: 3rem 1rem;
`;

export const MenuText = styled.span`
  font-size: 1.9rem;
  font-weight: 500;
  margin-left: 1rem;
`;

export const Hr = styled.hr`
  width: 100%;
  border: 1px solid #ededed;
`;

export const ArrowImg = styled.img`
  width: 2.2rem;
  height: auto;
`;