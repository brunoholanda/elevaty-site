import styled from 'styled-components';

export const Formulario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 5rem auto;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;

  h1 {
    color: var(--preto-texto);
    text-align: center;
    margin-bottom: 2rem;
  }

  .error {
    color: red;
    margin: 0 0 1rem 0;
  }

  .required-field {
    border: 1px solid red;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input, textarea {
      margin-bottom: 1.5em;
      border-style: none;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      font-size: 15px;
      padding: 1rem;
      border-radius: 8px;
    }

    .quill-editor {
      margin-bottom: 5.5em;
    }

    .quill {
      width: 100%;
      height: 350px;
    }

    input {
      width: 96%;
    }

    textarea {
      width: 96%;
      height: 150px;
      font-size: 18px;
    }

    button {
      width: 100%;
      height: 50px;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 1em;
      border-radius: 8px;
    }
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  min-height: 100vh;
  padding: 2rem;
  margin: 0 6rem;
  justify-content: center;
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

  button {
    width: 110px;
    height: 35px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    background: #42446E;
    border-style: none;
    cursor: pointer;
    transition: 0.4s all;
    margin-bottom: 1em;
    border-radius: 8px;
    margin: 0 2rem 0 0;
  }

  button:hover {
    background: orange;
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
`;