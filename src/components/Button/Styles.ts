import styled from 'styled-components';


export const Button = styled.button`
  width: 150px;
  background: var(--laranja);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: var(--laranja-hover);
  }
`;