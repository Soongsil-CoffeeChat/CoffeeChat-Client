import styled from "styled-components";

export const ProfileCard = styled.div`
  width: 100%;
  min-height: 31.25rem;
  border-radius: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 0.2rem 1.3rem rgba(163, 163, 163, 0.25);
  position: relative;
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
  margin: 0 6rem;
  border-radius: 2.2rem 2.2rem 0 0;
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
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  margin: 1.85rem 0 0 1.85rem;
  display: flex;
  gap: 0.75rem;
`;

export const ProfileTag = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  background-color: black;
  border-radius: 3rem;
  padding: 0.75rem 2.1rem;
`;

export const ProfileContentsBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0 6rem;
  border-radius: 0 0 2.2rem 2.2rem;
  padding: 1.8rem 2.2rem;
`;

export const ProfileName = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.3rem;
`;

export const ProfileBottomContainer = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProfileTitle = styled.span`
  width: 100%;
  font-weight: 500;
  font-size: 1.75rem;
  color: #4b4b4b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileContents = styled.span`
  width: 100%;
  font-weight: 500;
  font-size: 1.5rem;
  color: #aeaeb2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
