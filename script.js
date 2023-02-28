//start the game

// document.getElementById('bnt1').addEventListener("click", changeColor);
// function changeCorlor(){
//     document.getElementById('bnt1').innerHTML = "CLICK";
//     document.getElementById('bnt1').style.backgroundColor ="orange";
// }


var startGamebtn = document.getElementById('start-btn')
const questionContainer = document.getElementById ('question-container')
let shuffledQuestions, currentQuestionIndex
const JSquestions = document.getElementById('questions-container')
var timerElement = document.querySelector(".timer-count");
const nextButton = document.getElementById('next-btn')
const answerButtonsElement = document.getElementById ('answer-button')



startGamebtn.addEventListener('click', startGame)


//start button
function startGame (){
    startGamebtn.classList.add('hide')
    JSquestions.classList.remove('hide')
    questionContainer.classList.remove('hide')
    setQuestions()
}

function setQuestions (){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question){
    questionElement.innerText = question.question
    question.ansewers.forEach(answer=>{
        const button = createElement('button')
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener ('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }) 
}
function resetState(){
    nextButton.classList.add('hide') 
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
//var of questions I'm going to ask reagrding JavaScript fundamentals

const questions =[
    {question:'What is JavaScript?',
    answers:[
        {text:'is a scripting language', correct:true},
        {text:'is one of the most popular and widely used programming language', correct:false},
        {text:'It is specific to a single page in a session', correct:false},
        {text:' is a style sheet language used for describing the presentation of a document written in a markup language', correct:false},
    ]};
    {question:'Which does not belong to the Primitive data type?',
    answers: [
        {text:'Object', correct:true},
        {text:'Numbers', correct:false},
        {text:'Strings', correct:false},
        {text:'Boolean', correct:false},
    ]};
    {question:'What is not JavaScript Data Types?',
    answers:[
        {text:'Primitive', correct:false},
        {text:'Trivial', correct:false},
        {text:'Null', correct:true},
        {text:'Composite', correct:false},
    ]};
    {question:'Which statement is not true?',
    answers: [
        {text:'JavaScript supports automatic type conversion', correct:false},
        {text:'Functions in JavaScript are essential objects', correct:false},
        {text:'The NULL value represents the no value or no object. It can be called as empty value/object.', correct:false},
        {text:'JavaScript is not a case-sensitive language.', correct:true},
    ]};
    {question:'Which does not belong to the Primitive data type?',
    answers:[
        {text:'Undefined', correct:true},
        {text:'Numbers', correct:false},
        {text:'Strings', correct:false},
        {text:'Boolean', correct:false},
    ]};
];

// show next questions:
function setNext() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}