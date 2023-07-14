function calculateTemp() {
var temp = document.getElementById("temp").value;
var temp_diff = document.getElementById("temp_diff").value;
var resultContainer = document.getElementById("resultContainer");
var resultCelsius, resultFahrenheit, resultKelvin;

  // Validate input as a number
if (isNaN(temp)) {
    resultContainer.innerHTML = "Please enter a valid temperature.";
    return;
}

temp = parseFloat(temp); // Convert input to a number

if (temp_diff === "cel") {
      // Celsius to Fahrenheit and Kelvin
      resultFahrenheit = (temp * 9/5) + 32;
    resultKelvin = parseFloat(temp) + 273.15;
    resultContainer.innerHTML = temp + "°Celsius = " + resultFahrenheit + "°Fahrenheit = " + resultKelvin + " Kelvin.";
} 
else if (temp_diff === "fah") {
      // Fahrenheit to Celsius and Kelvin
      resultCelsius = (temp - 32) * 5/9;
      resultKelvin = (temp - 32) * 5/9 + 273.15;
    resultContainer.innerHTML = temp + "°Fahrenheit = " + resultCelsius + "°Celsius = " + resultKelvin + " Kelvin.";
}
else if (temp_diff === "kel") {
      // Kelvin to Celsius and Fahrenheit
    resultCelsius = temp - 273.15;
      resultFahrenheit = (temp - 273.15) * 9/5 + 32;
    resultContainer.innerHTML = temp + " Kelvin = " + resultCelsius + "°Celsius = " + resultFahrenheit + "°Fahrenheit.";
}
}


