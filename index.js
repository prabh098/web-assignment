function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const expression = document.getElementById("display").value;
    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
    setTimeout(() => document.getElementById("display").value = "", 1000);
  }
}
