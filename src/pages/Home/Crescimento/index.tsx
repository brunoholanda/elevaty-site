import * as S from './Styles';

export default function Crescimento() {
    return (
        <S.Crescimento>
            <div className="conteudo">
                <h2>Ajudamos o seu negócio a crescer mais rápido.</h2>
                <p className="descricao">
                    Por que mantemos cada casa segura e confortável. Consideramos e simpatizamos com assistência ocasional suficiente.
                </p>
            </div>
            <div className="cartoes">
                <div className="cartao">
                    <div className="icone">🏆</div>
                    <h3>Pertencimento Ofensivo</h3>
                    <p>
                        Carta de convocação para se tornar ativo. Relações sensatas na vizinhança sociável surpresa não nos atrapalham.
                    </p>
                    <a href="#">Leia mais →</a>
                </div>
                <div className="cartao">
                    <div className="icone">🌿</div>
                    <h3>Promoção e Provisão</h3>
                    <p>
                        Possíveis mestras de relações elegantes com debates luxuosos. Por mensagem ou nada, principalmente endereço chefe.
                    </p>
                    <a href="#">Leia mais →</a>
                </div>
                <div className="cartao">
                    <div className="icone">⚙️</div>
                    <h3>Aplicação de Bênçãos</h3>
                    <p>
                        Vantagens de janelas para aqueles que buscam fortuna. Realmente amor pelo país, ela incapacitou sua irmã.
                    </p>
                    <a href="#">Leia mais →</a>
                </div>
            </div>
            <button>Saiba Mais Sobre a Plataforma</button>
        </S.Crescimento>
    );
}
