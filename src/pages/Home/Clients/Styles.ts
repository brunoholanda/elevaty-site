import styled from 'styled-components';

export const Clients = styled.div`
    text-align: center;
    padding: 20px;
    background-color: #fff;

    h3 {
        font-size: 24px;
        color: #333;
        margin-bottom: 20px;
    }

    .clients-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        img {
            max-height: 150px;
            width: 140px;
            margin: 0 10px;
            opacity: 0.8;
            transition: opacity 0.3s ease;

            &:hover {
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .clients-logo {
            gap: 10px;

            img {
                margin: 5px;
            }
        }
    }
`;

export const Divider = styled.div`
    width: 100%;
    border-top: 1px solid #C4C4C4;
    margin: 20px 0;
    opacity: 0.3;
`;
