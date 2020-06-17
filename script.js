// variables
var statusSpan = document.querySelector("#status");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

var totalSeconds = 0
var secondsElapsed = 0
var status = "started"
var interval

// Format minutes into timer
function getFormattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed
    var minutesLeft = Math.floor(secondsLeft / 60)
    var formattedMinutes

    if (minutesLeft < 10) {
        formattedMinutes = "0" + minutesLeft
    } else {
        formattedMinutes = minutesLeft
    }
    return formattedMinutes
}

// Format seconds into timer
function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60
    var formattedSeconds

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft
    } else {
        formattedSeconds = secondsLeft
    }
    return formattedSeconds
}

// Empty variables (placeholders)
var currentQuestion = 0
var score = 0
var totalQuestions = questions.length

// Calling IDs from HTML file
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
    if (currentQuestion == totalQuestions.value) {
        nextButton.textContent = 'Finish Quiz'

    }
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none'
        results.style.display = ''
        results.textContent = 'Score: ' + score + ' / ' + totalQuestions
        return
    }
    loadQuestions(currentQuestion)
}
loadQuestions(currentQuestion)

// Event listner for next and previous question buttons
$("#nextButton").click(loadNextQuestion)
//$("#prevButton").click(loadPrevQuestion)