const questions = [
    {
        question: "Which of these countries speaks Portuguese?",
        answears: [
            {text: "Argentina", correct: false},
            {text: "Brazil", correct: true},
            {text: "Cuba", correct: false},
            {text: "Democratic Rep. of Congo", correct: false}

            ]
    },
    {
        question: "What does the acronym 'DOM' stand for in web development?",
        answears: [
            {text: "Document Object Model", correct: true},
            {text: "Data Object Model", correct: false},
            {text: "Display Object Model", correct: false},
            {text: " Document Oriented Markup", correct: false}

            ]
    },
    {
        question: "Which JavaScript array method adds new elements to the end of an array?",
        answears: [
            {text: "push()", correct: true},
            {text: " pop()", correct: false},
            {text: "shift()", correct: false},
            {text: "unshift()", correct: false}
            ]
    },
    {
        question: "What is the purpose of the JavaScript 'map()' method?",
        answears: [
            {text: "To remove elements from an array based on a condition", correct: false},
            {text: "To sort the elements of an array in ascending order", correct: false},
            {text: "To iterate over an array and perform a transformation on each element", correct: true},
            {text: " To check if a specific value exists in an array", correct: false}
            ]
    },
    {
        question: "What is the purpose of the JavaScript function 'setTimeout()'?",
        answears: [
            {text: "To set a recurring interval for function execution", correct: false},
            {text: "To define a callback function", correct: false},
            {text: "To handle errors and exceptions", correct: false},
            {text: "To add a delay before executing a function", correct: true}
            ]
    },
];
const questionElement = document.getElementById("question");
const answearButtons = document.getElementById("answear-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState(); 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answears.forEach(answear =>{
        const button = document.createElement("button");
        button.innerHTML = answear.text;
        button.classList.add("btn");
        answearButtons.appendChild(button);
        if(answear.correct){
            button.dataset.correct = answear.correct
        }
        button.addEventListener("click", selectAnswear);
    });
}
function resetState(){ //removes all the previous answears
    nextButton.style.display= "none";
    while(answearButtons.firstChild){
        (answearButtons.removeChild(answearButtons.firstChild))
};
}
function selectAnswear(e){ //corrects the answear
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; //count score
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answearButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){ //Makes the button avoid showing question beyond the limit
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
})

startQuiz();