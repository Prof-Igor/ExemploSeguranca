const users = {
    "Ana Clara Rodrigues Peres Marçal": "SP3117499",
    "Ana Julia Tenorio de Jesus": "SP3115542",
    "Ana Marcelia Oliveira Severo Pereira": "SP3116069",
    "Any Gabriely Silva Moraes": "SP3118801",
    "Bernardo de Castro Bertoldo": "SP3114775",
    "Bruno Timoteo Silva": "SP3116042",
    "Caique França dos Santos": "SP3118541",
    "Carlos Eduardo da Conceicao Santos": "SP3116352",
    "Daniel Expedito Vieira da Silv": "SP3116263",
    "Enzo Maximino de Sousa Costa": "SP3118771",
    "Eric Goncalves Rosa": "SP3116557",
    "Felipe Begliomini Azali": "SP311595X",
    "Fernando Pereira Filipe Duarte": "SP311872X",
    "Guilherme de Melo Loredo": "SP3116891",
    "Henrique Nagy de Freitas": "SP3121453",
    "Henrique Paschero Cima": "SP3114546",
    "Ian Jorge Martins": "SP3118673",
    "Isabel Almeida Conceição": "SP3117138",
    "João Pedro de Almeida Martins": "SP3115933",
    "Marina de Araujo Trindade": "SP3115046",
    "Mayara Matilde Cardoso de Freitas": "SP3115178"
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
        showModal(atob("TyBwb3J0YWwgc2UgYWJyZS4uLiAnTG9naW4gYmVtLXN1Y2VkaWRvIScsIGFudW5jaWFtIGFzIHNvbWJyYXMgZGEgaW50ZXJmYWNlLiBNYXMgYSBqb3JuYWRhIGFwZW5hcyBjb21lw6dvdS4gVW1hIG5vdmEgZmFzZSBzdXJnZSBubyBob3Jpem9udGUuIE8gZGVzdGlubz8gQSBlbmlnbcOhdGljYSBST1RBIHF1ZSB2b2PDqiDDqSBxdWVzdGlvbmFkbyhhKS4gw4kgbMOhIHF1ZSBvcyBzZWdyZWRvcyBhZ3VhcmRhbSwgb2N1bHRvcyBlbnRyZSByZXNwb3N0YXMuLi4gb3Ugc2Vyw6NvIG1haXMgcGVyZ3VudGFzPyBDYWRhIGVzY29saGEgcG9kZSBzZXIgdW1hIGNoYXZlLiBBZ29yYSwgc3VhIGJ1c2NhIGNvbWXDp2EgZGUgdmVyZGFkZS4gTyBxdWUgaXLDoSBkZXNjb2JyaXIgcXVhbmRvIGF0cmF2ZXNzYXIgbyBwcsOzeGltbyBsaW1pYXI/"));
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
