import { Link } from "react-router-dom";
import * as S from './Styles';

export default function MenuLinks() {

    return (
        <S.MenuLinks>
            <Link to="./">
                Início
            </Link>

            <Link to="./sobre">
                Sobre Nós
            </Link>
            <Link to="./contato">
                Contato
            </Link>
            <Link to="./contato">
                Blog
            </Link>
        </S.MenuLinks>
    )
}
