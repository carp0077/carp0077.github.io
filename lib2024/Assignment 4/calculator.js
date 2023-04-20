/*function validateForm() {
  let x = document.forms["calculator"]["fahrenheit"].value;
  if (x == "") {
    alert("Please enter a number in degrees Fahrenheit.");
    return false;
  } else {
    return fToC();
  }
}
*/

function temperatureConverter(valNum) {
  output = (valNum-32) / 1.8;
}

function temperatureDisplay(valNum) {
  valNum = output;
  document.getElementById("outputCelcius").innerHTML = output;
}