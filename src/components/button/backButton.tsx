import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as BackBtn } from "../../assets/ArrowLeft.svg";

const BackButtonStyled = styled.div`
  margin: 0;
`;

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonStyled>
      <BackBtn onClick={handleBack} />
    </BackButtonStyled>
  );
}

export default BackButton;
