import styled from 'styled-components';
import background from '../../../assets/img/banner-bg.png'; // Adicione o caminho correto para sua imagem de fundo

export const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    background-image: url(${background});

    background-repeat: no-repeat;
    background-position: top left;
    background-size: contain;
    margin: 0 auto;

    .banner-text {
        max-width: 600px;
        margin-left: 2rem;

        .subtitle {
            font-size: 18px;
            color: #555;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 40px;
            font-weight: 800;
            color: var(--preto);
            margin-bottom: 20px;
        }

        .description {
            font-size: 16px;
            color: #777;
            margin-bottom: 30px;
        }

        .highlights {
            display: flex;
            gap: 20px;
            
            p {
                font-size: 14px;
                color: #fff;
                background-color: orange;
                padding: 10px 20px;
                border-radius: 5px;
            }
        }
    }

    .banner-img {
        img {
            max-width: 100%;
            height: auto;
        }
    }

    .divider {
        width: 100%; /* Garante que a linha divisora ocupe toda a largura */
        border-top: 1px solid #333;
        margin: 20px 0; /* Espaçamento acima e abaixo da linha */
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;

        .banner-text {
            margin-bottom: 20px;
        }

        .banner-img {
            img {
                max-width: 80%;
                margin: 0 auto;
            }
        }
    }
`;

export const Divider = styled.div`
        width: 100%; 
        border-top: 1px solid #C4C4C4;
        margin: 20px 0;
        opacity: 30%;
`;
