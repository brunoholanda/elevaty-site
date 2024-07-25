import styled from 'styled-components';

export const NotFound = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1em 8em;
    font-family: var(--fonte-principal);

    h1 {
        
        font-size: 1.88rem;
    }

    button {
        border: none;
        width: 300px;
        height: 45px;
        border-radius: 8px;
    }


@media screen and (max-width: 768px) {

        margin: 1em 2em;
        flex-direction: column;

        img {
            width: 150px;
        }
    
        h1 {
            font-size: 1.25rem;
        }
    
        button {
            margin-bottom: 1em;
        }

}
`;