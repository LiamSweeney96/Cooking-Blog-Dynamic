
function carbonaraCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.carbonaraCounter) {
      localStorage.carbonaraCounter = Number(localStorage.carbonaraCounter) + 1;
    } else {
      localStorage.carbonaraCounter = 1;
    }
    document.getElementById("count").innerHTML = "I made Carbonara " + localStorage.carbonaraCounter + " time(s)!";
  } else {
    document.getElementById("count").innerHTML = "Your browser does not support local storage";
  }
}
