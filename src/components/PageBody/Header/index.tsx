import LinksMenu from '../LinksMenu';
import MenuMobile from '../MenuMobile';
import * as S from './Styles';
import logo from '../../../assets/img/logo-elevaty.png'

export default function Header() {
    return (
        <S.Header>
            <div>
                <img src={logo} alt="logo da elevaty" />
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