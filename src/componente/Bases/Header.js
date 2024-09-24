
import image from '../img/Logo.png'
import styles from '../Css/header.module.css'
import { useNavigate } from 'react-router-dom'





function Header() {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <img src={image}></img>

            <div className={styles.list}>

                <button className={styles.item} onClick={()=>navigate('/Login')}>
                    <p className={styles.item} >Entrar</p>
                </button>
                <button className={styles.button}  onClick={()=>navigate('/Cadastro')}>
                    <p className={styles.buttonLink}>Cadastre-se</p>
                </button>
            </div>

        </div>
    )
}

export default Header