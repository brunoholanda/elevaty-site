import * as S from './Styles';
import cassol from '../../../assets/img/cassol.webp';
import fotr from '../../../assets/img/fort-atacadista.png';
import superbom from '../../../assets/img/superbom.png';
import tridico from '../../../assets/img/tridico.png';  
import frigelar from '../../../assets/img/LogoFrigelar.svg';  
import zonta from '../../../assets/img/zonta.png';  
import unicompra from '../../../assets/img/unicompra.png';  

export default function Clients() {
    const clientes = [
        { imagem: cassol, titulo: 'Cassol' },
        { imagem: fotr, titulo: 'Fotr Atacadista' },
        { imagem: superbom, titulo: 'Supermercado SuperBom' },
        { imagem: tridico, titulo: 'Supermercado Tridico' },
        { imagem: frigelar, titulo: 'Frigelar' },
        { imagem: zonta, titulo: 'Zonta casa e construcao' },
        { imagem: unicompra, titulo: 'Supermercado Unicompra' },
    ];

    return (
        <>
            <S.Clients>
                <h3>Temos + 70 Clientes que já fazem do jeito certo.</h3>
                <p>O jeito certo de processar faturas é com a Elevaty.</p>
                <div className='clients-logo'>
                    {clientes.map((client, index) => (
                        <img key={index} src={client.imagem} alt={client.titulo} title={client.titulo} />
                    ))}
                </div>
            </S.Clients>
            <S.Divider />
        </>
    );
}
