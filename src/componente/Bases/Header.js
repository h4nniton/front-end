
import image from '../img/Logo.png'
import styles from '../Css/header.module.css'
import { useNavigate } from 'react-router-dom'





function Header() {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <img src={image} onClick={()=>navigate('/')}></img>

            <div className={styles.list}>

                <button className={styles.item} onClick={()=>navigate('/Login')}>
                    <p className={styles.item} >Entrar</p>
                </button>
                <div className={styles.cadastro}>
                     <button className={styles.button}  onClick={()=>navigate('/Cadastro')}>
                    Cadastre-se
                </button>
                </div>
            </div>

        </div>
    )
}

export default Header