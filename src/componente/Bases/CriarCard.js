function criarCard(cateInfo) {
    const opcao = document.createElement('radio')
    const icon = document.createElement('img')
    const titulo = document.createElement('p')

    titulo.textContent = cateInfo.nome_categoria

    opcao.append(icon, titulo)
    return opcao
}

export default criarCard