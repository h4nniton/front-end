import styles from '../Css/PerfilCriacao.module.css'
import img from '../img/Logo.png'
import { getCategoria } from '../integração/funcao'

function gerarCards(cards){
    const card = document.createElement('div')
    const icon = document.createElement('img')
    const titulo = document.createElement('p')

    titulo.textContent = cards.nome_categoria
    icon.src = cards.icon_categoria

    card.append(icon, titulo)
    return card
}

const cardCategoria = document.getElementById('cards')
    const card = await getCategoria()
    const categoriasObj = card
    categoriasObj.categorias.forEach((categorias) => {
        const nomecategoria = categorias.nome_categoria
        const imgcategoria = categorias.icon_categoria
        const card = gerarCards(nomecategoria, imgcategoria)
        cardCategoria.appendChild(card)
    });





function PerfilCriacao() {
    return (
        <div>
            <div className={styles.header}>
                <img src={img}></img>
            </div>

            <h1>Selecione suas categorias</h1>
            <p className={styles.p}> selecione as áreas das quais você trabalha</p>

            <div id='cards' className={styles.section}></div>
        </div>
    )
}

export default PerfilCriacao