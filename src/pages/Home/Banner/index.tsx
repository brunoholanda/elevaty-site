import * as S from './Styles';
import banner from '../../../assets/img/banner.png';

export default function Banner() {
    return (
        <>
            <S.Banner>
                <div className='banner-text'>
                    <p className='subtitle'>A solução ideal para seu negócio.</p>
                    <h2>Torne o gerenciamento das suas faturas mais simples do que nunca!</h2>
                    <p className='description'>Somos especialistas em processamento de faturas e comunicação ativa entre WhatsApp, Email e SMS.</p>
                    <div className='highlights'>
                        <p>Facil Adesao</p>
                        <p>Facil Migracao</p>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={banner} alt="imagem banner principal" />
                </div>
               
            </S.Banner>
            <S.Divider />
        </>
    );
}
