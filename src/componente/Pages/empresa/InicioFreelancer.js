import img from '../../img/Logo.png';
import Style from '../../Css/inicioFreelancer.module.css';
import empresa from '../../img/empresa.png';
import avaliacao from '../../img/avaliacao.png';
import { useParams } from 'react-router-dom';
import Comentarios from '../../Bases/Comentarios.js';
import { useState, useEffect } from 'react';

const verificarImagem = (url) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
};

const ImagemPortfolio = ({ arquivo, defaultImage }) => {
    const [isValidImage, setIsValidImage] = useState(false);
    const [isZipFile, setIsZipFile] = useState(false);

    useEffect(() => {
        const verificar = async () => {
            const resultadoImagem = await verificarImagem(arquivo);
            setIsValidImage(resultadoImagem);

            setIsZipFile(arquivo.endsWith(".zip"));
        };

        if (arquivo) {
            verificar();
        }
    }, [arquivo]);

    return (
        <div className={Style.portfolioItem}>
            {isZipFile ? (
                <a href={arquivo} target="_blank" rel="noopener noreferrer">
                    Download do Portfólio (.zip)
                </a>
            ) : (
                <img
                    src={isValidImage ? arquivo : defaultImage}
                    alt={isValidImage ? "Imagem do portfólio" : "Imagem padrão"}
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
            )}
        </div>
    );
};

const InicioFreelancer = ({ freelancer }) => {
    const defaultImage = "/src/componente/img/iconzip.png";

    if (!freelancer || !freelancer.portfolio) {
        return <p>Carregando informações do freelancer...</p>;
    }

    return (
        <div className={Style.perfil}>
            {/* Seção de Portfólio */}
            <div className={Style.previa}>
                {freelancer.portfolio.length > 0 ? (
                    freelancer.portfolio.map((portfolio, index) => (
                        <div key={index} className={Style.portfolio}>
                            <ImagemPortfolio
                                arquivo={portfolio.arquivo}
                                defaultImage={defaultImage}
                            />
                        </div>
                    ))
                ) : (
                    <p>Portfólio não encontrado</p>
                )}
            </div>

            {/* Seção de Comentários */}
            <div className={Style.avaliacoes}>
                <h2> Avaliações</h2>
                <div className={Style.comentario}>
                    <Comentarios  key={freelancer.id} />
                </div>
            </div>
        </div>
    );
};

export default InicioFreelancer;
