const body = document.getElementById('body');
const txtMins = document.getElementById('mins');
const txtSecs = document.getElementById('secs');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');

let minutes = 0;
let seconds = 0;
let stopped = false;

const minTime = 7;
const maxTime = 8;

btnStart.onclick = timer;
btnStop.onclick = stop;
btnReset.onclick = reset;

function timer() {
    if (!stopped) {
        seconds++;

        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }

        txtMins.textContent = minutes < 10 ? "0" + minutes : minutes;
        txtSecs.textContent = seconds < 10 ? "0" + seconds : seconds;

        if (minutes === minTime) {
            body.style.backgroundColor = 'green';
            if (seconds >= 30) {
                body.style.backgroundColor = 'yellow';
            }
        } else if (minutes >= maxTime) {
            body.style.backgroundColor = 'red';
        }

        setTimeout(timer, 1000);
    } else {
        stopped = false;
    }
}

function stop() {
    stopped = true;
}

function reset() {
    stopped = false;
    minutes = 0;
    seconds = 0;
    body.style.backgroundColor = "white";
    txtMins.textContent = "00";
    txtSecs.textContent = "00";
}