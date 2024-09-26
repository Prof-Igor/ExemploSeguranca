function executeCode() {
    var userInput = document.getElementById('userInput').value;
    // Este eval é intencional para demonstrar vulnerabilidade de XSS
    eval(userInput);

    if (userInput.includes("alert(")){
        alertDica();
    }
}

function alertDica() {
    alert("Na última aula, o silêncio não chegou. O professor falou, mas você ouviu? O banco de dados, um repositório de mistérios, foi acessado, suas portas abertas por um único comando. Agora, você deve seguir a trilha deixada. Vá à rota que o script nomeou... Lá, no código oculto, você encontrará o próximo enigma. Qual será o destino dessa busca?");
}
