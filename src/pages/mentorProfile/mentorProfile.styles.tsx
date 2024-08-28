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
  width: 18rem;
  height: 18rem;
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
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
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

export const IntroduceTitle = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;
export const IntroduceContent = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 184%;
  background-color: #F4F4F4;
  border-radius: 1.7rem;
  padding: 2rem;
`;
