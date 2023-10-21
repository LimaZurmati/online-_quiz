const questions = [
    {
        question: "what is the second name of kabul?",
        answers: [
            { text: "kabul", correct: true },
            {
                text: "herat",
                correct: false
            },
            {
                text: "ghazni",
                correct: false
            },
            {
                text: "ghor",
                correct: false
            },

        ]
    },
    {
        question: 'what is css?',
        answers: [{
                text: "stands for Cascading Style Sheets",
                correct: true
            },
            {
                text: "page",
                correct: false
            },
            {
                text: "style ",
                correct: false
            },
            {
                text: "design",
                correct: false
            },

        ]
    },
    {
        question: 'what is html?',
        answers: [{
                text: "Hyper Text Markup Language",
                correct: true
            },
            {
                text: "programming languge",
                correct: false
            },
            {
                text: "coding",
                correct: false
            },
            {
                text: "none",
                correct: false
            },

        ]
    }, {
        question: 'what is js?',
        answers : [{
                text: " scripting language",
                correct: true
            },
            {
                text: "scripting",
                correct: false
            },
            {
                text: "web",
                correct: false
            },
            {
                text: "none",
                correct: false
            },

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons  = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
   resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;



    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
     
    });
  
}
  function resetState(){
    nextButton.style.display = "none;"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer (e){

  }

startQuiz();

