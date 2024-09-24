import styles from '../Css/cadastro.module.css'
import Header2 from '../Bases/Header2'
import imgFrelancer from '../img/freelancer.png'
import imgCliente from '../img/cliente.png'


function Cadastro() {
    return (
        <div>
            <Header2 />
            <div className={styles.tela}>
                <h1 className={styles.h1}>Cadastrar-se como um cliente ou como um freelancer?</h1>

                <div className={styles.escolhas}>
                    <div className={styles.escolha1}>
                        <img src={imgFrelancer}></img>
                        <p>wibuvisbuv</p>
                    </div>

                    <div className={styles.escolha2}>
                        <img src={imgCliente}></img>
                        <p>wibuvisbuv</p>
                    </div>

                </div>

                <button className={styles.botao}>
                    Criar uma conta
                </button>

            </div>
        </div>


    )
}

export default Cadastro