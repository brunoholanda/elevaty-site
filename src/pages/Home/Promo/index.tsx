import * as S from './Styles';
import background from '../../../assets/img/banner-2.png'; // Adicione o caminho correto para sua imagem de fundo

export default function Promo() {
    return (
        <S.Promo>
            <div className="conteudo">
                <h2>Leve seu produto ao próximo nível</h2>
                <p className="descricao">
                    Pagamentos e gestão financeira ponta a ponta em uma única solução. Encontre a plataforma certa para ajudar a realizar isso.
                </p>
                <button>Comece Agora</button>
            </div>
        </S.Promo>
    );
}
