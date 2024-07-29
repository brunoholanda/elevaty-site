import styled from 'styled-components';

export const Formulario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: var(--branco);
    text-align: center;
    margin-bottom: 2rem;
  }

  .error {
    color: red;
    margin: 0 0 1rem 2rem;
  }
  
  .required-field {
    border: 1px solid red;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;

    input, textarea {
      margin-bottom: 1.5em;
      border-style: none;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      font-size: 15px;
      padding: 1rem;
      border-radius: 8px;
    }

    input {
      width: 423px;
      height: 10px;
    }

    textarea {
      width: 423px;
      height: 150px;
      font-size: 18px;
    }
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;


  h1 {
    text-align: center;
    margin: 1rem 0;
    color: var(--preto-texto);
  }

`;

export const Postagem = styled.div`
  margin: 1rem 5rem;
  display: flex;
  flex-direction: column;

  h2, p {
    color: var(--preto-texto);
  }

  img {
    width: 300px;
  }


  a {
    text-decoration: none;
  }

  a:hover {
    color: orange;
    font-weight: bold;
  }
`;

export const PostagemBotoes = styled.div`
  margin: 2rem 0;

  button {
    margin-right: 1rem;
  }
`;
