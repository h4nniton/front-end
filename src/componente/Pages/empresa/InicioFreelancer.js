import img from '../../img/exemplo portifolio.png'
import Style from '../../Css/inicioFreelancer.module.css'
import empresa from '../../img/empresa.png'
import avaliacao from '../../img/avaliacao.png'
import { useParams, useNavigate } from 'react-router-dom';
import Comentarios from '../../Bases/Comentarios.js'
import { useState, useEffect } from 'react';


function InicioFreelancer({ listPortfolio }) {
  const { id } = useParams();
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
        alt="Imagem do portfólio"
      />
    );
  };

  const defaultImage = "/src/componente/img/iconzip.png";

  return (
    <div className={Style.perfil}>
      <div className={Style.previa}>
        {listPortfolio && listPortfolio.length > 0 ? (
          listPortfolio.map((portfolio, index) => (
            <div key={index} className={Style.portfolio}>
              <ImagemPortfolio url={portfolio.freelancers && portfolio.freelancers.length > 0
                ? portfolio.freelancers[0]
                : "Not found"} defaultImage={defaultImage} />
            </div>
          ))
        ) : (
          <p>not found</p>
        )}
      </div>

      <div className={Style.avaliacoes}>
        <div className={Style.comentario}>
          <Comentarios key={id} />
        </div>

      </div>

    </div>
  )
}

export default InicioFreelancer