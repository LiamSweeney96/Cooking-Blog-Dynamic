
function risottoCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.risottoCounter) {
      localStorage.risottoCounter = Number(localStorage.risottoCounter) + 1;
    } else {
      localStorage.risottoCounter = 1;
    }
    document.getElementById("count").innerHTML = "I made Risotto " + localStorage.risottoCounter + " time(s)!";
  } else {
    document.getElementById("count").innerHTML = "Your browser does not support local storage";
  }
}
