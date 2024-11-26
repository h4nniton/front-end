import img from '../../img/exemplo portifolio.png'
import Style from '../../Css/inicioFreelancer.module.css'
import empresa from '../../img/empresa.png'
import avaliacao from '../../img/avaliacao.png'
import { useParams, useNavigate } from 'react-router-dom';
import Comentarios from '../../Bases/Comentarios.js'


function InicioFreelancer() {
    const { id } = useParams();

    return (
        <div className={Style.perfil}>
            <div className={Style.previa}>
                <div className={Style.portfolio}>
                    <img src={img}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida</p>
                </div>

                <div className={Style.portfolio}>
                    <img src={img}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida</p>
                </div>

                <div className={Style.portfolio}>
                    <img src={img}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida</p>
                </div>
            </div>

            <div className={Style.avaliacoes}>
                <div className={Style.comentario}>
                    <Comentarios key={id}/>
                </div>

            </div>

        </div>
    )
}

export default InicioFreelancer