import styled from 'styled-components';


export const Button = styled.button`
  width: 150px;
  background: var(--laranja);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    background: var(--laranja-hover);
    transform: scale(1.01);

  }
`;