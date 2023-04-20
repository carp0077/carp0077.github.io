function temperatureConverter(valNum) {
  output = (valNum-32) / 1.8;
}

function validateForm(output, inputFahrenheit) {
  if (inputFahrenheit.value.length == 0) {
    alert("Please enter a number in degrees Fahrenheit.");
    return false;
  } else {
    document.getElementById("outputCelcius").innerHTML = output;
  }
}