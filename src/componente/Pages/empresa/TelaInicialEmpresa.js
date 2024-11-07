import HeaderOficial from '../../Bases/HeaderOficial.js'
import NavBar from '../../Bases/NavBar2.js'
import style from '../../Css/telaInicial2.module.css'
import img from '../../img/image 1.png'
import estrelas from '../../img/estrelas.png'
import { useNavigate } from 'react-router-dom'
import EventoGerarFreelancer from '../../Eventos/EventoGerarFreelancer.js'



function TelaInicial() {
    const navigate = useNavigate();

    return (

        <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar />


                <div className={style.feed}>
                    {/* <EventoGerarFreelancer/> */}
                    <div className={style.pi}>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card}onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
                            <div className={style.perfil}>
                            <img src={img}></img>
                            <h2>Afonso</h2>
                            </div>
                        </div>
                        <div className={style.card} onClick={()=>{
                            navigate('/perfilFreelancer')
                        }}>
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