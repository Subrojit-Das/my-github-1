let count = 0;

const buttons = document.querySelectorAll(".add-cart");
const cart = document.getElementById("cart-count");

buttons.forEach(button => {

button.addEventListener("click", () => {

count++;

cart.innerText = count;

button.innerText = "Added ✓";

button.style.background = "green";

setTimeout(() => {

button.innerText = "Add to Cart";

button.style.background = "#222";

},1000);

});

});