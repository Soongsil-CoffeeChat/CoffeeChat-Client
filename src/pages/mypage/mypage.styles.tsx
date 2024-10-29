import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5rem;
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
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
  border-radius: 2.2rem;
  overflow: hidden;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ProfileLayer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2.2rem;
  background-color: #FFFFFF;
  opacity: 70%;
  position: absolute;
`;

export const ProfileBase = styled.img`
  height: 52%;
  width: auto;
`;

export const ProfileCamera = styled.img`
  position: absolute;
  z-index: 3;
  width: 6rem;
  height: 6rem;
  margin-bottom: 2rem;
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

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
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

export const UploadingOverlay = styled.div`
  position: absolute;
  z-index: 3;
  margin-top: 6rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #a2a2a4;
`;
