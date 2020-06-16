var statusSpan = document.querySelector("#status");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

var totalSeconds = 0
var secondsElapsed = 0
var status = "started"
var interval

getTimePreferences()

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

