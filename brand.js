// Brand products data
const brandProducts = {
  "BIBA": [
    { name: "Red Anarkali Dress", img: "images/Red Anarkali Dress.jpg", price: "₹1999" },
    { name: "Floral Kurti", img: "images/Floral Kurti.jpg", price: "₹1499" },
    { name: "Designer Suit", img: "images/Designer Suit.jpg", price: "₹2499" }
  ],
  "W": [
    { name: "Blue Kurti", img: "images/Blue Kurti.jpg", price: "₹1299" },
    { name: "Office Wear Dress", img: "images/Office Wear Dress.jpg", price: "₹1899" },
    { name: "Frock", img: "images/Frock.jpg", price: "₹1899" }
  ],
  "Marks & Spencer": [
    { name: "Casual Dress", img: "images/Casual Dress.jpg", price: "₹2999" },
    { name: "Formal Shirt", img: "images/Formal Shirt.jpg", price: "₹1999" }
  ],
  "Vero Moda": [
    { name: "Trendy Top", img: "images/Trendy Top.jpg", price: "₹999" },
    { name: "Party Dress", img: "images/Party Dress.jpg", price: "₹1999" }
  ],
  "ONLY": [
    { name: "Denim Jacket", img: "images/Denim Jacket.jpg", price: "₹2499" },
    { name: "Printed T-Shirt", img: "images/Printed T-Shirt.jpg", price: "₹899" }
  ],
  "Levis": [
    { name: "Slim Fit Jeans", img: "images/Slim Fit Jeans.jpg", price: "₹2999" },
    { name: "Denim Jacket", img: "images/Denim.jpg", price: "₹3499" }
  ],
  "UCB": [
    { name: "Casual Shirt", img: "images/Casual Shirt.jpg", price: "₹1599" },
    { name: "Polo T-Shirt", img: "images/Polo T-Shirt.jpg", price: "₹1199" }
  ],
  "Jack & Jones": [
    { name: "Casual Jeans", img: "images/Casual Jeans.jpg", price: "₹2799" },
    { name: "Graphic T-Shirt", img: "images/Graphic T-Shirt.jpg", price: "₹899" }
  ],
  "Babyhug": [
    { name: "Kids Frock", img: "images/Kids Frock.jpg", price: "₹799" },
    { name: "Boys Shorts", img: "images/Boys Shorts.jpg", price: "₹699" }
  ],
  "H&M Kids": [
    { name: "Printed coord", img: "images/Printed coord.jpg", price: "₹899" },
    { name: "Denim Dungarees", img: "images/Denim Dungarees.jpg", price: "₹1199" }
  ],
  "Mothercare": [
    { name: "Baby Onesie", img: "images/Baby Onesie.jpg", price: "₹699" },
    { name: "Kids Pajamas", img: "images/Kids Pajamas.jpg", price: "₹999" }
  ],
  "Fossil Watches": [
    { name: "Classic Brown Watch", img: "images/Classic Brown Watch.jpg", price: "₹5999" },
    { name: "Silver Chronograph", img: "images/Silver Chronograph.jpg", price: "₹7499" }
  ],
  "Ray-Ban Sunglasses": [
    { name: "Aviator Classic", img: "images/Aviator Classic.jpg", price: "₹3999" },
    { name: "Round Metal", img: "images/Round Metal.jpg", price: "₹4499" }
  ],
  "Bags & Wallets": [
    { name: "Leather Wallet", img: "images/Leather Wallet.jpg", price: "₹1299" },
    { name: "Handbag", img: "images/Handbag.jpg", price: "₹2299" }
  ]
};

// Categories that DON'T need sizes
const noSizeBrands = ["Fossil Watches", "Ray-Ban Sunglasses", "Bags & Wallets"];

// Get brand from URL
const urlParams = new URLSearchParams(window.location.search);
const brand = urlParams.get("brand");

// Update page title
document.getElementById("brand-title").innerText = brand;

// Load products dynamically
const container = document.getElementById("brand-products");
if (brandProducts[brand]) {
  brandProducts[brand].forEach(prod => {
    let sizeOptions = "";
    let sizeId = `size-${prod.name.replace(/\s+/g, '-')}`;

    if (!noSizeBrands.includes(brand)) {
      sizeOptions = `
        <label for="${sizeId}">Size:</label>
        <select id="${sizeId}">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      `;
    }

    container.innerHTML += `
      <div class="product-card">
        <img src="${prod.img}" alt="${prod.name}">
        <div class="product-info">
          <h3>${prod.name}</h3>
          <p>${prod.price}</p>
          ${sizeOptions}
          <button onclick="addToCart('${prod.name}', '${prod.price}', '${prod.img}', '${noSizeBrands.includes(brand) ? "NA" : ""}', '${sizeId}')">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  });
} else {
  container.innerHTML = "<p>No products available for this brand.</p>";
}

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img, defaultSize, sizeId) {
  price = parseInt(price.replace("₹", "")); // convert to number

  // if brand has sizes, get value from select
  let size = defaultSize === "NA" ? "NA" : document.getElementById(sizeId).value;

  // check if product already exists in cart (same name + size)
  let existing = cart.find(item => item.name === name && item.size === size);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, img, size, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} ${size !== "NA" ? "(" + size + ")" : ""} added to cart!`);
}

