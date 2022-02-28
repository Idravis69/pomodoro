let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let tm = document.getElementById('t_minutes');
let ts = document.getElementById('t_seconds');
let pm = document.getElementById('p_minutes');
let ps = document.getElementById('p_seconds');

let startTimer;
start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    }
})


reset.addEventListener('click', function () {
    tm.innerText = 25;
    ts.innerText = "00";
    pm.innerText = 5;
    ps.innerText = "00";
    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
});

stop.addEventListener('click', function () {
    stopInterval();
    startTimer = undefined;
})

function timer() {
    if (ts.innerText != 0) {
        ts.innerText--;
    } else if (tm.innerText != 0 && ts.innerText == 0) {
        ts.innerText = 59;
        tm.innerText--;
    }

    if (tm.innerText == 0 && ts.innerText == 0) {
        if (ps.innerText != 0) {
            ps.innerText--;
        } else if (pm.innerText != 0 && ps.innerText == 0) {
            ps.innerText = 59;
            pm.innerText--;
        }
    }


    if (tm.innerText == 0 && ts.innerText == 0 && pm.innerText == 0 && ps.innerText == 0) {
        tm.innerText = 25;
        ts.innerText = "00";

        pm.innerText = 5;
        ps.innerText = "00";
        document.getElementById('counter').innerText++
    }
}

function stopInterval() {
    clearInterval(startTimer)

}

let i = 0;
function change() {
    let doc = document.getElementById("background");
    let color = ["red", "blue", "orange", "green"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 2000);
