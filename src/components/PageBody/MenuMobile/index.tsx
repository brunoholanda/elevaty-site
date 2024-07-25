import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as HamburgerMenu } from 'hamburger-react';
import * as S from './Styles';

export default function MenuMobile() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const handleItemClick = () => {
        setOpen(false);
    };

    return (
        <>
        <S.MobileMenu>
            <nav>
                <HamburgerMenu
                    toggled={isOpen}
                    toggle={toggleMenu}
                    color="#3f51b5"
                    size={60}
                />
            </nav>
            {isOpen && (
                <ul className='mobileMenu' onClick={handleItemClick}>
                    <Link to="./">
                        <li>Inicio</li>
                    </Link>
                    <Link to="./sobre">
                        <li>Sobre</li>
                    </Link>
                    <Link to="./projetos">
                        <li>Projetos</li>
                    </Link>
                    <Link to="./contato">
                        <li>Contato</li>
                    </Link>
 
                </ul>
            )}
          </S.MobileMenu>
        </>
    );
}
