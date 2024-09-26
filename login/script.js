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
        showModal("Usuário não encontrado.");
    } else if (users[username] !== password) {
        showModal("Senha incorreta.");
    } else {
        showModal("Login bem-sucedido!");
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
