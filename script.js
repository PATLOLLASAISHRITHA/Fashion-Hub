const products = [
  { id: 1, name: "Casual T-Shirt", price: 20, category: "shirts", img: "https://via.placeholder.com/200x180?text=T-Shirt" },
  { id: 2, name: "Blue Jeans", price: 40, category: "pants", img: "https://via.placeholder.com/200x180?text=Jeans" },
  { id: 3, name: "Winter Jacket", price: 60, category: "jackets", img: "https://via.placeholder.com/200x180?text=Jacket" },
  { id: 4, name: "Running Sneakers", price: 80, category: "shoes", img: "https://via.placeholder.com/200x180?text=Sneakers" },
  { id: 5, name: "Formal Shirt", price: 35, category: "shirts", img: "https://via.placeholder.com/200x180?text=Shirt" },
  { id: 6, name: "Chinos", price: 50, category: "pants", img: "https://via.placeholder.com/200x180?text=Chinos" }
];

const productContainer = document.getElementById("products");
const cartSidebar = document.getElementById("cart-sidebar");
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const categoryButtons = document.querySelectorAll(".category-btn");

let cart = [];

// Render Products
function renderProducts(filter = "all") {
  productContainer.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  filtered.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>$${prod.price}</p>
      <button onclick="addToCart(${prod.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}
renderProducts();

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

// Update cart
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>$${item.price * item.qty}</span>
    `;
    cartItemsContainer.appendChild(div);
  });
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  cartTotal.textContent = total;
}

// Toggle cart sidebar
document.querySelector(".cart").addEventListener("click", () => {
  cartSidebar.classList.toggle("active");
});

// Category filtering
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".category-btn.active").classList.remove("active");
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    renderProducts(category);
  });
});
