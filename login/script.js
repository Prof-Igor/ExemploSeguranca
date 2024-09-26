const users = {
    "Gabrielly Leite de Macedo": "SP3115763",
    "Giovanna Lima Ng": "SP3117961",
    "João Victor Santos": "SP311662X",
    "Kaio Damasceno de Oliveira": "SP3124517",
    "Laura Jardim Santos": "SP3116697",
    "Leonardo Koga Florentino": "SP3118614",
    "Marcelo Gonçalves Diniz": "SP3115909",
    "Maria Eduarda de Araujo Souza": "SP3115895",
    "Mateus Hideki de Figueiredo Tamura": "SP3116191",
    "Matheus Barbosa Silva": "SP311659X",
    "Melissa Schiavone Cardoso": "SP311600X",
    "Mirella Prado Santos": "SP3124568",
    "Murillo Marinho Santos": "SP3115526",
    "Murilo Silva Borges": "SP311564X",
    "Rafael Gomes Messias": "SP3124819",
    "Rafael Pires Goncalves": "SP3118754",
    "Renan Trajano da Conceição": "SP3115887",
    "Sara Martins Oliveira": "SP3120511",
    "Thiago Akira Damasceno Taniguchi": "SP3115623",
    "Vinicius Banos Cordeiro Santos": "SP3116484",
    "Yasmin Catherinne Conceição Bastos": "SP3116212"
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
