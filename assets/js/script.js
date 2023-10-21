const questions = [
    {
        question: "What is HTML??",
        answers: [
            { text: "HTML stands for HyperText Markup Language", correct: true },
            {
                text: "text formatting language used for creating and displaying pages on the Internet",
                correct: false
            },
            {
                text: "HTML documents are made up of the elements and the tags that format it for proper display on pages.",
                correct: false
            },
            {
                text: "none",
                correct: false
            },

        ]
    },
    {
        question: 'How many sizes of headers are available in HTML by default?',
        answers: [{
                text: "6",
                correct: true
            },
            {
                text: "5",
                correct: false
            },
            {
                text: "3 ",
                correct: false
            },
            {
                text: "1",
                correct: false
            },

        ]
    },
    {
        question: 'What is the smallest header in HTML by default?',
        answers: [{
                text: "h6",
                correct: true
            },
            {
                text: "h5",
                correct: false
            },
            {
                text: "h4",
                correct: false
            },
            {
                text: "h1",
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
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;


    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

  }
  function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`; 
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
  }
   function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }else{
        showScore();
    }
   }
 nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();

}else{
    startQuiz();
}
 });
startQuiz();

