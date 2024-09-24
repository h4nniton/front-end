import styles from '../Css/coluna.module.css'
import imagem from '../img/genio.png'

function Coluna (props){
    return(
        <div className={styles.coluna}>
            <img src={imagem}></img>
        </div>
    )
}

export default Coluna