import { getCategoria } from "../integração/funcao"
import criarCard from "../Bases/CriarCard";

async function EventoGerarCard() {
    const gerarCard = document.getElementById('categorias')
    const categoria = await getCategoria()

    categoria.categorias.forEach( cateInfo => {
        console.log(cateInfo.nome_categoria);

        const opcao = criarCard(cateInfo.nome_categoria)
        gerarCard.appendChild(opcao)
    })

    return EventoGerarCard
}


export default EventoGerarCard