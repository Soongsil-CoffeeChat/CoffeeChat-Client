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
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
  margin: 0 6rem;
  border-radius: 2.2rem;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ProfileBase = styled.img`
  height: 52%;
  width: auto;
`;

export const ProfileTagContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ProfileTag = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  background-color: black;
  border-radius: 3rem;
  padding: 0.75rem 2.1rem;
`;

export const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8rem;
`;

export const IntroduceTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin: 4rem 0 1rem 0;
`;

export const IntroduceDescript = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 184%;
  background-color: #F4F4F4;
  border-radius: 1.2rem;
  padding: 1.3rem;
`;

export const IntroduceAnswer = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 184%;
  padding: 1rem 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
`;
