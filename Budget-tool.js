const form = document.getElementById("budgetForm");
const message = document.getElementById("message");


form.addEventListener("submit", function(e) {
    e.preventDefault(); 

let budget = parseFloat(document.getElementById("budget").value);
let itemPrice = parseFloat(document.getElementById("itemPrice").value);
let savings = parseFloat(document.getElementById("savings").value);

let totalBudget = budget + savings;


    if (isNaN(budget) || isNaN(itemPrice) || isNaN(savings)) {
        message.textContent = "Please fill in all fields correctly.";
        message.style.color = "red";
        return;
    }
    if (budget < 0 || itemPrice < 0 || savings < 0) {
        message.textContent = "Please enter positive values only.";
        message.style.color = "red";
        return;
    }


    if (itemPrice === 0) {
        message.textContent = "This item is free! You can afford it without spending any money."; 
        message.style.color = "green";
    } else if (itemPrice === totalBudget) {
        message.textContent = "You can afford this item! You have exactly enough money to buy it."; 
        message.style.color = "green"; 
    } else if (itemPrice > totalBudget) {
        message.textContent = "You cannot afford this item. You need $" + (itemPrice - totalBudget) + " more.";
        message.style.color = "red";
    } else if (itemPrice < totalBudget) {
        message.textContent = "You can afford this item! You will have $" + (totalBudget - itemPrice) + " left after purchase."; 
        message.style.color = "green"; 
    } else {
        message.textContent = "Please fill in all the fields correctly.";
        message.style.color = "red";} 
    

});