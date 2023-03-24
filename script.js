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

function showQuestion (questions){
    questionElement.innerText = questions.questions
    questions.ansewers.forEach(answer=>{
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
//var of questions about reagrding JavaScript fundamentals

const questions =[
    {
        question:'What is JavaScript?',
        answers1:'is a scripting language',
        answers2:'is one of the most popular and widely used programming language',
        answers3:'It is specific to a single page in a session',
        answers4:' is a style sheet language used for describing the presentation of a document written in a markup language',
        correct:'is a scripting language'
    },
    {
        question:'Which does not belong to the Primitive data type?',
        answers1:'Object',
        answers2:'Numbers',
        answers2:'Strings',
        answers4:'Boolean',
        correct:'Object',
    },
    {
        question:'What is not JavaScript Data Types?',
        answers1:'Primitive',
        answers2:'Trivial',
        answers3:'Null',
        answers4:'Composite',
        correct:'Null',
    },
    {
        question:'Which statement is not true?',
        answers1:'JavaScript supports automatic type conversion',
        answers2:'Functions in JavaScript are essential objects',
        answers3:'The NULL value represents the no value or no object. It can be called as empty value/object.',
        answers4:'JavaScript is not a case-sensitive language.',
        correct:'JavaScript is not a case-sensitive language.'
    },
    {
        question:'Which does not belong to the Primitive data type?',
        answers1:'Undefined',
        answers2:'Numbers',
        answers3:'Strings',
        answers4:'Boolean',
        correct: 'Undefined',
    },

];

// show next questions:
function setNext() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}