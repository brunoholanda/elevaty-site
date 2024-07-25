import styled from 'styled-components';

export const MobileMenu = styled.div`

.mobileMenu {

    margin-bottom: .5em;
    margin-left: 0;
    a {
        text-decoration: none;
        color: var(--preto-texto);
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li {
        list-style: none;
        margin-bottom: .5em;
        border: 1px solid var(--preto-texto);
        text-align: center;
        border-radius: 10px;
        width: 150px;
      }
      
      &__cv {
         margin-bottom: .5em;
            border: 1px solid var(--preto-texto);
            text-align: center;
            border-radius: 10px;
            width: 150px;
      }

}
.languageSwitcher {

    img {
        width: 24px;
        height: 15px;
        margin-right: 5px;
        margin-top: 5px;
    }
    button {
        border: none;
        background: transparent;
    }
}
`;