function convertTemperature() {
  const temp = parseFloat(document.getElementById("temp").value);
  const scale = document.getElementById("scale").value;
  const result = document.getElementById("result");

  let convertedTemp;

  if (scale === "C") {
    convertedTemp = (temp * 9/5) + 32;
    result.innerText = `${temp}°C = ${convertedTemp.toFixed(2)}°F`;
  } else if (scale === "F") {
    convertedTemp = (temp - 32) * 5/9;
    result.innerText = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
  } else {
    result.innerText = "Invalid scale";
    return;
  }


  if (convertedTemp > 85) {
    result.style.color = "red";
  } else if (convertedTemp < 40) {
    result.style.color = "blue";
  } else {
    result.style.color = "green";
  }
}
