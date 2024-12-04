import { useParams } from 'react-router-dom'; // Importando para pegar o ID da URL
import Comentarios from '../../Bases/Comentarios.js';
import { useState, useEffect } from 'react';
import NovoProjeto from '../../Bases/novoProjeto.js'; // Importa a função ou componente do NovoProjeto

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

            setIsZipFile(arquivo.endsWith('.zip'));
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
                    alt={isValidImage ? 'Imagem do portfólio' : 'Imagem padrão'}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
            )}
        </div>
    );
};

const Portfolio = () => {
    const { id } = useParams(); // Pegando o ID da URL
    const [empresa, setEmpresa] = useState(null);
    const defaultImage = '../../img/iconzip.png'; // Corrigido o caminho da imagem

    // Obtendo a função para exibir o popup
    const { exibirNovoProjetoPopup } = NovoProjeto();

    useEffect(() => {
        const fetchEmpresaData = async () => {
            const url = `http://localhost:8080/v1/jinni/cliente/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.cliente && data.cliente.length > 0) {
                setEmpresa(data.cliente[0]); // Atualiza o estado com freelancer
            }
        };

        fetchEmpresaData();
    }, [id]); // Use o ID da URL como dependência

    if (!empresa) {
        return <p>Carregando informações do usuario...</p>;
    }

    return (
        <div className={Style.perfil}>
            <button onClick={exibirNovoProjetoPopup}>+</button>
            {/* Seção de Portfólio */}
            <div className={Style.previa}>
                {empresa.portfolio && empresa.portfolio.length > 0 ? (
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
        </div>
    );
};

export default Portfolio;
