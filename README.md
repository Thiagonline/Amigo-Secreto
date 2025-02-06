### Explicação do código:

1. **HTML**:
   - A estrutura básica da página permanece igual, com um campo de entrada para o nome do amigo, um botão para adicionar, uma lista de amigos e o botão para realizar o sorteio.

2. **CSS**:
   - O estilo da página também permanece simples, centralizando os elementos e melhorando a aparência.

3. **JavaScript**:
   - **`listaAmigos`**: Um array é utilizado para armazenar os nomes dos amigos.
   - **Função `adicionarAmigo()`**: Esta função é chamada quando o botão "Adicionar" é clicado. Ela verifica se o nome inserido não está vazio, adiciona o nome ao array `listaAmigos`, limpa o campo de texto e chama a função `atualizarLista()` para atualizar a lista visível na tela.
   - **Função `atualizarLista()`**: Esta função percorre o array `listaAmigos` e exibe os nomes dos amigos na lista não ordenada (`<ul>`). Cada nome é adicionado como um item de lista (`<li>`).
   - **Função `sortearAmigo()`**: Esta função seleciona aleatoriamente um nome do array `listaAmigos` e exibe o resultado do sorteio na tela. Caso não haja amigos na lista, exibe um alerta.

### Como funciona:
1. O usuário adiciona um nome ao clicar no botão "Adicionar".
2. Os nomes inseridos são exibidos em uma lista na tela.
3. O botão "Sortear Amigo" escolhe aleatoriamente um nome da lista e o exibe como o "amigo secreto" sorteado.

Essa versão segue suas orientações de forma clara e modular. Você pode copiar e colar os arquivos HTML, CSS e JavaScript em um editor de código e executá-los diretamente em um navegador.
