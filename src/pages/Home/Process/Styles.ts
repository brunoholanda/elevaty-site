import styled from 'styled-components';
import background from '../../../assets/img/bg-passos.png';  // Adicione o caminho correto para sua imagem de fundo

export const Processo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
   // background-image: url(${background});
   // background-repeat: no-repeat;
   // background-size: cover;

    .conteudo {
        text-align: center;
        max-width: 800px;
        margin-bottom: 40px;

        .titulo {
            font-size: 14px;
            color: #535353;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
        }

        .descricao {
            font-size: 16px;
            color: #777;
            margin-bottom: 30px;
        }

        button {
           // padding: 10px 20px;
            //font-size: 16px;
            //color: #fff;
            //background-color: #6C63FF;
            //border: none;
            //border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
            
            }
        }
    }

    .etapas {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        position: relative;
        margin-top: 5rem;


        .etapa {
            text-align: center;
            flex: 1;
            padding: 20px;
            position: relative;

            .numero {
                font-size: 60px;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.1);
                position: absolute;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
            }

            h3 {
                font-size: 18px;
                color: #333;
                margin-top: 60px;  /* Ajustado para criar espaço para o número */
                margin-bottom: 10px;
            }

            p {
                font-size: 14px;
                color: #777;
            }
        }

    }

    @media screen and (max-width: 768px) {
        .etapas {
            flex-direction: column;
            align-items: center;

            .etapa {
                max-width: none;
                margin-bottom: 20px;

                .numero {
                    position: static;
                    transform: none;
                    margin-bottom: 10px;
                }

                &:not(:last-child)::after {
                    width: 2px;
                    height: 50px;
                    top: calc(100% - 20px);
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
`;
