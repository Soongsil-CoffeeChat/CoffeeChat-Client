import styled from "styled-components";

export const Logo = styled.img`
  height: 2.5rem;
  width: auto;
`;

export const Search = styled.img`
  height: 4.5rem;
  width: auto;
  cursor: pointer;
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

interface HeaderButtonProps {
  $active?: boolean;
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 2rem 0;
  border: ${(props) => (props.$active ? "none" : "1px solid #e2e2e2")};
  color: ${(props) => (props.$active ? "white" : "#8F8F8F")};
  background-color: ${(props) => (props.$active ? "black" : "white")};
  width: 10rem;
`;

export const Hr = styled.hr`
  width: 100%;
  border: 0.5px solid #c1c1c1;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin: -1.5rem 0 0 0;
  padding: 1rem 0.75rem 1rem 0.75rem;
  overflow-y: auto;
  /* 웹킷 기반 브라우저 */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  /* 파이어폭스 */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`;
