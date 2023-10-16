const questions = [
    {
        question: 'what is the second name of kabul?',
        answer: [
            {text:"kabul",correct:true},
            {text:"herat",correct:false},
            {text:"ghazni",correct:false},
            {text:"ghor",correct:false},

        ]
    },
    {
        question: 'what is css?',
        answer: [
            {text:"stands for Cascading Style Sheets",correct:true},
            {text:"page",correct:false},
            {text:"style ",correct:false},
            {text:"design",correct:false},

        ]
    },
    {
        question: 'what is html?',
        answer: [
            {text:"Hyper Text Markup Language",correct:true},
            {text:"programming languge",correct:false},
            {text:"coding",correct:false},
            {text:"none",correct:false},

        ]
    },{
        question: 'what is js?',
        answer: [
            {text:" scripting language",correct:true},
            {text:"scripting",correct:false},
            {text:"web",correct:false},
            {text:"none",correct:false},

        ]
    }
];

 const questionPart = document.getElementById("question");
 const answerButton = document.getElementById("answer");
 const nextButton = document.getElementById("next");


 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "Next";
     showQuestion();

 }
 function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
 }