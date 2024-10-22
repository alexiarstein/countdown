// Countdown Timer - Web Interface
// Fun stupid little code to calculate how much time is left until we can finish something (leave work, finish a task, etc)
// Author: Alexia steinberg <alexia@goldendoglinux.org>
// Calculates the time and movement of the car towards the goal
// License: GNU GPL 3.0 (See LICENSE For more information)
const endTimeInput = document.getElementById('endTime');
const startButton = document.getElementById('startButton');
const timerElement = document.querySelector('.timer');
const carElement = document.querySelector('.car');

let endTime = null;
let intervalId = null;

startButton.addEventListener('click', () => {
    endTime = new Date();
    endTime.setHours(endTimeInput.value.split(':')[0]);
    endTime.setMinutes(endTimeInput.value.split(':')[1]);
    endTime.setSeconds(0);
    endTime.setMilliseconds(0);

    intervalId = setInterval(updateTimer, 1000);
});

function updateTimer() {
    const currentTime = new Date();
    const diff = endTime - currentTime;

    if (diff <= 0) {
        clearInterval(intervalId);
        timerElement.textContent = 'Llegada!';
        carElement.style.left = 'calc(100% - 150px)';
    } else {
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        // You may want to replace "horas" "Minutos" and "Segundos" for Hours Minutes and Seconds if you are not a Spanish Speaker :V
        timerElement.textContent = `${hours} Horas ${minutes} Minutos ${seconds} Segundos`;

        const totalTime = endTime - new Date().setHours(0, 0, 0, 0);
        const elapsedTime = new Date() - new Date().setHours(0, 0, 0, 0);
        const progress = elapsedTime / totalTime;
        carElement.style.left = `calc(${progress * 100}% - 200px)`;
    }
}

