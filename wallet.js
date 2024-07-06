//input expenses
function input() {
  const foodInput = document.getElementById("food-input");
  const foodCost = parseFloat(foodInput.value);

  const rentInput = document.getElementById("rent-input");
  const rentCost = parseFloat(rentInput.value);

  const clotheInput = document.getElementById("cloths-input");
  const clothCost = parseFloat(clotheInput.value);

  //field clear
  foodInput.value = "";
  rentInput.value = "";
  clotheInput.value = "";

  return foodCost + rentCost + clothCost;
}
//balance

function balance(inputAmount) {
  const incomeInput = document.getElementById("total-income");
  const totalIncome = parseFloat(incomeInput.value);
  const balance = document.getElementById("balance");
  balance.innerText = totalIncome - inputAmount;

  //clear
  incomeInput.value = "";
}
//total Expenses
function totalExpense(inputAmount) {
  const totalExpense = document.getElementById("total-expense");
  totalExpense.innerText = inputAmount;
}

//calculate button event handler
document.getElementById("calc-btn").addEventListener("click", function () {
  const inputAmount = input();
  totalExpense(inputAmount);
  balance(inputAmount);
});

//save btn event handlar
document.getElementById("save-btn").addEventListener("click", function () {
  const balance = document.getElementById("balance");
  const balanceValue = parseFloat(balance.innerText);
  const savePercent = document.getElementById("save-percent");
  const savePercentNumber = parseFloat(savePercent.value);
  const savingAmount = document.getElementById("saving-amount");
  const savingAmountValue = (balanceValue / 100) * savePercentNumber;
  savingAmount.innerText = savingAmountValue;

  //remaining Balance
  const remainingBalance = document.getElementById("remain-balance");
  remainingBalance.innerText = balanceValue - savingAmountValue;

  //clear
  savePercent.value = "";
});
