import LinksMenu from '../LinksMenu';
import MenuMobile from '../MenuMobile';
import * as S from './Styles';
import logo from '../../../assets/img/logo-branca.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <S.Header>
            <div>
                <Link to="./">
                    <img src={logo} alt="logo da elevaty" />
                </Link>
            </div>
            <div className='mobile'>
                <MenuMobile />
            </div>
            <div className='links'>
                <LinksMenu />
            </div>
        </S.Header>
    )
}