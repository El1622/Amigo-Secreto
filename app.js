let amigos = [];

function adicionarAmigo() {
    const input = document.querySelector('#amigo'); 
    const nome = input.value.trim(); 

    
    if (nome === '') {
        alert('Por favor, insira um nome.'); 
        return; 
    }
    amigos.push(nome);
    input.value = ''; 
    atualizarLista();
}

function atualizarLista() {
    const lista = document.querySelector('#listaAmigos'); // Seleciona a lista
    lista.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach(amigo => {
        const li = document.createElement('li'); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    });
}


function sortearAmigo() {
    
    alert('Parabéns você foi sorteado.');
}






