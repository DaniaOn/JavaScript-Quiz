var startGamebtn = document.getElementById('start-btn')
const questionContainer = document.getElementById ('question-container')

let currentQuestionIndex = 0;
let questionElement = document.getElementById('question');
let timerElement = document.querySelector(".timer-count");
const nextButton = document.getElementById('next-btn');
const answerButtonsElement = document.getElementById ('answer-button')
const answerBtn1 = document.querySelector('.btn1');
const answerBtn2 = document.querySelector('.btn2');
const answerBtn3 = document.querySelector('.btn3');
const answerBtn4 = document.querySelector('.btn4');
const answerFeedback = document.querySelector('#feedback');

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

startGamebtn.addEventListener('click', startGame);

//start button
function startGame (){
    startGamebtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    setQuestions();
}

function setQuestions (){
    showQuestion(currentQuestionIndex);
}

function showQuestion (currentQuestionIndex){
    answerBtn1.textContent = questions[currentQuestionIndex].answer1;
    answerBtn2.textContent = questions[currentQuestionIndex].answer2;
    answerBtn3.textContent = questions[currentQuestionIndex].answer3;
    answerBtn4.textContent = questions[currentQuestionIndex].answer4;
    //bnt listener that create an bnt for each answer
    answerButtonsElement.addEventListener('click', selectAnswer);
  }

function resetState(){
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    //for being able to click the bnt
    const selectedBtn = e.target
    const correct = question[currentQuestionIndex].correct;
    if (selectedBtn.textContent === correct) {
      //just for the correct answer console
      console.log('correct');
      //display the feedback on the page 
      answerFeedback.textContent = 'CORRECT!';
      //cleaning feedback
      setTimeout(() => {
        answerFeedback.textContent = '';
      }, '2000');
      nextButton.classList.remove('hide');
      currentQuestionIndex++;
      //call next question 
      showQuestion(currentQuestionIndex);
    } else {
      //Incorrect answer feedback
      answerFeedback.textContent= 'WRONG';
      setTimeout(() => {
        answerFeedback.textContent = '';
      }, '2000');
      console.log('incorrect');
      //if wrong answer call next question 
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);

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

// show next questions:
function setNext() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}