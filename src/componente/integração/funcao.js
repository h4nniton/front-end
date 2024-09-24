export async function postCliente (cliente) {
    const url = `https://jinni.onrender.com/v1/jinni/cliente`
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

export async function postFreelancer (freelancer) {
    const url = `https://jinni.onrender.com/v1/jinni/freelancer`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(freelancer)
    }
    const response = await fetch(url, options)
    return response.ok
}