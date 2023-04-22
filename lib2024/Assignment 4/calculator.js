/*This function is called when the "Conver to Celcius" button is clicked.*/
function validateForm(inputFahrenheit) {
  /*Check that a valid number has been entered. If not, display an error message.*/
  if (inputFahrenheit.value.length == 0 || inputFahrenheit == "") {    
    alert("Please enter a number in degrees Fahrenheit.");
  /*If a valid number has been entered, display result of temperatureConverter()*/
  } else {
    document.getElementById("outputCelcius").innerHTML = output;
  }
}

/*This function converts Fahrenheit to Celcius. It is called whenever anything is entered or changed in the input box, but it does not display the result until validateForm() is called.*/
function temperatureConverter(valNum) {
  output = (valNum-32) / 1.8;
}