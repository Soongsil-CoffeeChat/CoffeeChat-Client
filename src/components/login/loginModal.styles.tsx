import styled from "styled-components";

export const ModalBackdrop = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
`;

export const HeartImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 25px;
`;

export const GoogleButton = styled.img`
  cursor: pointer;
`;
