const questions = [
    {
        question: "Qual é um dos principais riscos associados à injeção de SQL em aplicações web?",
        options: [
            "A) Aumento do tempo de resposta",
            "B) Vulnerabilidade a acesso não autorizado",
            "C) Melhoria na experiência do usuário",
            "D) Redução do tráfego da aplicação"
        ],
        answer: "B"
    },
    {
        question: "O que é considerado um risco ao utilizar bibliotecas de terceiros sem verificação adequada?",
        options: [
            "A) Redução da carga no servidor",
            "B) Perda de controle sobre a segurança da aplicação",
            "C) Aumento na velocidade de desenvolvimento",
            "D) Melhora na performance da aplicação"
        ],
        answer: "B"
    },
    {
        question: "Qual é um risco comum em aplicações que não implementam autenticação adequada?",
        options: [
            "A) Aumento da complexidade do código",
            "B) Roubo de credenciais de usuários",
            "C) Diminuição da satisfação do usuário",
            "D) Redução da escalabilidade da aplicação"
        ],
        answer: "B"
    },
    {
        question: "Qual é o impacto de não manter atualizados os softwares utilizados na aplicação web?",
        options: [
            "A) Aumento da funcionalidade",
            "B) Risco elevado de ataques cibernéticos",
            "C) Melhoria na performance",
            "D) Diminuição da necessidade de suporte técnico"
        ],
        answer: "B"
    },
    {
        question: "Qual é um risco associado ao uso inadequado de certificados SSL em uma aplicação web?",
        options: [
            "A) Aumento da latência",
            "B) Tráfego não criptografado",
            "C) Melhoria na classificação SEO",
            "D) Diminuição da complexidade do código"
        ],
        answer: "B"
    },
    {
        question: "Como a falta de uma política de backup pode impactar uma aplicação web?",
        options: [
            "A) Aumento da performance do sistema",
            "B) Risco de perda de dados",
            "C) Melhora na usabilidade da aplicação",
            "D) Redução dos custos de manutenção"
        ],
        answer: "B"
    },
    {
        question: "O que representa um risco ao não implementar controle de acesso adequado nas aplicações web?",
        options: [
            "A) Aumento da eficiência",
            "B) Segurança comprometida",
            "C) Melhoria no fluxo de trabalho",
            "D) Diminuição da necessidade de testes"
        ],
        answer: "B"
    },
    {
        question: "O que pode acontecer se as senhas dos usuários não forem armazenadas de forma segura?",
        options: [
            "A) Aumento da satisfação do usuário",
            "B) Comprometimento de dados sensíveis",
            "C) Redução do número de acessos",
            "D) Diminuição da necessidade de autenticação"
        ],
        answer: "B"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = questions[currentQuestionIndex];

    document.getElementById('question').innerText = question.question;
    document.getElementById('options').innerHTML = question.options.map((option, index) => 
        `<button class="option" data-answer="${option[0]}">${option}</button>`
    ).join('');
    document.getElementById('feedback').innerText = '';
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('backBtn').classList.toggle('hidden', currentQuestionIndex === 0);
}

function showFeedback(isCorrect) {
    const feedback = document.getElementById('feedback');
    feedback.innerText = isCorrect ? "Resposta Correta!" : "Resposta Incorreta!";
    document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('questionContainer').classList.add('hidden');
    document.getElementById('resultContainer').classList.remove('hidden');
}

document.getElementById('options').addEventListener('click', function(e) {
    if (e.target.classList.contains('option')) {
        const selectedAnswer = e.target.dataset.answer;
        const correctAnswer = questions[currentQuestionIndex].answer;
        const isCorrect = selectedAnswer === correctAnswer;

        showFeedback(isCorrect);
    }
});

document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('backBtn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Iniciar o questionário
loadQuestion();
