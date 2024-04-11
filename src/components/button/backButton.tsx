import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackBtn from "../../assets/arrow left.svg";

interface BackButtonProps {
  alignSelf?: string;
  justifySelf?: string;
}

const BackButtonStyled = styled.button<BackButtonProps>`
  background: url(${BackBtn}) no-repeat center center;
  height: 50px;
  width: 50px;
  align-self: ${props => props.alignSelf || 'auto'};
  justify-self: ${props => props.justifySelf || 'auto'};
`;

function BackButton({ alignSelf, justifySelf }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <BackButtonStyled onClick={handleBack} alignSelf={alignSelf} justifySelf={justifySelf} />
  );
}

export default BackButton;
