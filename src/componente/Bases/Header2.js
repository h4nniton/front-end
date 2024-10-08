import image from '../img/Logo.png'
import styles from '../Css/header.module.css'
import { useNavigate } from 'react-router-dom'

function Header2() {
    const navigate = useNavigate();
    return (
        <div className={styles.header2}>
            <img src={image}  onClick={()=>navigate('/')}></img>

            <div className={styles.list}>
                <div className={styles.item}>
                    Já possui conta? <button className={styles.item} onClick={() => navigate('/Login')}> Entrar</button>
                </div>


            </div>

        </div>
    )
}

export default Header2