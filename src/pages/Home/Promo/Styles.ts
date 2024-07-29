import styled from 'styled-components';
import background from '../../../assets/img/banner-2.png'; // Adicione o caminho correto para sua imagem de fundo

export const Promo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  center center;
    height: 400px;
    width: 830px;
    text-align: center;
    margin: 2rem auto;
    border-radius: 15px;
 

    .conteudo {
        max-width: 600px;
        color: #fff;

        h2 {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .descricao {
            font-size: 16px;
            margin-bottom: 30px;
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
                background-color: #e05a5a;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 20px;
        height: 400px;
        width: 280px;

        .conteudo {
            h2 {
                font-size: 28px;
            }

            .descricao {
                font-size: 14px;
            }

            button {
                font-size: 14px;
                padding: 8px 16px;
            }
        }
    }
`;
