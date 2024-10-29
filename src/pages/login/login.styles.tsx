import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const AnimatedContainer = styled.div<{ fadeIn?: boolean; fadeOut?: boolean }>`
  animation: ${({ fadeIn: fadeInProp, fadeOut: fadeOutProp }) =>
    fadeInProp
      ? css`${fadeIn} 0.5s forwards`
      : fadeOutProp
      ? css`${fadeOut} 0.5s forwards`
      : "none"};
  
  position: absolute;
  top: 0;
  max-width: 520px;
  height: 100%;

  z-index: ${({ fadeOut: fadeOutProp }) => (fadeOutProp ? 2 : 1)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 520px;
  height: 90%;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

export const Logo = styled.img`
  width: 35%;
  height: auto;
  margin-bottom: 10rem;
`;

export const GoogleButton = styled.img`
  width: 100%;
  cursor: pointer;
`;
