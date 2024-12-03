import React, { useState, useEffect } from "react";
import Style from "../../Css/portifolio.module.css";
import defaultImage from '../../img/reactIcon.png'; // Importando a imagem padrão

const verificarImagem = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

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

function Portfolio({ listPortfolio }) {
  return (
    <div className={Style.tela}>
      <div className={Style.historico}>
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
      </div>
    </div>
  );
}

export default Portfolio;
