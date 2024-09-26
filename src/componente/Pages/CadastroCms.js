import Coluna from "../Bases/Coluna"
import FormularioCms from './FormularioCms'
import styles from '../Css/cadastroTela.module.css'

function CadastroCms(){
    return(
        <div className={styles.tela}>
            <Coluna/>
            <FormularioCms/>
        </div>
    )
}

export default CadastroCms