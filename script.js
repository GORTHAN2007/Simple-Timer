const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.querySelector('.str_stp_buton');
const timerHeading = document.getElementById('timer_heading');

let timer;
startButton.addEventListener('click', function() {
    if(hoursInput.value==="00" && minutesInput.value==="00" && secondsInput.value==="00" ){
        return;
    };
    startButton.textContent = "STOP TIMER";
    clearInterval(timer);
    let h = parseInt(hoursInput.value) || 0;
    let m = parseInt(minutesInput.value) || 0;
    let s = parseInt(secondsInput.value) || 0;
    let totalSeconds = (h * 3600) + (m * 60) + s;

    timerHeading.textContent = "Timer is Running!";
    timer = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(timer); 
            timerHeading.textContent = "Time's Up!";
            startButton.textContent = "START TIMER"
            return;
        }
        totalSeconds = totalSeconds - 1; 
        let Hours = Math.floor(totalSeconds / 3600);
        let Minutes = Math.floor((totalSeconds % 3600) / 60);
        let Seconds = totalSeconds % 60;
        hoursInput.value = String(Hours).padStart(2, '0');
        minutesInput.value = String(Minutes).padStart(2, '0');
        secondsInput.value = String(Seconds).padStart(2, '0');
    }, 1000); 
});
