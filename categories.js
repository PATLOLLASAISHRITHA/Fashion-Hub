// Sample product data
const products = {
  women: [
    { name: "BIBA", img: "images/biba.jpg", offer: "30-60% Off" },
    { name: "W", img: "images/w.jpg", offer: "30-60% Off" },
    { name: "Marks & Spencer", img: "images/Marks & Spencer.jpg", offer: "Up To 60% Off" },
    { name: "Vero Moda", img: "images/Vero Moda.jpg", offer: "Min. 50% Off" },
    { name: "ONLY", img: "images/ONLY.jpg", offer: "Min. 50% Off" }
  ],
  men: [
    { name: "Levis", img: "images/Levis.jpg", offer: "30-50% Off" },
    { name: "UCB", img: "images/UCB.jpg", offer: "Min. 40% Off" },
    { name: "Jack & Jones", img: "images/Jack & Jones.jpg", offer: "Up To 60% Off" }
  ],
  kids: [
    { name: "Babyhug", img: "images/Babyhug.jpg", offer: "Flat 40% Off" },
    { name: "H&M Kids", img: "images/H&M Kids.jpg", offer: "30-50% Off" },
    { name: "Mothercare", img: "images/Mothercare.jpg", offer: "Up To 35% Off" }
  ],
  accessories: [
    { name: "Fossil Watches", img: "images/Fossil Watches.jpg", offer: "30% Off" },
    { name: "Ray-Ban Sunglasses", img: "images/Ray-Ban Sunglasses.jpg", offer: "Flat 25% Off" },
    { name: "Bags & Wallets", img: "images/Bags & Wallets.jpg", offer: "Up To 40% Off" }
  ]
};

// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("cat") || "women";

// Update page title
document.getElementById("category-title").innerText = category.toUpperCase();

// Load products
const container = document.getElementById("product-grid");
products[category].forEach(prod => {
  container.innerHTML += `
    <div class="product-card">
      <a href="brand.html?brand=${encodeURIComponent(prod.name)}">
        <img src="${prod.img}" alt="${prod.name}">
        <div class="product-info">
          <h3>${prod.name}</h3>
          <p>${prod.offer}</p>
        </div>
      </a>
    </div>
  `;
});
