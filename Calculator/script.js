const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output.replace("%", "/100"));
      display.value = output;
    } catch (error) {
      display.value = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
    display.value = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
    display.value = output;
  } else {
    if (output === "" && (btnValue === "*" || btnValue === "/" || btnValue === "+" || btnValue === "-")) {
      return;
    }
    output += btnValue;
    display.value = output;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
