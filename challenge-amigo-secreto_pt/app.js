//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar amigos ao array
function adicionarAmigo() {
  const nomeInput = document.getElementById('nome');
  const nome = nomeInput.value.trim();
  
  // Validar se o nome não está vazio
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }
  
  // Adicionar o nome ao array
  listaAmigos.push(nome);
  
  // Limpar o campo de entrada
  nomeInput.value = "";
  
  // Atualizar a lista exibida na tela
  atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const listaElement = document.getElementById('lista-amigos');
  listaElement.innerHTML = "";  // Limpar a lista antes de atualizar
  
  // Adicionar os amigos à lista na tela
  listaAmigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaElement.appendChild(li);
  });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Verificar se há pelo menos um amigo na lista
  if (listaAmigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }
  
  // Gerar um índice aleatório entre 0 e o tamanho da lista
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio];
  
  // Exibir o resultado do sorteio
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
