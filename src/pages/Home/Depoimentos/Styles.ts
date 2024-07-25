import styled from 'styled-components';

export const Testemunhos = styled.div`
    padding: 40px 20px;
    background-color: #f9f9f9;
    text-align: center;

    h2 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .testemunho {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        
        .imagem {
            margin-bottom: 20px;
            
            img {
                border-radius: 50%;
                width: 150px;
                height: 150px;
                object-fit: cover;
            }
        }

        .texto {
            max-width: 600px;

            p {
                margin: 5px 0;
            }

            .nome {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }

            .cargo {
                font-size: 16px;
                color: #777;
            }

            .empresa {
                font-size: 16px;
                color: #777;
            }
        }
    }

    .slick-prev:before, .slick-next:before {
        color: #333;
    }

    .slick-dots li button:before {
        color: #333;
    }

    @media screen and (max-width: 768px) {
        .testemunho {
            .imagem {
                img {
                    width: 100px;
                    height: 100px;
                }
            }

            .texto {
                p {
                    font-size: 14px;
                }

                .nome {
                    font-size: 16px;
                }

                .cargo, .empresa {
                    font-size: 14px;
                }
            }
        }
    }
`;
