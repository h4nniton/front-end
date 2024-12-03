import React, { useState, useEffect } from "react";
import Style from "../../Css/portifolio.module.css";
import defaultImage from '../../img/reactIcon.png'; // Importando a imagem padrão

// Função para verificar se uma URL de imagem é válida
const verificarImagem = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Componente para exibir a imagem, usando a imagem padrão em caso de erro
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
      alt={isValidImage ? "Imagem do portfólio" : "Imagem padrão"}
      style={{ width: "100%", height: "auto", objectFit: "cover" }} // Garantindo boa responsividade
    />
  );
};

// Componente principal para renderizar o portfólio do freelancer
function Portfolio({ freelancer }) {
  const portfolio = freelancer?.portfolio || []; // Obtendo o portfólio do freelancer

  return (
    <div className={Style.tela}>
      <div className={Style.historico}>
        <div className={Style.previa}>
          {portfolio.length > 0 ? (
            portfolio.map((item, index) => (
              <div key={index} className={Style.portfolio}>
                {/* Renderiza uma imagem do portfólio */}
                <ImagemPortfolio url={item.arquivo} defaultImage={defaultImage} />
                {/* Exibe o nome do arquivo (opcional) */}
                <p className={Style.nomeArquivo}>{item.nome || "Arquivo"}</p>
              </div>
            ))
          ) : (
            <p>Este freelancer ainda não possui itens no portfólio.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
