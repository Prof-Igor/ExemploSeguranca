const users = {
    "usuario1": "senha1",
    "usuario2": "senha2",
    "usuario3": "senha3",
    "usuario4": "senha4",
    "usuario5": "senha5",
    "usuario6": "senha6",
    "usuario7": "senha7",
    "usuario8": "senha8",
    "usuario9": "senha9",
    "usuario10": "senha10",
    "usuario11": "senha11",
    "usuario12": "senha12",
    "usuario13": "senha13",
    "usuario14": "senha14",
    "usuario15": "senha15",
    "usuario16": "senha16",
    "usuario17": "senha17",
    "usuario18": "senha18",
    "usuario19": "senha19",
    "usuario20": "senha20"
};

const loginForm = document.getElementById('loginForm');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('close');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] === undefined) {
        showModal("Uma sombra paira sobre o teclado... 'Usuário não encontrado', diz a tela. Mas será que realmente está oculto? O professor, detentor de conhecimento, sabe... Talvez, um fragmento de identidade, algo. Procure entre os dados... o que ele sabe? A resposta pode no mais simples a se esperar.");
    } else if (users[username] !== password) {
        showModal("As palavras tremem na tela... 'Senha incorreta', ecoa no silêncio do laboratório. Mas algo está certo, uma verdade oculta sob o erro. O professor, em sua sabedoria, criou uma chave a partir de algo simples, algo essencial, algo que o sistema do IFSP deu a você. Talvez esteja mais perto do que imagina, tão básica que quase passa despercebida. Olhe mais de perto... o que foi dado a você desde o primeiro acesso?");
    } else {
        showModal("O portal se abre... 'Login bem-sucedido!', anunciam as sombras da interface. Mas a jornada apenas começou. Uma nova fase surge no horizonte. O destino? A enigmática ROTA que você é questionado(a). É lá que os segredos aguardam, ocultos entre respostas... ou serão mais perguntas? Cada escolha pode ser uma chave. Agora, sua busca começa de verdade. O que irá descobrir quando atravessar o próximo limiar?");
    }
});

function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
