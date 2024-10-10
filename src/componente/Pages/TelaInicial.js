import HeaderOficial from '../Bases/HeaderOficial.js'
import NavBar from '../Bases/NavBar.js'
import style from '../Css/telaInicial.module.css'

function TelaInicial() {
    return (
        <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar/>
            </div>



        </div>
    )
}

export default TelaInicial 