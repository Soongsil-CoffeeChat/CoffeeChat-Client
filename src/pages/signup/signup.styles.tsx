import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 15px;
`;

export const HeaderContainer = styled.div`
  flex-direction: column;
`;

export const LeftArrow = styled.img`
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #000000;
`;

export const HeaderText = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #666666;
`;

export const InputContainer = styled.div``;

export const EmailText = styled.div`
  margin-top: 30px;
  margin-bottom: 5px;
  font-size: 20px;
  color: #000000;
  outline: none;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const EmailInput = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;

export const EmailSelect = styled.select`
  padding: 12px 15px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #666666;
  height: 100%;
  outline: none;
`;

export const EmailReceiveBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px solid #02a6cb;
  border-radius: 7px;
  cursor: pointer;
  font-size: 15px;
`;

export const NicknameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px solid #02a6cb;
  border-radius: 7px;
  margin-top: 30px;
`;

export const NicknameInput = styled.input`
  width: 60%;
  height: 50%;
  font-size: 20px;
  border: none;
  padding: 12px 15px;
  margin-left: 5px;
  outline: none;
`;

export const NicknameBtn = styled.button`
  width: 20%;
  height: 40px;
  padding: 12px 15px;
  margin-top: 5px;
  margin-left: 45px;
  margin-right: 5px;
  background-color: #e2f9ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const FieldContainer = styled.div`
  margin-top: 30px;
  flex-direction: column;
`;
export const FieldText = styled.div`
  font-size: 20px;
  color: #000000;
`;

export const FieldButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface FieldButtonProps {
  active: boolean;
}

export const FieldButton = styled.div<FieldButtonProps>`
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  background-color: ${(props) => (props.active ? "#65DDFA" : "#e9fbff")};
  border-radius: 13px;
  padding: 12px 25px;
  &:hover {
    opacity: 0.8;
  }
  margin-top: 20px;
`;

export const StartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg, #62c6c4 0%, #02a6cb 100%);
  border: none;
  border-radius: 7px;
  margin-top: 40px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;
