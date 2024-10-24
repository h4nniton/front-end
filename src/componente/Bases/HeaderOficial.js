import styles from '../Css/HeaderOficial.module.css'
import image from '../img/Logo.png'
import { useNavigate } from 'react-router-dom'



function HeaderOficial() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.header}>
                <img src={image} onClick={() => navigate('/')}></img>

                <div>
                    <p>Nome usuario</p>
                    <img ></img>
                </div>
            </div>

        </div>
    )
}

export default HeaderOficial