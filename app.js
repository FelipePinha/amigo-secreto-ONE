//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = []

const mostrarAmigoNaTela = (amigo) => {
    const lista = document.querySelector('#listaAmigos')

    const amigoItem = document.createElement('li')
    amigoItem.innerHTML = amigo
    lista.appendChild(amigoItem)
}

const adicionarAmigo = () => {
    const amigo = document.querySelector('#amigo')

    if(!amigo.value) {
        alert('Por favor, insira um nome válido.')
        return
    }

    amigos.push(amigo.value)
    mostrarAmigoNaTela(amigo.value)
    
    amigo.value = ''
}

const sortearAmigo = () => {
    const resultado = document.querySelector('#resultado')

    const indexSorteado = parseInt(Math.random() * amigos.length)
    const lista = document.querySelectorAll('#listaAmigos li')

    lista.forEach(amigoItem => {
        amigoItem.remove()
    })

    const amigoSorteado = amigos[indexSorteado]

    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`
}