import styled from 'styled-components';

export const Autenticar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 500px;
  margin: 9rem auto 0 auto;
padding: 2rem;
  
  h1, p {
    color: var(--preto-texto);
  }

  input {
    margin-bottom: 1.5em;
    border-style: none;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 423px;
    height: 20px;
    font-size: 18px;
    padding: 1rem;
    border-radius: 8px;
  }

  button {
    font-weight: 600;
    font-size: 18px;
    width: 457px;
    height: 45px;
  }

`;

export const Icone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3.5rem 0;

  img {
    width: 40px;
    height: 40px;
    margin-left: 2rem;
  }
`;
