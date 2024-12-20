export async function postCliente(cliente) {
    const url = `http://localhost:8080/v1/jinni/cliente`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function postFreelancer(freelancer) {
    try {

        const url = `http://localhost:8080/v1/jinni/freelancer`
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify(freelancer)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("data",data);

        return data
    } catch (error) {
        console.log(error);
        return false
    }

}


export async function getCategoria() {
    const url = 'http://localhost:8080/v1/jinni/categorias'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getHabilidade() {
    const url = 'http://localhost:8080/v1/jinni/habilidades'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getFreelancers() {
    const url = 'http://localhost:8080/v1/jinni/freelancers'
    const response = await fetch(url)
    const data = await response.json()
    return data
}