//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function validarNome(nome) {
    return nome.trim().length > 0 && !amigos.includes(nome);
}

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (!validarNome(nome)) {
        alert("Nome inválido ou já adicionado!");
        return;
    }
    
    amigos.push(nome);
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para o sorteio!");
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `Amigo Sorteado: ${amigoSorteado}`;
    listaResultado.appendChild(li);
}
