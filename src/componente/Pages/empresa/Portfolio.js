import img from '../../img/exemplo portifolio.png'
import Style from '../../Css/portifolio.module.css'


function Portfolio({ listPortfolio }) {
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
                        <p>not found</p>
                    )}
                </div>
                
               
            </div>
        </div>
    )
}

export default Portfolio