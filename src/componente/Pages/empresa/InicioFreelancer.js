import img from '../../img/exemplo portifolio.png'
import Style from '../../Css/inicioFreelancer.module.css'

function InicioFreelancer() {
    return (
        <div>
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
    )
}

export default InicioFreelancer