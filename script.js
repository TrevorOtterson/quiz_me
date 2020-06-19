// Timer
var sec = 45
var time
function timer() {
    time = setInterval(interval, 1000)
}

function interval() {
    document.getElementById('timer').innerHTML = sec + " seconds"
    sec --
    if (sec === -1) {
        clearInterval(time)
        finishQuiz()
        alert("Submitted")
    }
    console.log(sec)
}

// Questions
// Empty variables (placeholders)
var currentQuestion = 0
var score = 0
var totalQuestions = questions.length

// Calling IDs from HTML file
var startScreen = document.querySelector(".jumbotron")
var timeContainer = document.getElementById("timerContainer") 
var container = document.getElementById("quizContainer")
var questionEl = document.getElementById("questions")
var option1 = document.getElementById("opt1")
var option2 = document.getElementById("opt2")
var option3 = document.getElementById("opt3")
var option4 = document.getElementById("opt4")
var nextButton = document.getElementById("next_button")
var results = document.getElementById("results")

// Pulls questions objects out of array in questions.js
function loadQuestions(qIndex) {
    var q = questions[qIndex]
    questionEl.textContent = (qIndex + 1) + '. ' + q.question
    option1.textContent = q.option1
    option2.textContent = q.option2
    option3.textContent = q.option3
    option4.textContent = q.option4
}

function finishQuiz() {
    sec = 0
    timeContainer.style.display = 'none'
    container.style.display = 'none'
    results.style.display = ''
    results.textContent = 'Score: ' + score + ' / ' + totalQuestions
}

// Loads next quiz question
function loadNextQuestion() {
    var selected = document.querySelector('input[type=radio]:checked')
    if (!selected) {
        alert("Must select a possible answer.")
        return
    }
    var answer = selected.value
    if (questions[currentQuestion].answer == answer) {
        score += 1
    }
    selected.checked = false
    currentQuestion++
    if (currentQuestion === totalQuestions.value) {

    }
    if (currentQuestion === totalQuestions) {
        finishQuiz()
        return
    }
    loadQuestions(currentQuestion)
}
loadQuestions(currentQuestion)

// previous button makes user go back 1 question
function loadPrevQuestion() {
    var selected = document.querySelector('input[type=radio]:checked')
    if (!selected) {
        alert("Must select a possible answer.")
        return
    }
    selected.checked = false
    currentQuestion--
    if (currentQuestion === totalQuestions.value) {

    }
    if (currentQuestion === totalQuestions) {
        finishQuiz()
        return
    }
    loadQuestions(currentQuestion)
}
loadQuestions(currentQuestion)

// Event listner for next and previous question buttons
$("#nextButton").click(loadNextQuestion)
$("#startBtn").click(timer)
$("#prevButton").click(loadPrevQuestion)