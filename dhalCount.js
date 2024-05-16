
function dhalCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.dhalCounter) {
      localStorage.dhalCounter = Number(localStorage.dhalCounter) + 1;
    } else {
      localStorage.dhalCounter = 1;
    }
    document.getElementById("count").innerHTML = "I made Lentil Dhal " + localStorage.dhalCounter + " time(s)!";
  } else {
    document.getElementById("count").innerHTML = "Your browser does not support local storage";
  }
}
