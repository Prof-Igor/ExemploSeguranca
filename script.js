document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Lista de 20 senhas fracas e suas respectivas frases
    const weakPasswords = {
        '12345': 'Você escolheu a senha mais comum, repense suas escolhas!',
        'senha': 'Senha óbvia, não acha? Melhore isso!',
        'qwerty': 'Clássico, mas não muito seguro!',
        'abc123': 'A criatividade passou longe...',
        '111111': 'Senhas repetitivas são péssimas!',
        '123456': 'Adicione mais segurança à sua senha!',
        'password': 'Usar "password" como senha? Sério?',
        '123123': 'Sequências não são seguras!',
        'admin': 'Nunca use essa senha em produção!',
        'welcome': 'Bem-vindo ao mundo das senhas fracas!',
        'letmein': 'Deixe-me entrar? Com essa senha fraca?',
        'passw0rd': 'Trocar letras por números não adianta muito!',
        'monkey': 'Nem animais podem te salvar dessa senha!',
        'login': 'Usar "login" como senha é arriscado!',
        '1234': 'Muito curta e fácil de adivinhar!',
        'abcd': 'Uma senha fácil de quebrar!',
        'iloveyou': 'Boa mensagem, mas péssima senha!',
        '0000': 'Essa senha é só zeros... como a segurança dela!',
        '1111': 'Usar números repetidos não é seguro!',
        '123': 'Senhas com menos de 5 caracteres são fáceis de quebrar!'
    };

    // Verifica se a senha é válida
    if (weakPasswords[password]) {
        // Exibe a frase correspondente
        messageElement.textContent = weakPasswords[password];
        messageElement.classList.remove('hidden');
    } else {
        messageElement.textContent = 'Senha incorreta. Tente novamente.';
        messageElement.classList.remove('hidden');
    }
});
