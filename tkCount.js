

function tomkhaCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.tomkhaCounter) {
      localStorage.tomkhaCounter = Number(localStorage.tomkhaCounter) + 1;
    } else {
      localStorage.tomkhaCounter = 1;
    }
    document.getElementById("count").innerHTML = "I made Tom Kha " + localStorage.tomkhaCounter + " time(s)!";
  } else {
    document.getElementById("count").innerHTML = "Your browser does not support local storage";
  }
}
