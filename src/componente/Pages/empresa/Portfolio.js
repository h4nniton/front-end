import img from '../../img/exemplo portifolio.png'
import Style from '../../Css/portifolio.module.css'


function Portfolio() {
    return (
        <div className={Style.tela}>
            <div className={Style.historico}>
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
            </div>
        </div>
    )
}

export default Portfolio