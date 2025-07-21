// Check if name is already stored
let name = localStorage.getItem("username");

if (!name) {
  // Ask for name
  name = prompt("What is your name?");
  if (name) {
    localStorage.setItem("username", name);
  } else {
    name = "Guest";
  }
}

// Greet the user
document.getElementById("greeting").textContent = `Welcome, ${name}!`;

// Countdown and redirect
let seconds = 5;
let countdown = document.getElementById("countdown");

let timer = setInterval(() => {
  countdown.textContent = `Redirecting to youtube in ${seconds} seconds...`;
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    location.href = "https://www.youtube.com"; // you can change the URL
  }
}, 1000);
