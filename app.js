//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 1. Criando o array para armazenar os amigos
let amigos = [];

// 2. Função para adicionar amigos
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");  // Pega o campo de entrada
    const amigoNome = amigoInput.value.trim();  // Retira espaços em branco extras

    // Verifica se o campo de entrada está vazio
    if (amigoNome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(amigoNome);  // Adiciona o nome ao array
    amigoInput.value = "";  // Limpa o campo de texto

    atualizarListaAmigos();  // Atualiza a lista exibida
}

// 3. Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");  // Seleciona a lista na página
    lista.innerHTML = "";  // Limpa a lista antes de adicionar os novos itens

    // Percorre o array de amigos e cria um <li> para cada um
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");  // Cria um novo item de lista
        li.textContent = amigos[i];  // Adiciona o nome do amigo ao item
        lista.appendChild(li);  // Adiciona o item à lista
    }
}

// 4. Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {  // Verifica se há amigos na lista
        alert("Adicione pelo menos um amigo!");
        return;
    }

    const sorteado = Math.floor(Math.random() * amigos.length);  // Sorteia um índice aleatório
    const amigoSorteado = amigos[sorteado];  // Pega o nome do amigo sorteado

    // Exibe o nome sorteado na tela
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}


