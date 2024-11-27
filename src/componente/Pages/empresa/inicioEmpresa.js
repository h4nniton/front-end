import img from '../../img/exemplo portifolio.png';
import Style from '../../Css/inicioEmpresa.module.css'; // Alterado o arquivo de estilo
import empresa from '../../img/empresa.png';
import avaliacao from '../../img/avaliacao.png';
import { useParams } from 'react-router-dom';
import Comentarios from '../../Bases/Comentarios.js';
import { useState, useEffect } from 'react';

function InicioEmpresa({ listPortfolio }) {
    const { id } = useParams();

    // Função para verificar se uma imagem é válida
    const verificarImagem = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };

    // Componente para carregar uma imagem ou exibir uma imagem padrão se a URL for inválida
    const ImagemPortfolio = ({ url, defaultImage }) => {
        const [isValidImage, setIsValidImage] = useState(false);

        useEffect(() => {
            const verificar = async () => {
                const resultado = await verificarImagem(url);
                setIsValidImage(resultado);
            };

            verificar();
        }, [url]);

        return (
            <img
                src={isValidImage ? url : defaultImage}
                alt="Imagem do portfólio"
            />
        );
    };

    const defaultImage = "/src/componente/img/iconzip.png"; // Imagem padrão caso a URL falhe

    return (
        <div className={Style.perfil}>
            {/* Seção de Portfólio */}
            <div className={Style.previa}>
                {listPortfolio && listPortfolio.length > 0 ? (
                    listPortfolio.map((portfolio, index) => (
                        <div key={index} className={Style.portfolio}>
                            <ImagemPortfolio url={portfolio.arquivo} defaultImage={defaultImage} />
                        </div>
                    ))
                ) : (
                    <p>Portfólio não encontrado</p>
                )}
            </div>

            {/* Seção de Comentários */}
            <div className={Style.avaliacoes}>
                <div className={Style.comentario}>
                    <Comentarios key={id} />
                </div>
            </div>
        </div>
    );
}

export default InicioEmpresa;
