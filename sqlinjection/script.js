function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

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
        feedbackDiv.innerText = "Acertou! Você identificou a vulnerabilidade. Dica: " + b64DecodeUnicode(dica);
    } else {
        feedbackDiv.innerText = "Tente novamente.";
    }
}
