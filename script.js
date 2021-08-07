const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
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

const questions = [
  {
    question: 'Who is the most recent Stanley Cup Champion',
    answers: [
      { text: 'Tampa Bay Lightning', correct: true },
      { text: 'Toronto Maple Leafs', correct: false },
      { text: 'Dallas Stars', correct: false},
      { text: 'Montreal Canadians', correct: false}
    ]
  },
  {
    question: 'What is the oldest NHL franchise?',
    answers: [
      { text: 'Toronto Maple Leafs', correct: false },
      { text: 'Chicago BlackHawks', correct: false },
      { text: 'New York Rangers ', correct: false },
      { text: 'Montreal Canadians ', correct: true }
    ]
  },
  {
    question: 'Who is currently the best player in the NHL?',
    answers: [
      { text: 'Auston Matthews ', correct: false },
      { text: 'Connor Mcdavid', correct: true },
      { text: 'Sidney Crosby', correct: false },
      { text: 'Patrick Kane', correct: false }
    ]
  },
  {
    question: 'Who has the most points of all time?',
    answers: [
      { text: 'Mario Lemieux', correct: false },
      { text: 'Wayne Gretzky', correct: true },
      { text: 'Jaromir Jagr', correct: false },
      { text: 'Mark Messier', correct: false }
    ]
  },
  {
    question: 'What current player has the most points all time?',
    answers: [
      { text: 'Sidney Crosby', correct: false },
      { text: 'Alexander Ovechkin', correct: false },
      { text: 'Patrick Marleau', correct: false },
      { text: 'Joe Thornton', correct: true }
    ]
  },
  {
    question: 'Who won the Vezina Trophy this past season? (2021 season; Awarded annually to the best goalie at his position)',
    answers: [
      { text: 'Martin Broduer', correct: false },
      { text: 'Dominik Hasek', correct: false },
      { text: 'Cam Talbot', correct: false },
      { text: 'Marc-Andre Fluery', correct: true }
    ]
  },
  {
    question: 'What was the highest point total achieved in a single season?',
    answers: [
      { text: '215', correct: true },
      { text: '220', correct: false },
      { text: '191', correct: false },
      { text: '200', correct: false }
    ]
  },
  {
    question: 'Who has scored the most goals in a single game (7)?',
    answers: [
      { text: 'Sidney Crosby', correct: false },
      { text: 'Auston Matthews', correct: false },
      { text: 'Joe Malone', correct: true },
      { text: 'Alexander Ovechkin', correct: false }
    ]
  },
  {
    question: 'Whats the record for most wins in a single season by a team??',
    answers: [
      { text: '54', correct: false },
      { text: '65', correct: false },
      { text: '62', correct: true },
      { text: '70', correct: false }
    ]
  },
  {
    question: 'Who has the record for most Stanley Cup rings?',
    answers: [
      { text: 'Yvan Cournoyer', correct: true },
      { text: 'Henri Richard', correct: false },
      { text: 'Dick Duff', correct: false },
      { text: 'Mark Messiern', correct: false }
    ]
  },

]