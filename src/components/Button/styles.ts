import styled from 'styled-components';

export const ButtonContainer = styled.button.attrs(() => ({
  type: 'button',
}))<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 42px;
  background-color: #81259D;
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#81259D")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  
  &:hover {
    background-color: ${({ disabled }) => !disabled && "#0056b3"};
  }
`;
