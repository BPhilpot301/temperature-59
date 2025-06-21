function convertTemperature() {
  // Prompt user for temperature in Celsius
  let temperature = prompt("Enter temperature in Celsius:");

  // Convert the input to a number
  temperature = parseFloat(temperature);

  // Check if it's a valid number
  if (isNaN(temperature)) {
    alert("Please enter a valid number.");
    return;
  }

  // Convert Celsius to Fahrenheit
  let fahrenheit = (temperature * 9 / 5) + 32;

  // Display result in the HTML
  document.getElementById("result").innerText = 
    `The conversion of Celsius ${temperature}° to Fahrenheit is ${fahrenheit.toFixed(2)}°`;
}