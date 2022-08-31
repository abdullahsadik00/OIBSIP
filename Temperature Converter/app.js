const cel = document.getElementById("celcius");
const fah = document.getElementById("fahrenheit");
const kel = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (event) {
    let value = parseFloat(event.target.value);

    switch (event.target.name) {
      case "celcius":
        fah.value = (value * 1.8) + 32;
        kel.value = value + 273.15;
        break;
      case "fahrenheit":
        cel.value = (value - 32) / 1.8;
        kel.value = ((value - 32) / 1.8) + 273.15;
        break;
      case "kelvin":
        cel.value = value - 273.15;
        fah.value = ((value - 273.15) * 1.8) + 32;
        break;
    }
  });
}