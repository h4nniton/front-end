import { Link } from "react-router-dom"
import styles from '../Css/navBar.module.css'

function NavBar (){
    return(
        
            <ul className={styles.list}>
            <li className={styles.item}>
                <Link className={styles.item} to="/login">Entrar</Link>
                </li>
            <li className={styles.button}>
                <Link className= {styles.buttonLink} to="/cadastro">Cadastre-se</Link>
                </li>
            </ul>
        
    )
}

export default NavBar