function checkInput(exampleNumber) {
    let userInput;
    let correctInput;
    
    switch(exampleNumber) {
        case 1:
            userInput = document.getElementById('input1').value;
            correctInput = "admin' --";
            break;
        case 2:
            userInput = document.getElementById('input2').value;
            correctInput = "produto'; DROP TABLE produtos; --";
            break;
        case 3:
            userInput = document.getElementById('input3').value;
            correctInput = "1 OR 1=1";
            break;
    }

    const feedbackDiv = document.getElementById(`feedback${exampleNumber}`);
    if (userInput === correctInput) {
        feedbackDiv.innerText = "Acertou! Você identificou a vulnerabilidade.";
    } else {
        feedbackDiv.innerText = "Tente novamente.";
    }
}
