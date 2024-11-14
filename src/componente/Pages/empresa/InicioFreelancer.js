import img from '../../img/exemplo portifolio.png'
import Style from '../../Css/inicioFreelancer.module.css'
import empresa from '../../img/empresa.png'
import avaliacao from '../../img/avaliacao.png'

function InicioFreelancer() {
    return (
        <div className={Style.perfil}>
            <div className={Style.previa}>
                <div className={Style.portfolio}>
                    <img src={img}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida</p>
                </div>

                <div className={Style.portfolio}>
                    <img src={img}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida</p>
                </div>

                <div className={Style.portfolio}>
                    <img src={img}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida</p>
                </div>
            </div>

            <div className={Style.avaliacoes}>
                <h2>Avaliação</h2>
                <div className={Style.comentario}>
                    <div className={Style.avaliacao}>
                        <div className={Style.detalhes}>
                            <div className={Style.empresa}>
                                <img src={empresa}></img>
                                <h3> F3 Investimentos</h3>
                            </div>
                            <img src={avaliacao} className={Style.estrela}></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida pellentesque mi sed gravida. Morbi pellentesque at elit sed mattis. Ut non velit orci. Aliquam hendrerit ipsum s</p>
                    </div>
                    <div className={Style.avaliacao}>
                        <div className={Style.detalhes}>
                            <div className={Style.empresa}>
                                <img src={empresa}></img>
                                <h3> F3 Investimentos</h3>
                            </div>
                            <img src={avaliacao} className={Style.estrela}></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida pellentesque mi sed gravida. Morbi pellentesque at elit sed mattis. Ut non velit orci. Aliquam hendrerit ipsum s</p>
                    </div>
                    <div className={Style.avaliacao}>
                        <div className={Style.detalhes}>
                            <div className={Style.empresa}>
                                <img src={empresa}></img>
                                <h3> F3 Investimentos</h3>
                            </div>
                            <img src={avaliacao} className={Style.estrela}></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida pellentesque mi sed gravida. Morbi pellentesque at elit sed mattis. Ut non velit orci. Aliquam hendrerit ipsum s</p>
                    </div>
                    <div className={Style.avaliacao}>
                        <div className={Style.detalhes}>
                            <div className={Style.empresa}>
                                <img src={empresa}></img>
                                <h3> F3 Investimentos</h3>
                            </div>
                            <img src={avaliacao} className={Style.estrela}></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida pellentesque mi sed gravida. Morbi pellentesque at elit sed mattis. Ut non velit orci. Aliquam hendrerit ipsum s</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default InicioFreelancer