import img from '../../img/Logo.png';
import Style from '../../Css/inicioFreelancer.module.css';
import Comentarios from '../../Bases/Comentarios2.js';
import { useState, useEffect } from 'react';

// Verifica se uma URL é uma imagem válida
const verificarImagem = (url) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
};

// Componente para exibir uma imagem ou um link para download de arquivos .zip
const ImagemPortfolio = ({ arquivo, defaultImage }) => {
    const [isValidImage, setIsValidImage] = useState(false);
    const [isZipFile, setIsZipFile] = useState(false);

    useEffect(() => {
        const verificar = async () => {
            if (arquivo.endsWith(".zip")) {
                setIsZipFile(true);
            } else {
                const resultadoImagem = await verificarImagem(arquivo);
                setIsValidImage(resultadoImagem);
            }
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

// Componente principal para exibir o perfil da empresa
const InicioEmpresa = ({ empresa }) => {
    const defaultImage = "/iconzip.png"; // Imagem padrão para fallback (armazenada em `public`)

    // Verifica se as informações da empresa estão carregadas
    if (!empresa || !empresa.portfolio) {
        return <p>Carregando informações do usuário...</p>;
    }

    return (
        <div className={Style.perfil}>
            {/* Seção de Portfólio */}
            <div className={Style.previa}>
                {empresa.portfolio.length > 0 ? (
                    empresa.portfolio.map((portfolio, index) => (
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
                <h2>Avaliações</h2>
                <div className={Style.comentario}>
                    <Comentarios key={empresa.id} />
                </div>
            </div>
        </div>
    );
};

export default InicioEmpresa;
