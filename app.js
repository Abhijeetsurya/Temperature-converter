const celciusInput = document.getElementById("cel");
const fahrenheitInput = document.getElementById("fah");
const kelvinInput = document.getElementById("kel");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.id) {
      case "cel":
        fahrenheitInput.value = (value * 1.8) + 32;
        kelvinInput.value = value + 273.15;
        break;
      case "fah":
        celciusInput.value = (value - 32) / 1.8;
        kelvinInput.value = ((value - 32) / 1.8) + 273.15;
        break;
      case "kel":
        celciusInput.value = value - 273.15;
        fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
        break;
    }
  });
}
