import Grafico from "../../Bases/GraficoFreelancer.js"
import style from "../../Css/grafico.module.css"

function ProjetosHistorico(){
    return(
        <div className={style.grafico}>
            <Grafico/>
        </div>
    )
}

export default ProjetosHistorico