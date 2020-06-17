var questions = [{
    "question": "What is the 'soul' of a website?",
    "option1": "HTML",
    "option2": "Java Script",
    "option3": "CSS",
    "option4": "Java",
    "answer": "2"
}, {
    "question": "What does CSS stand for?",
    "option1": "Cascading Style Sheets",
    "option2": "Crippling Social Status",
    "option3": "Cruncy Smelly Sheets",
    "option4": "Crown Standard Style",
    "answer": "1"
}, {
    "question": "What's the point in a CSS page?",
    "option1": "To make your website work",
    "option2": "To make the webpage text",
    "option3": "To make buttons work on website",
    "option4": "To give the website style",
    "answer": "4"
}]

var currentQuestion = 0
var score = 0
var totalQuestions = questions.length

var container = document.getElementById("quizContainer")
var container = document.getElementById("questions")
var option1 = document.getElementById("opt1")
var option2 = document.getElementById("opt2")
var option3 = document.getElementById("opt3")
var option4 = document.getElementById("opt4")
var nextButton = document.getElementById("next_button")
var results = document.getElementById("results")

function loadQuestions (qIndex) {
    var q = questions[qIndex]
    questionEl.textContent = (qIndex + 1) + '. ' + q.question
    option1.textContent = q.option1
    option2.textContent = q.option2
    option3.textContent = q.option3
    option4.textContent = q.option4
}

function loadNextQuestion () {
    var selected = document.querySelector('input[type=radio]:checked')
    if(!selected) {
        alert("Must select a possible answer.")
        return
    }
    var answer = selected.value
    if(questions[currentQuestion].answer == answer){
        score +=1
    }
    selected.checked = false
    currentQuestion++
    if(currentQuestion == totalQuestions - 1){
        nextButton.textContent = "Finished"
    }
    if(currentQuestion == totalQuestions){
        container.style.display = 'none'
        results.style.display = ''
        results.textContent = 'Score: ' + score
        return
    }
    loadQuestions(currentQuestion)
}