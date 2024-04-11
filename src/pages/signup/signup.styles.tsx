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
`;

export const EmailSelect = styled.select`
  padding: 12px 15px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #666666;
  height: 100%;
`;

export const EmailReceiveBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px solid #02a6cb;
  border-radius: 7px;
  cursor: pointer;
`;
