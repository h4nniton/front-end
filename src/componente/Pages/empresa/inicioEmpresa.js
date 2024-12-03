import { useState, useEffect } from "react";
import Style from "../../Css/IncioEmpresa.module.css"; // Alterado o arquivo de estilo
import Comentarios from "../../Bases/Comentarios.js";

function InicioEmpresa({ listPortfolio }) {
  // Verificar se o listPortfolio está correto
  console.log("Portfólio recebido:", listPortfolio);

  // Função para verificar se uma imagem é válida
  const verificarImagem = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  // Componente para carregar uma imagem ou exibir uma imagem padrão se a URL falhar
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
        style={{ width: "100%", height: "auto" }} // Ajuste para melhor renderização
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
              {/* Verifica se "arquivo" existe antes de passar */}
              {portfolio.arquivo ? (
                <ImagemPortfolio url={portfolio.arquivo} defaultImage={defaultImage} />
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
          <Comentarios />
        </div>
      </div>
    </div>
  );
}

export default InicioEmpresa;
