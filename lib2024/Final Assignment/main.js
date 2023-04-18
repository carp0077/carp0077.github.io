function validateForm() {
  let x = document.forms["calculator"]["ability-score"].value;
  if (x == "") {
    alert("Number must be entered.");
    return false;
  } else if (x >= 3 && x <= 18) {
  	let y = Math.floor(x - 10);
  	return y;
  } else {
  	alert("Error message");
  	return false;
  }
}