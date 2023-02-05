//start the game

// document.getElementById('bnt1').addEventListener("click", changeColor);
// function changeCorlor(){
//     document.getElementById('bnt1').innerHTML = "CLICK";
//     document.getElementById('bnt1').style.backgroundColor ="orange";
// }


const startGamebtn = document.getElementById('start-btn')
const startGamebtn = document.getElementById('start-btn')
const JSquestions = document.getElementById('questions-container')

startGamebtn.addEventListener('click', startGame)

function startGame (){
    console.log('Start')
    startGamebtn.classList.add('hide')
    JSquestions.classList.remove('hide')
    setQuestions()
}

function setQuestions (){
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


function selectAnswer (){
  
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
    answers:[
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
]

// show next questions:
function setNext
//var for the scores


// Start button 

//the for loop for question and answer

//Display Score 