import styles from '../Css/HeaderOficial.module.css'
import image from '../img/Logo.png'
import img from "../img/avatar.png"
import { useNavigate } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const { id } = useParams();
function HeaderOficial() {
    const navigate = useNavigate();
    


    return (
        <div>
            <div className={styles.header}>
                <img src={image} onClick={() => navigate('/')}></img>

                <div className={styles.user}>
                    <p>Nome usuario</p>
                   <Link to={`/empresa/${empresa.id}`}>
                   <img src={img} ></img></Link>
                </div>
            </div>

        </div>
    )
}

export default HeaderOficial