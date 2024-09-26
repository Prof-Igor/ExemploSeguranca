function executeCode() {
    var userInput = document.getElementById('userInput').value;
    // Este eval é intencional para demonstrar vulnerabilidade de XSS
    eval(userInput);

    if (userInput.includes("alert(")){
        alertDica();
    }
}

function alertDica() {
    alert("Dica.");
}
// Exemplo de código que pode ser inserido para mostrar a dica
// alert('A dica é: O caminho para o saber está em suas mãos!');
