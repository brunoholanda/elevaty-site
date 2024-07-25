import styled from 'styled-components';
import background from '../../../assets/img/bg-crescimento.png'; // Adicione o caminho correto para sua imagem de fundo

export const Crescimento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    text-align: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  center center;
    

    .conteudo {
        max-width: 800px;
        margin-bottom: 40px;

        h2 {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
        }

        .descricao {
            font-size: 16px;
            color: #777;
        }
    }

    .cartoes {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 1200px;
        margin-bottom: 40px;

        .cartao {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            text-align: left;

            .icone {
                font-size: 36px;
                margin-bottom: 20px;
            }

            h3 {
                font-size: 20px;
                font-weight: bold;
                color: #333;
                margin-bottom: 10px;
            }

            p {
                font-size: 14px;
                color: #777;
                margin-bottom: 20px;
            }

            a {
                font-size: 15px;
                color: var(--laranja);
                text-decoration: none;
                transition: color 0.3s;

                &:hover {
                    color: #e05a5a;
                }
            }
        }
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: var(--laranja);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: var(--laranja-hover);
        }
    }

    @media screen and (max-width: 768px) {
        .cartoes {
            flex-direction: column;
            align-items: center;

            .cartao {
                max-width: none;
                margin-bottom: 20px;
            }
        }
    }
`;
