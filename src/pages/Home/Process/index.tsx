import { Button } from '../../../components/Button/Styles';
import * as S from './Styles';

export default function Processo() {
    return (
        <S.Processo>
            <div className="conteudo">
                <p className="titulo">OPERAÇÃO STOCKIE EM TODO O MUNDO</p>
                <h2>Temos a melhor equipe e os melhores processos.</h2>
                <p className="descricao">
                   Temos um time de suporte especializado para atender sua empresa da melhor maneira. Solucoes rapidas e definitivas.
                </p>
                <Button>Comece Agora</Button>
            </div>
            <div className="etapas">
                <div className="etapa">
                    <div className="numero">1</div>
                    <h3>Chamada de Descoberta do Projeto</h3>
                    <p>Estamos sempre prontos para atender suas necessidades. Nossos amigos sempre nos elogiam por nossa prontidão.</p>
                </div>
                <div className="etapa">
                    <div className="numero">2</div>
                    <h3>Chamada de Descoberta do Projeto</h3>
                    <p>Nossa conexão foi feita para resolver problemas impossíveis. Nos apartamentos boisterous, residimos.</p>
                </div>
                <div className="etapa">
                    <div className="numero">3</div>
                    <h3>Chamada de Descoberta do Projeto</h3>
                    <p>Estamos sempre prontos para enriquecer sua vida. Melhorar o fim das desconfianças pode ocorrer instantaneamente.</p>
                </div>
            </div>
        </S.Processo>
    );
}
