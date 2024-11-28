import HeaderOficial from '../../Bases/HeaderOficial.js'
import NavBar from '../../Bases/NavBar.js'
import style from '../../Css/telaInicial.module.css'
import js from '../../img/jsIcon.png'
import react from '../../img/reactIcon.png'
import css from '../../img/cssIcon.png'
import html from '../../img/htmlIcon.png'
import kotlin from '../../img/kotlinIcon.png'
import java from '../../img/javaIcon.png'
import { useLocation } from 'react-router-dom';


function TelaInicial() {

    const location = useLocation();
    const { id } = location.state || {};
    return (
        
        <div className={style.telas}>
            <HeaderOficial id={id} />
            <div className={style.navegacao}>
                <NavBar />
                <div className={style.propostas}>
                    <div className={style.pi}>
                    <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>

                     


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.pi}>

                    <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>

                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.pi}>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>


                        <div className={style.card}>
                            <h2>Elabore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna  amet, consectetur adipiscing elit. Donec ut consequat enim, vitae venenatis urna...</p>

                            <div className={style.filho}>
                                <div className={style.habilidade}>
                                    <img src={js}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={react}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={css}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={html}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={kotlin}></img>
                                </div>
                                <div className={style.habilidade}>
                                    <img src={java}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TelaInicial 