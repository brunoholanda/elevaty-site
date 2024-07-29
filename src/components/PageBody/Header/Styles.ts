import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 20px;
    background-color: var(--laranja);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    img {
        width: 150px;
        height: 25px;
        margin-top: .1rem;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 0em 1em;

        .links {
            margin-top: 1em;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        margin: 0;

        .mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .social {
            display: flex;
            margin: 0em 1em;
        }

        .links {
            display: none;
        }
    }
`;
