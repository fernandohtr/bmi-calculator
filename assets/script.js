function start() {
  const buttonCalculateBMI = document.getElementById("calculate-bmi");
  buttonCalculateBMI.addEventListener("click", handleButtonClick);
}

function handleButtonClick() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");

  const height = heightInput.value;
  const weight = weightInput.value;

  const bmi = calculateBMI(weight, height);

  const result = document.getElementById("result-paragraph");
  result.innerHTML = `The result is <strong>${bmi.toFixed(2)}</strong>`;

  const classification = document.getElementById("classification-paragraph");
  classification.innerHTML = `You are <strong>${getClassifyBMI(bmi)}</strong>`;
}

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

function getClassifyBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

start();
