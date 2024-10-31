import HeaderOficial from '../../Bases/HeaderOficial.js'
import NavBar from '../../Bases/NavBar2.js'
import style from '../../Css/telaInicial2.module.css'
import img from '../../img/image 1.png'
import EventoGerarFreelancer from '../../Eventos/EventoGerarFreelancer.js'



function TelaInicial() {
    return (

        <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar />


                <div className={style.feed}>
                    {/* <EventoGerarFreelancer/> */}
                    <div className={style.pi}>
                        <div className={style.card}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelaInicial 