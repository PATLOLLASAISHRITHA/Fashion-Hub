// // cart.js

// // Load existing cart or start empty
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Save cart
// function saveCart() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// // Add product to cart
// function addToCart(name, price, img, size = "NA") {
//   price = parseInt(price.toString().replace("₹", "").trim());

//   // check if same product + size exists
//   let existing = cart.find(item => item.name === name && item.size === size);

//   if (existing) {
//     existing.quantity += 1;
//   } else {
//     cart.push({ name, price, img, size, quantity: 1 });
//   }

//   saveCart();
//   alert(`${name} ${size !== "NA" ? "(" + size + ")" : ""} added to cart!`);
// }

// // Render checkout page
// function renderCheckout() {
//   const container = document.getElementById("checkout-items");
//   if (!container) return;

//   if (cart.length === 0) {
//     container.innerHTML = "<p>Your cart is empty.</p>";
//     return;
//   }

//   let html = "<ul>";
//   cart.forEach(item => {
//     html += `<li>${item.name} ${item.size !== "NA" ? "(" + item.size + ")" : ""} - ₹${item.price} x ${item.quantity}</li>`;
//   });
//   const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);
//   html += `</ul><p><b>Total: ₹${total}</b></p>`;
//   container.innerHTML = html;
// }
