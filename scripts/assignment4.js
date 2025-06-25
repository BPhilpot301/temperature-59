 function convertTemperature() {
            let startValue = parseInt(document.getElementById('startValue').value);
            let endValue = parseInt(document.getElementById('endValue').value);
            let scale = document.getElementById('scale').value;
            let outputDiv = document.getElementById('output');

            let result = "";

            for (let temp = startValue; temp <= endValue; temp++) {
                if (scale === "C") {
                    let fahrenheit = (temp * 9 / 5) + 32;
                    result += `${temp}°C = ${fahrenheit.toFixed(2)}°F<br>`;
                } else {
                    let celsius = (temp - 32) * 5 / 9;
                    result += `${temp}°F = ${celsius.toFixed(2)}°C<br>`;
                }
            }
                    outputDiv.innerHTML = result;
        }