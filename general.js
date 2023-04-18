
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timmer;
timmer=false;
function start() {
    timmer =true
    stopwatch();
}

function stop() {
    timmer = false
}

function reset() {
    timmer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("msec").innerHTML = "00"
    document.getElementById("se").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("hr").innerHTML = "00"
}
function stopwatch() {
    if (timmer == true) {
        count = count + 1
        if (count == 100) {
            sec = sec + 1
            count = 0
        } if (sec == 60) {
            min = min + 1
            count = 0
            sec = 0
        }
        if(min==60){
            hr=hr+1;
            min=0;
            count=0
            sec=0
        }


        document.getElementById("msec").innerHTML = count
        document.getElementById("se").innerHTML = sec
        document.getElementById("min").innerHTML = min
        document.getElementById("hr").innerHTML = hr

        setTimeout("stopwatch()", 10)
    }
}