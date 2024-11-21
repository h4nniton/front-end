import styles from '../Css/HeaderOficial.module.css'
import image from '../img/Logo.png'
import img from "../img/avatar.png"
import { useNavigate } from 'react-router-dom'



function HeaderOficial() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.header}>
                <img src={image} onClick={() => navigate('/')}></img>

                <div className={styles.user}>
                    <p>Nome usuario</p>
                    <img src={img} onClick={() => navigate('/PerfilEmpresa')} ></img>
                </div>
            </div>

        </div>
    )
}

export default HeaderOficial