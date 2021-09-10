import styled from "@emotion/styled";

export const TextInput = styled.textarea`
  width: 95%;
  height: 300px;
  resize: none;
  outline: none;
  padding: 2%;
  ::placeholder {
    text-align: center;
  }
`;

export const TextInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const LetterCounter = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  margin-top: 3px;
`;

export const ConverButton = styled.button`
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  margin-top: 3px;
  height: 35px;
  width: 70px;
`;
