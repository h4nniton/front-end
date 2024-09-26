import Coluna from "../Bases/Coluna"
import FormularioFreelancer from './FormularioFreelancer'
import styles from '../Css/cadastroTela.module.css'

function CadastroFreelancer(){
    return(
        <div className={styles.tela}>
            <Coluna/>
            <FormularioFreelancer/>
        </div>
    )
}

export default CadastroFreelancer