import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 520px;
  height: 9rem;
  border-radius: 2rem 2rem 0 0;
  padding: 0 2rem;
  z-index: 1000;
`;

export const NavItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  color: ${(props) => (props.$active ? "#ffffff" : "#626262")};
  cursor: pointer;
`;

export const NavTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
`;
