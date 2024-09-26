function checkInput(exampleNumber) {
    let userInput;
    let correctInput;
    
    switch(exampleNumber) {
        case 1:
            userInput = document.getElementById('input1').value;
            correctInput = "YWRtaW4nIC0t";
            dica = "cHJvY3VyZQ==";
            break;
        case 2:
            userInput = document.getElementById('input2').value;
            correctInput = "RFJPUCBUQUJMRSBwcm9kdXRvcw==";
            dica = "bw==";
            break;
        case 3:
            userInput = document.getElementById('input3').value;
            correctInput = "MSBPUiAxPTE=";
            dica = "cHJvZmVzc29y";
            break;
    }

    const feedbackDiv = document.getElementById(`feedback${exampleNumber}`);
    if (userInput.includes(atob(correctInput))) {
        feedbackDiv.innerText = "Acertou! Você identificou a vulnerabilidade. Dica: " + atob(dica);
    } else {
        feedbackDiv.innerText = "Tente novamente.";
    }
}
