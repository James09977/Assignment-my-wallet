//expenses calculatiom
function calcExpense() {
  const foodExpenses = document.getElementById("food-input");
  const foodExpAmount = parseFloat(foodExpenses.value);
  const rentExpenses = document.getElementById("rent-input");
  const rentExpAmount = parseFloat(rentExpenses.value);
  const clothesExpenses = document.getElementById("cloths-input");
  const clothExpAmount = parseFloat(clothesExpenses.value);

  if (foodExpAmount > 0 && rentExpAmount > 0 && clothExpAmount > 0) {
    const totalExpenses = foodExpAmount + rentExpAmount + clothExpAmount;

    const expenseField = document.getElementById("total-expense");
    expenseField.innerText = totalExpenses;
    return totalExpenses;
  } else {
    alert("please input only positive number");
  }
}

//update Balance
function updateBalance() {
  const totalExpenses = document.getElementById("total-expense");
  const expense = parseFloat(totalExpenses.innerText);
  const incomeInput = document.getElementById("total-income");
  const totalIncome = parseFloat(incomeInput.value);

  const balanceField = document.getElementById("balance");
  if (totalIncome > 0 && expense < totalIncome) {
    const updateBalance = totalIncome - expense;
    balanceField.innerText = updateBalance;
  } else {
    document.getElementById("eror-text-expense").style.display = "block";
  }
}

// saving amount
function calcSaving() {
  const incomeInput = document.getElementById("total-income");
  const saveInput = document.getElementById("save-percent");
  const totalIncome = parseFloat(incomeInput.value);
  const savePercent = parseFloat(saveInput.value);

  const balance = document.getElementById("balance");
  const currenBalance = parseFloat(balance.innerText);

  const totalSave = (totalIncome / 100) * savePercent;
  if (totalSave < currenBalance) {
    document.getElementById("saving-amount").innerText = totalSave;
    document.getElementById("erorr-text").style.display = "none";

    return totalSave;
  } else {
    document.getElementById("erorr-text").style.display = "block";
  }
}

//update remaining Balance
function calcRemBalance(saving) {
  const currenBalance = document.getElementById("balance");
  const balance = parseFloat(currenBalance.innerText);
  const remBal = document.getElementById("remain-balance");
  remBal.innerText = balance - saving;
}

// calculate event handler
document.getElementById("calc-btn").addEventListener("click", function () {
  calcExpense();
  updateBalance();
});

//save event handler
document.getElementById("save-btn").addEventListener("click", function () {
  const savingAmount = calcSaving();
  remBal = calcRemBalance(savingAmount);
});
