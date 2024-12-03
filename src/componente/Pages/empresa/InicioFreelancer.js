import img from '../../img/Logo.png';
import Style from '../../Css/IncioEmpresa.module.css'; // Alterado o arquivo de estilo
import empresa from '../../img/empresa.png';
import avaliacao from '../../img/avaliacao.png';
import { useParams } from 'react-router-dom';
import Comentarios from '../../Bases/Comentarios.js';
import { useState, useEffect } from 'react';

function InicioFreelancer({ freelancer }) {
    const { id } = useParams();

    // Função para verificar se a URL da imagem é válida
    const verificarImagem = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };

    // Componente para carregar a imagem ou link de download
    const ImagemPortfolio = ({ arquivo, defaultImage }) => {
        const [isValidImage, setIsValidImage] = useState(false);
        const [isZipFile, setIsZipFile] = useState(false);

        useEffect(() => {
            // Verifica se o arquivo é uma imagem ou um arquivo zip
            const verificar = async () => {
                // Verifica se é uma imagem válida
                const resultadoImagem = await verificarImagem(arquivo);
                setIsValidImage(resultadoImagem);

                // Verifica se o arquivo é um zip
                setIsZipFile(arquivo.endsWith(".zip"));
            };

            if (arquivo) {
                verificar();
            }
        }, [arquivo]);

        return (
            <div className={Style.portfolioItem}>
                {isZipFile ? (
                    // Exibe um link para download se for um arquivo zip
                    <a href={arquivo} target="_blank" rel="noopener noreferrer">
                        Download do Portfólio (.zip)
                    </a>
                ) : (
                    <img
                        src={isValidImage ? arquivo : defaultImage} // Exibe a imagem ou a imagem padrão
                        alt={isValidImage ? "Imagem do portfólio" : "Imagem padrão"}
                        style={{ width: "100%", height: "auto", objectFit: "cover" }} // Garantindo boa responsividade
                    />
                )}
            </div>
        );
    };

    const defaultImage = "/src/componente/img/iconzip.png"; // Imagem padrão caso a URL falhe

    // Debug: Verificando se o freelancer está carregado
    console.log("Freelancer carregado:", freelancer);

    if (!freelancer) {
        return <p>Carregando informações do freelancer...</p>; // Exibe uma mensagem enquanto os dados não carregam
    }

    return (
        <div className={Style.perfil}>
            {/* Seção de Portfólio */}
            <div className={Style.previa}>
                {freelancer.portfolio && freelancer.portfolio.length > 0 ? (
                    freelancer.portfolio.map((portfolio, index) => (
                        <div key={index} className={Style.portfolio}>
                            {/* Verifica se "arquivo" existe antes de passar */}
                            {portfolio.arquivo ? (
                                <ImagemPortfolio
                                    arquivo={portfolio.arquivo}
                                    defaultImage={defaultImage}
                                />
                            ) : (
                                <p>Arquivo não encontrado</p>
                            )}
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

export default InicioFreelancer;
