console.log("Hello World!");

// setTimeout() -> a method that takes two parameters: a callback function and a delay in milliseconds
// the first parameter is a callback function that will be executed after the delay
// this task is performed only once
setTimeout(() => {
  document.body.style.backgroundColor = "peru";
  console.log("This message is shown after 3 seconds.");
}, 3000);

// setInterval() -> a method that takes two parameters: a callback function and a delay in milliseconds
// the first parameter is a callback function that will be executed after the delay
// this task is performed repeatedly after the delay --> its like a loop
// setInterval(() => {
//   console.log("This message is shown every 1 seconds.");
// }, 1000);

function repeatMyeslf(delay) {
  console.log(`I repeat myself after ${delay} seconds.`);
}

let myInterval = setInterval(repeatMyeslf, 2000, 2);

function stopInterval(interval) {
  clearInterval(interval);
}

setTimeout(() => {
  stopInterval(myInterval);
}, 5000);

// Workshop
// Create an event handler that makes visible a message that is hidden by default after 3 seconds.
// The message should be hidden again after 3 seconds.
let message = document.querySelector(".message-hidden");
message.style.display = "none";
setTimeout(() => {
  console.log("Message is shown after 3 seconds.");
  message.style.display = "block";
  setTimeout(() => {
    console.log("Message is hidden after 3 seconds.");
    message.style.display = "none";
  }, 3000);
}, 3000);

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timer = document.querySelector(".timer");
let count = 0;
let timerUpdate = setInterval;

startButton.addEventListener("click", () => {
  console.log("Start button is clicked.");
  counting();
});

stopButton.addEventListener("click", () => {
  console.log("Stop button is clicked.");
  clearInterval(timerUpdate);
});

resetButton.addEventListener("click", () => {
  console.log("Reset button is clicked.");
  clearInterval(timerUpdate);
  count = 0;
  timer.textContent = count;
});

function counting() {
  timerUpdate = setInterval(() => {
    count++;
    timer.textContent = count;
  }, 1000);
}
