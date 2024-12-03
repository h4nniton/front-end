import React, { useState, useEffect } from "react";
import Style from "../../Css/portifolio.module.css";
import defaultImage from '../../img/reactIcon.png'; // Imagem padrão caso o arquivo não seja encontrado ou não seja válido

// Função para verificar se a URL da imagem é válida
const verificarImagem = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Componente que exibe a imagem ou link do portfólio
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
        // Exibe link para download se for um arquivo zip
        <a href={arquivo} target="_blank" rel="noopener noreferrer">
          Download do Portfólio (.zip)
        </a>
      ) : (
        <img
          src={isValidImage ? arquivo : defaultImage} // Exibe a imagem ou a padrão
          alt={isValidImage ? "Imagem do portfólio" : "Imagem padrão"}
          style={{ width: "100%", height: "auto", objectFit: "cover" }} // Garantindo boa responsividade
        />
      )}
    </div>
  );
};

function Portfolio({ freelancer }) {
  // Verifique se freelancer existe e se tem portfolio
  const portfolio = freelancer?.portfolio || []; // Usando operador de encadeamento opcional (?.) e valor padrão []

  return (
    <div className={Style.tela}>
      <div className={Style.historico}>
        <div className={Style.previa}>
          {portfolio.length > 0 ? (
            portfolio.map((portfolioItem, index) => (
              <div key={index} className={Style.portfolio}>
                <ImagemPortfolio arquivo={portfolioItem.arquivo} defaultImage={defaultImage} />
              </div>
            ))
          ) : (
            <p>Portfólio não encontrado</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
