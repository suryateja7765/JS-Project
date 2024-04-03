
// let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let timeRef = document.querySelector(".timer-display");
// let splitTimesContainer = document.querySelector(".split-times");
// let pausedTimeRef = document.getElementById("paused-time"); 
// let int = null;
// let splitCount = 1;

// setInterval(displayCurrentTime, 1000);

// document.getElementById("start-timer").addEventListener("click", () => {
//     if(int !== null) {
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer, 10);
//     pausedTimeRef.innerHTML = ""; 
// });

// document.getElementById("pause-timer").addEventListener("click", () => {
//     clearInterval(int);
  
//     pausedTimeRef.innerHTML = `Paused Time: ${timeRef.textContent}`;
// });

// document.getElementById("split-timer").addEventListener("click", () => {
    
//     let splitTimeEntry = document.createElement("div");
//     splitTimeEntry.textContent = `Split ${splitCount}: ${timeRef.textContent}`;
//     splitTimesContainer.appendChild(splitTimeEntry);
//     splitCount++;
// });

// document.getElementById("reset-timer").addEventListener("click", () => {
//     clearInterval(int);
//     [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//     timeRef.innerHTML = "00 : 00 : 00 : 000 ";
//     pausedTimeRef.innerHTML = "";
//     splitTimesContainer.innerHTML = ""; 
// }); 

// function displayTimer() {
//     milliseconds += 10;
//     if(milliseconds == 1000) {
//         milliseconds = 0;
//         seconds++;
//         if(seconds == 60) {
//             seconds = 0;
//             minutes++;
//             if(minutes == 60) {
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }

//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
//     let ms = 
//         milliseconds < 10
//         ? "00" + milliseconds
//         : milliseconds < 100
//         ? "0" + milliseconds
//         : milliseconds;

//     timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
// }

// function displayCurrentTime() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var timeString =
//       (hours < 10 ? "0" : "") +
//       hours +
//       ":" +
//       (minutes < 10 ? "0" : "") +
//       minutes +
//       ":" +
//       (seconds < 10 ? "0" : "") +
//       seconds;
      
//     document.getElementById("current-time").innerHTML = timeString;
// }



let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let splitTimesContainer = document.querySelector(".split-times");
let int = null;
let splitCount = 1;

setInterval(displayCurrentTime, 1000);

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("split-timer").addEventListener("click", () => {
   
    let splitTimeEntry = document.createElement("div");
    splitTimeEntry.textContent = `Split ${splitCount}: ${timeRef.textContent}`;
    splitTimesContainer.appendChild(splitTimeEntry);
    splitCount++;
});

// document.getElementById("reset-timer").addEventListener("click", () => {
//     clearInterval(int);
//     [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//     timeRef.innerHTML = "00 : 00 : 00 : 000 ";
//     splitTimesContainer.innerHTML = ""; // Clear split times on reset
// });

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
    splitTimesContainer.innerHTML = ""; 
    splitCount = 1; q1
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString =
        (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds;

    document.getElementById("current-time").innerHTML = timeString;
}
