function temperatureConverter(valNum) {
  output = (valNum-32) / 1.8;
}

function validateForm(output, inputFahrenheit) {
  if (inputFahrenheit.value.length == 0 || inputFahrenheit == "") {
    document.getElementById("outputCelcius").innerHTML = "Please enter a number.";
  } else {
    document.getElementById("outputCelcius").innerHTML = output;
  }
}