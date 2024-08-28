import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background-color: white;
  height: calc(100dvh - 9rem);
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  color: #aeaeb2;
  margin-bottom: 3rem;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
  font-size: 1.6rem;
`;

export const EachInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px rgba(0, 0, 0, 1);
  width: 100%;
  padding-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const InputText = styled.p`
  font-size: 1.6rem;
  color: #aeaeb2;
`;

export const Input = styled.input`
  font-size: 2.2rem;
  border-radius: 0;
  &::placeholder {
    color: #aeaeb2;
  }
`;

export const NameInput = styled.input`
  padding: 1rem 0;
  width: 100%;
  border-bottom: solid 2px rgba(0, 0, 0, 1);
  font-size: 2.2rem;
  border-radius: 0;
  &::placeholder {
    color: #aeaeb2;
  }
`;

export const SmallButton = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  color: black;
  border: 1px solid #e2e2e2;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export const CertTime = styled.span`
  color: #ff4949;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 1rem 1rem 0 0;
`;

export const HalfButtonG = styled.button`
  padding: 1.6rem;
  background-color: #ededed;
  color: black;
  font-size: 2.2rem;
  font-weight: 500;
  width: 50%;
  margin: 3rem auto;
`;

export const HalfButtonB = styled.button`
  padding: 1.6rem;
  background-color: black;
  color: white;
  font-size: 2.2rem;
  font-weight: 500;
  width: 50%;
  margin: 3rem auto;
`;

export const FullButton = styled.button`
  padding: 1.6rem;
  background-color: black;
  color: white;
  font-size: 2.2rem;
  font-weight: 500;
  width: 100%;
  margin: 3rem auto;
`;

export const FixedButton = styled.button`
  position: fixed;
  padding: 1.6rem;
  background-color: black;
  color: white;
  font-size: 2.2rem;
  font-weight: 500;
  width: calc(100% - 5rem);
  bottom: 10.5rem;
  // box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.5);
  z-index: 100;
  max-width: 468px;
`;

export const HalfFixedButton = styled.button`
  position: fixed;
  padding: 1.6rem;
  background-color: #EDEDED;
  color: black;
  font-size: 2.2rem;
  font-weight: 500;
  width: calc(50% - 5rem);
  max-width: 234px;
  bottom: 10.5rem;
  // box-shadow: 0 0.4rem 1.3rem rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  font-size: 1.6rem;
`;

export const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const CheckButton = styled.button`
  position: absolute;
  width: 10rem;
  height: 4rem;
  font-size: 1.8rem;
  background-color: #e9fbff;
  color: #15c0ea;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;

  & > :nth-last-child(1):nth-child(odd) {
    grid-column: span 2; // 마지막 요소가 가득 차도록 설정
  }
`;

export const FormBoxContainer = styled.div`
  width: 100%;
`;

export const OptionButton = styled.button<{ isSelected?: boolean }>`
  padding: 1.6rem;
  font-size: 2rem;
  background-color: #ededed;
  color: black;
  font-size: 2.2rem;
  font-weight: 500;
  width: 100%;
  margin: 1.5rem auto 0 auto;
  flex: 1;
  background-color: ${(props) => (props.isSelected ? "black" : "#EDEDED")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
