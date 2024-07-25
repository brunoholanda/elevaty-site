import React from 'react';

import Slider from 'react-slick';
import * as S from './Styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import cliente1 from '../../../assets/img/pessoa-01.png'; // Adicione o caminho correto para sua imagem
import cliente2 from '../../../assets/img/pessoa-02.png'; // Adicione o caminho correto para sua imagem
import cliente3 from '../../../assets/img/pessoa-03.png'; // Adicione o caminho correto para sua imagem

const Testemunhos: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const testemunhos = [
        {
            imagem: cliente1,
            nome: "AR Shakir",
            cargo: "CEO GetNextDesign",
            texto: "Ela realmente adora o condado. Ela incapacitou a irmã. Pés fora como seis. Entre sexo, é deixar a lei construída agora.",
            empresa: "Segment"
        },
        {
            imagem: cliente2,
            nome: "Maria Silva",
            cargo: "CTO Tech Innovations",
            texto: "Nosso time realmente gosta de colaborar. Ela trouxe uma nova energia e produtividade para a equipe.",
            empresa: "Tech Innovations"
        },
        {
            imagem: cliente3,
            nome: "João Santos",
            cargo: "COO Business Corp",
            texto: "A parceria com essa empresa tem sido transformadora. Aumentamos nossa eficiência em 50%.",
            empresa: "Business Corp"
        }
    ];

    return (
        <S.Testemunhos>
            <h2>Confira o que nossos clientes estão dizendo</h2>
            <Slider {...settings}>
                {testemunhos.map((testemunho, index) => (
                    <div key={index} className="testemunho">
                        <div className="imagem">
                            <img src={testemunho.imagem} alt={testemunho.nome} />
                        </div>
                        <div className="texto">
                            <p>{testemunho.texto}</p>
                            <p className="nome">{testemunho.nome}</p>
                            <p className="cargo">{testemunho.cargo}</p>
                            <p className="empresa">{testemunho.empresa}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </S.Testemunhos>
    );
}

export default Testemunhos;