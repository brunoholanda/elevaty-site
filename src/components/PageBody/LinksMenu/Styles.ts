import styled from 'styled-components';

export const MenuLinks = styled.div`
  display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: var(--cinza-texto);
        margin-left: 3em;
        font-family: var(--fonte-secundaria);
        font-size: 1.25rem;
        font-weight: 500;
    }

    a:hover {
        color: var(--preto);
        font-weight: 700;
    }


.arrow {
    margin-left: 5px;
}

.subMenuContainer {
    position: relative;
}

.subMenu {
    position: absolute;
    top: 100%;
    /* Isso coloca o submenu logo abaixo do link "Serviços" */
    left: 50px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    /* Isso adiciona uma sombra ao submenu */
    padding: 10px 20px;
    /* Isso adiciona um pouco de espaço ao redor dos itens do submenu */
    z-index: 100;
    border-radius: 8px;

    a {
        font-size: 18px;
        white-space: nowrap;
        margin: 0;
        padding-top: .3rem;
        cursor: pointer;
    }

    img {
        width: 20px;
    }

}

.languageSwitcher {
    margin-top: 10px;

 
    .languageButton {
        display: flex;
        align-items: center;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        margin: 0 0 .6rem 1rem;

        img{ 
            width: 40px;
            height: 20px;
        }
    

        .flagIcon {
            width: 24px;
            height: 15px;
        }

    }
}

.subMenuContainer {
    position: relative;

    .subMenu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;

        a {
            display: block;
            padding: 8px 16px;
            color: black;
            text-decoration: none;
            display: flex;
            align-items: center;

            img {
                margin-left: 5px;
          
            }

            &:hover {
                background-color: #f1f1f1;
            }
        }
    }

    &:hover .subMenu {
        display: block;
    }
}




@media screen and (max-width: 1024px) {
    .menuLinks {
        a {
            margin-left: 2em;
        }
    }
}
`;
