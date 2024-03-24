const questions = [
    {
    question: "What is the capital of Australia",
    answers: [
        {text:  "Sydney"   , correct: false},
        {text:  "Canberra" , correct: true},
        {text:  "Melborune", correct: false},
        {text:  "Fillanda" , correct: false}
    ]
},
{
    question: "In which continent is the Amazon Rainforest located? ",
    answers :[
        {text: "Santa-Barbara", correct: false},
        {text: "South-America", correct: true},
        {text: "Moldova"      , correct: false},
        {text: "Filipin"      , correct: false}
    ]
},
{
    question: "Name one city from Moldova",
    answers: [
        {text: "South-America", correct: false},
        {text: "Bali"         , correct: false},
        {text: "Chisinau"     , correct: true },
        {text: "Mosocw"       , correct: false}
    ]
},
{
    question:"In which ocean is the Great Barrier Reef located?In which ocean is the Great Barrier Reef located?",
    answers: [
        {text: "Pacific Ocean" , correct: true},
        {text: "Atlantic Ocean", correct: false},
        {text: "Indian Ocean"  , correct: false},
        {text: "Southern Ocean", correct: false}
    ]
},
{
    question:"One hero from the My hero Academya",
    answers: [
        {text: "Melyodas" , correct: false},
        {text: "Naruto"   , correct: false},
        {text: "Deko"     , correct: true},
        {text: "Any"      , correct: false}

    ]
},
{
    question: "In which ocean is the Great Barrier Reef located?",
    answers: [
        {text: "Indian Ocean", correct: false},
        {text: "Atlantic Ocean", correct: false},
        {text: "Pacific Ocean", correct: true},
        {text: "Southern Ocean", correct: false}
    ] 
},
{
    question: "Which desert is often referred to as the 'Roof of the World'?",
    answers: [
        {text: "Gobi Desert", correct: false},
        {text: "Sahara Desert", correct: false},
        {text: "Atacama Desert", correct: false},
        {text: "Tibetan Plateau", correct: true}
    ] 
},
{
    question: "What is the capital of Japan?",
    answers: [
        {text: "Beijing", correct: false},
        {text: "Seoul", correct: false},
        {text: "Tokyo", correct: true},
        {text: "Bangkok", correct: false}
    ] 
},
{
    question: "Which country is known as the 'Land of the Midnight Sun'?",
    answers: [
        {text: "Norway", correct: true},
        {text: "Sweden", correct: false},
        {text: "Finland", correct: false},
        {text: "Iceland", correct: false}
    ] 
},
{
    question: "Which sea is located between Europe and Africa?",
    answers: [
        {text: "Mediterranean Sea", correct: true},
        {text: "Black Sea", correct: false},
        {text: "Red Sea", correct: false},
        {text: "Adriatic Sea", correct: false}
    ] 
}



]

const questionEL    = document.getElementById("question");
const answerButtonEl = document.getElementById("answer-buttons");
const nextBtnEl      = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtnEl.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEL.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonEl.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtnEl.style.visibility = "hidden";
    while(answerButtonEl.firstChild){
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect   = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonEl.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
});
nextBtnEl.style.visibility = "visible";
}

function showScore(){
    resetState();
    questionEL.innerHTML = `Scorul tau este ${score} din ${questions.length}!`;
    nextBtnEl.innerHTML = "Play Again";
    nextBtnEl.style.visibility = "visible";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextBtnEl.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();
console.log(startQuiz());