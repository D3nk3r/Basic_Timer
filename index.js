document.addEventListener("DOMContentLoaded", function() {
    let setButton = document.querySelector(".set-btn");
    let timerText = document.querySelector(".time");
    let timerInput = document.querySelector(".time-input");
    let timerRunning = false;
    let startTimer;
    let beepAudio = new Audio("beep-warning-6387.mp3")

    function CountDown() {
        timerText.innerHTML -= 1;
        if (timerText.innerHTML == 0) {
            timerRunning = false;
            beepAudio.play();
            clearInterval(startTimer);
        }
    }


    function StartTimer() {
        if (!timerRunning) {
            timerText.innerHTML = timerInput.value;
            timerRunning = true;
            startTimer = setInterval(CountDown, 1000);
        } else {
            alert("Timer is already running!");
        }
    }

    setButton.addEventListener("click", StartTimer);
    
});
