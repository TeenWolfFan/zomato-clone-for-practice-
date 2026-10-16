const restaurants = [
  {
    id: "mavalli-tiffin-room",
    name: "Mavalli Tiffin Room",
    cuisine: "South Indian, Breakfast, Veg",
    price: 250,
    rating: 4.7,
    time: 24,
    tag: "LEGENDARY DOSAS",
    category: "South Indian",
    veg: true,
    image: "photo-1630383249896-424e482df921",
    dishes: [
      { id: "mtr-masala-dosa", name: "Benne Masala Dosa", description: "Golden crisp dosa, potato masala & a generous knob of butter.", price: 185, category: "South Indian", image: "photo-1630383249896-424e482df921", veg: true, popular: true },
      { id: "mtr-idli", name: "Thatte Idli & Vada", description: "Cloud-soft idli, crisp medu vada, chutney & sambar.", price: 145, category: "South Indian", image: "photo-1589301760014-d929f3979dbc", veg: true },
      { id: "mtr-filter-coffee", name: "Filter Kaapi", description: "Strong, smooth South Indian filter coffee.", price: 65, category: "Drinks", image: "photo-1461023058943-07fcbe16d735", veg: true }
    ],
    cover: "photo-1630383249896-424e482df921"
  },
  {
    id: "nagarjuna",
    name: "Nagarjuna",
    cuisine: "Andhra, Biryani, North Indian",
    price: 400,
    rating: 4.6,
    time: 29,
    tag: "SPICE, THE ANDHRA WAY",
    category: "Biryani",
    veg: false,
    image: "photo-1589302168068-964664d93dc0",
    dishes: [
      { id: "nagarjuna-chicken-biryani", name: "Andhra Chicken Biryani", description: "Fragrant basmati, tender chicken & our signature fiery masala.", price: 369, category: "Biryani", image: "photo-1589302168068-964664d93dc0", veg: false, popular: true },
      { id: "nagarjuna-meals", name: "Andhra Thali", description: "A proper feast: rice, curries, dal, rasam, pickle & more.", price: 329, category: "South Indian", image: "photo-1547592180-85f173990554", veg: false },
      { id: "nagarjuna-paneer", name: "Paneer Butter Masala", description: "Soft paneer in a buttery tomato gravy, with a gentle kick.", price: 299, category: "North Indian", image: "photo-1585937421612-70a008356fbe", veg: true }
    ],
    cover: "photo-1589302168068-964664d93dc0"
  },
  {
    id: "meghana-foods",
    name: "Meghana Foods",
    cuisine: "Biryani, Andhra, Kebabs",
    price: 350,
    rating: 4.8,
    time: 31,
    tag: "THE BIRYANI OBSESSION",
    category: "Biryani",
    veg: false,
    image: "photo-1589302168068-964664d93dc0",
    dishes: [
      { id: "meghana-special", name: "Meghana Special Chicken Biryani", description: "Our most-loved biryani, layered with juicy chicken & spice.", price: 389, category: "Biryani", image: "photo-1589302168068-964664d93dc0", veg: false, popular: true },
      { id: "meghana-paneer-biryani", name: "Paneer Biryani", description: "Dum-cooked basmati, soft paneer & aromatic house masala.", price: 319, category: "Biryani", image: "photo-1589302168068-964664d93dc0", veg: true },
      { id: "meghana-kebab", name: "Chicken 65", description: "Crispy, spicy, and dangerously easy to finish.", price: 279, category: "Starters", image: "photo-1603894584373-5ac82b2ae398", veg: false }
    ],
    cover: "photo-1589302168068-964664d93dc0"
  },
  {
    id: "smoor",
    name: "Smoor",
    cuisine: "Desserts, Bakery, Cafe",
    price: 500,
    rating: 4.5,
    time: 22,
    tag: "A LITTLE DECADENCE",
    category: "Desserts",
    veg: true,
    image: "photo-1551024506-0bccd828d307",
    dishes: [
      { id: "smoor-chocolate", name: "Chocolate Truffle Pastry", description: "Layers of dark chocolate ganache and soft, rich sponge.", price: 225, category: "Desserts", image: "photo-1578985545062-69928b1d9587", veg: true, popular: true },
      { id: "smoor-cheesecake", name: "Baked Blueberry Cheesecake", description: "Creamy baked cheesecake with a bright blueberry compote.", price: 265, category: "Desserts", image: "photo-1533134242443-d4fd215305ad", veg: true },
      { id: "smoor-brownie", name: "Walnut Fudge Brownie", description: "Warm, gooey chocolate brownie packed with toasted walnuts.", price: 185, category: "Desserts", image: "photo-1606313564200-e75d5e30476c", veg: true }
    ],
    cover: "photo-1551024506-0bccd828d307"
  },
  {
    id: "truffles",
    name: "Truffles",
    cuisine: "American, Burgers, Continental",
    price: 300,
    rating: 4.4,
    time: 27,
    tag: "THE BURGER SPOT",
    category: "Burgers",
    veg: false,
    image: "photo-1568901346375-23c9450c58cd",
    dishes: [
      { id: "truffles-burger", name: "All-American Cheese Burger", description: "Grilled patty, melty cheddar, pickles & our special sauce.", price: 329, category: "Burgers", image: "photo-1568901346375-23c9450c58cd", veg: false, popular: true },
      { id: "truffles-fries", name: "Peri Peri Fries", description: "Crispy golden fries tossed in our spicy peri peri seasoning.", price: 159, category: "Starters", image: "photo-1573080496219-bb080dd4f877", veg: true },
      { id: "truffles-pizza", name: "Classic Margherita Pizza", description: "Stone-baked, stretchy mozzarella, basil & tomato.", price: 299, category: "Pizza", image: "photo-1579751626657-72bc17010498", veg: true }
    ],
    cover: "photo-1568901346375-23c9450c58cd"
  },
  {
    id: "chulha-chowki",
    name: "Chulha Chauki Da Dhaba",
    cuisine: "North Indian, Punjabi, Kebabs",
    price: 350,
    rating: 4.3,
    time: 34,
    tag: "A PUNJABI FEAST",
    category: "North Indian",
    veg: true,
    image: "photo-1585937421612-70a008356fbe",
    dishes: [
      { id: "dhaba-dal", name: "Dal Makhani & Butter Naan", description: "Slow-cooked black lentils, cream & pillowy butter naan.", price: 285, category: "North Indian", image: "photo-1585937421612-70a008356fbe", veg: true, popular: true },
      { id: "dhaba-paneer", name: "Paneer Tikka Masala", description: "Tandoor-kissed paneer in a rich, smoky tomato gravy.", price: 329, category: "North Indian", image: "photo-1631452180519-c014fe946bc7", veg: true },
      { id: "dhaba-kulcha", name: "Amritsari Kulcha", description: "Stuffed, buttery kulcha served with chole & tangy chutney.", price: 189, category: "North Indian", image: "photo-1626132647523-66f5bf380027", veg: true }
    ],
    cover: "photo-1585937421612-70a008356fbe"
  },
  {
    id: "onesta",
    name: "Onesta",
    cuisine: "Italian, Pizza, Pasta",
    price: 300,
    rating: 4.2,
    time: 28,
    tag: "OVEN-FRESH HAPPINESS",
    category: "Pizza",
    veg: true,
    image: "photo-1579751626657-72bc17010498",
    dishes: [
      { id: "onesta-margherita", name: "Garden Margherita Pizza", description: "A garden of fresh basil, mozzarella & tangy tomato sauce.", price: 319, category: "Pizza", image: "photo-1579751626657-72bc17010498", veg: true, popular: true },
      { id: "onesta-pasta", name: "Creamy Alfredo Pasta", description: "Silky parmesan cream sauce with herbs and penne.", price: 289, category: "Pasta", image: "photo-1473093295043-cdd812d0e601", veg: true },
      { id: "onesta-garlic-bread", name: "Cheesy Garlic Bread", description: "Oven-baked bread, garlic butter, mozzarella & herbs.", price: 179, category: "Starters", image: "photo-1573140247632-f8fd74997d5c", veg: true }
    ],
    cover: "photo-1579751626657-72bc17010498"
  },
  {
    id: "wangs-kitchen",
    name: "Wang's Kitchen",
    cuisine: "Chinese, Asian, Momos",
    price: 350,
    rating: 4.1,
    time: 26,
    tag: "WOK-HEI, THE RIGHT WAY",
    category: "Chinese",
    veg: false,
    image: "photo-1563245372-f21724e3856d",
    dishes: [
      { id: "wangs-noodles", name: "Chilli Garlic Hakka Noodles", description: "Wok-tossed noodles, fresh veggies & proper chilli heat.", price: 259, category: "Chinese", image: "photo-1563245372-f21724e3856d", veg: true, popular: true },
      { id: "wangs-momos", name: "Chicken Momos", description: "Juicy steamed dumplings with our house chilli dip.", price: 229, category: "Chinese", image: "photo-1563245372-f21724e3856d", veg: false },
      { id: "wangs-rice", name: "Schezwan Fried Rice", description: "Wok-fired rice with crunchy vegetables & spicy Schezwan sauce.", price: 249, category: "Chinese", image: "photo-1512058564366-18510be2db19", veg: true }
    ],
    cover: "photo-1563245372-f21724e3856d"
  },
  {
    id: "siddique-kebabs",
    name: "Siddique Kabab Centre",
    cuisine: "Mughlai, Kebabs, Biryani",
    price: 400,
    rating: 4.6,
    time: 32,
    tag: "CHARCOAL & TRADITION",
    category: "North Indian",
    veg: false,
    image: "photo-1603894584373-5ac82b2ae398",
    dishes: [
      { id: "siddique-kebab", name: "Smoky Chicken Seekh Kebab", description: "Charcoal-grilled, hand-minced kebabs with mint chutney.", price: 299, category: "North Indian", image: "photo-1603894584373-5ac82b2ae398", veg: false, popular: true },
      { id: "siddique-biryani", name: "Hyderabadi Dum Biryani", description: "Slow dum-cooked basmati, warming spices & tender chicken.", price: 349, category: "Biryani", image: "photo-1589302168068-964664d93dc0", veg: false },
      { id: "siddique-paneer", name: "Tandoori Paneer Tikka", description: "Smoky, marinated paneer hot from the tandoor.", price: 269, category: "North Indian", image: "photo-1631452180519-c014fe946bc7", veg: true }
    ],
    cover: "photo-1603894584373-5ac82b2ae398"
  }
];

const imageUrl = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const CART_KEY = "zomato-demo-cart";
let cart = readCart();
let activeCategory = "All";
let activeFilter = "all";
let searchTerm = "";
let toastTimer;

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((item) => item && typeof item.id === "string" && Number.isFinite(item.quantity) && item.quantity > 0) : [];
  } catch (error) {
    console.error("Unable to load saved cart.", error);
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getRestaurant(id) {
  return restaurants.find((restaurant) => restaurant.id === id);
}

function getDish(dishId) {
  for (const restaurant of restaurants) {
    const dish = restaurant.dishes.find((item) => item.id === dishId);
    if (dish) return { ...dish, restaurantId: restaurant.id, restaurantName: restaurant.name };
  }
  return null;
}

function money(amount) {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

function cartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function renderRestaurants() {
  const grid = document.getElementById("restaurant-grid");
  const term = searchTerm.trim().toLowerCase();
  const filtered = restaurants.filter((restaurant) => {
    const hasCategory = activeCategory === "All" || restaurant.category === activeCategory || restaurant.dishes.some((dish) => dish.category === activeCategory);
    const hasFilter = activeFilter === "all" ||
      (activeFilter === "rating" && restaurant.rating >= 4.5) ||
      (activeFilter === "delivery" && restaurant.time <= 30) ||
      (activeFilter === "veg" && restaurant.veg);
    const hasSearch = !term || [restaurant.name, restaurant.cuisine, ...restaurant.dishes.map((dish) => dish.name)].join(" ").toLowerCase().includes(term);
    return hasCategory && hasFilter && hasSearch;
  });
  const sort = document.getElementById("sort-select").value;
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sort === "delivery") filtered.sort((a, b) => a.time - b.time);
  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  grid.innerHTML = filtered.map((restaurant) => `
    <article class="restaurant-card" data-restaurant="${restaurant.id}" tabindex="0" aria-label="View ${restaurant.name} menu">
      <div class="restaurant-photo-wrap">
        <img class="restaurant-photo" src="${imageUrl(restaurant.cover, 700)}" alt="${restaurant.name} food" loading="lazy" />
        <span class="photo-label">${restaurant.tag}</span>
        <button class="photo-save" data-save="${restaurant.id}" aria-label="Save ${restaurant.name}" aria-pressed="false">♡</button>
      </div>
      <div class="restaurant-info">
        <div class="restaurant-name-row"><h3>${restaurant.name}</h3><span class="rating-badge">★ ${restaurant.rating}</span></div>
        <div class="restaurant-cuisine-row"><span>${restaurant.cuisine}</span><span class="price-label">${money(restaurant.price)} for two</span></div>
        <div class="restaurant-meta-row"><span>${restaurant.veg ? "♧ Pure veg options" : "Popular in your area"}</span><span class="delivery-time">${restaurant.time} min</span></div>
      </div>
    </article>`).join("");
  document.getElementById("empty-results").hidden = filtered.length > 0;
}

function renderRestaurantMenu(restaurantId) {
  const restaurant = getRestaurant(restaurantId);
  if (!restaurant) return;
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  overlay.id = "menu-overlay";
  overlay.innerHTML = `
    <section class="menu-sheet" role="dialog" aria-modal="true" aria-label="${restaurant.name} menu">
      <button class="menu-close" aria-label="Close menu">×</button>
      <div class="menu-banner"><img src="${imageUrl(restaurant.cover, 900)}" alt="${restaurant.name} dishes" /><div class="menu-banner-copy"><span class="photo-label">${restaurant.tag}</span><h2>${restaurant.name}</h2><p>${restaurant.cuisine} · ★ ${restaurant.rating} · ${restaurant.time} min</p></div></div>
      <div class="menu-content"><p class="eyebrow section-eyebrow">MADE FRESH, JUST FOR YOU</p><h3>Our little menu</h3>
      ${restaurant.dishes.map((dish) => `
        <article class="dish-row">
          <div class="dish-copy"><span class="veg-mark ${dish.veg ? "veg" : "nonveg"}"></span><h4>${dish.name}${dish.popular ? '<span class="popular-tag">BESTSELLER</span>' : ""}</h4><strong>${money(dish.price)}</strong><p>${dish.description}</p></div>
          <div class="dish-photo"><img src="${imageUrl(dish.image, 260)}" alt="${dish.name}" loading="lazy" /><button class="add-dish" data-add="${dish.id}">ADD <span>＋</span></button></div>
        </article>`).join("")}</div>
    </section>`;
  document.body.appendChild(overlay);
  document.body.classList.add("modal-open");
}

function updateCartCount() {
  document.querySelectorAll(".cart-count").forEach((element) => element.textContent = cartQuantity());
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function addDish(dishId) {
  const dish = getDish(dishId);
  if (!dish) return;
  if (cart.length && cart.some((item) => getDish(item.id)?.restaurantId !== dish.restaurantId)) {
    const previousRestaurant = getDish(cart[0].id)?.restaurantName || "another restaurant";
    if (!window.confirm(`Your cart has items from ${previousRestaurant}. Clear it and add food from ${dish.restaurantName}?`)) return;
    cart = [];
  }
  const existing = cart.find((item) => item.id === dishId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: dishId, quantity: 1 });
  saveCart();
  updateCartCount();
  showToast(`${dish.name} added to your bag`);
  const addButton = document.querySelector(`[data-add="${dishId}"]`);
  if (addButton) {
    addButton.innerHTML = "ADDED ✓";
    setTimeout(() => { if (addButton.isConnected) addButton.innerHTML = "ADD <span>＋</span>"; }, 1000);
  }
}

function updateQuantity(dishId, delta) {
  const item = cart.find((entry) => entry.id === dishId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== dishId);
  saveCart();
  updateCartCount();
  if (!cart.length) {
    closeCheckout();
    showToast("Your bag is empty — find something delicious.");
    return;
  }
  renderCheckout();
}

function showCheckout() {
  if (!cart.length) {
    showToast("Your bag is empty — add a dish to get started.");
    return;
  }
  document.getElementById("home-view").hidden = true;
  document.getElementById("site-footer").hidden = true;
  document.getElementById("checkout-view").hidden = false;
  document.getElementById("menu-overlay")?.remove();
  document.body.classList.remove("modal-open");
  renderCheckout();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeCheckout() {
  document.getElementById("checkout-view").hidden = true;
  document.getElementById("home-view").hidden = false;
  document.getElementById("site-footer").hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCheckout() {
  const validItems = cart.map((item) => ({ ...item, dish: getDish(item.id) })).filter((item) => item.dish);
  cart = validItems.map(({ id, quantity }) => ({ id, quantity }));
  if (!cart.length) {
    saveCart();
    closeCheckout();
    return;
  }
  const itemsTotal = validItems.reduce((total, item) => total + item.dish.price * item.quantity, 0);
  const delivery = itemsTotal >= 499 ? 0 : 35;
  const platform = 5;
  const discount = Math.min(50, Math.floor(itemsTotal * 0.1));
  document.getElementById("checkout-items").innerHTML = validItems.map(({ dish, quantity }) => `
    <div class="checkout-item">
      <div><span class="checkout-item-name">${dish.name}</span><span class="checkout-item-restaurant">${dish.restaurantName}</span>
        <span class="checkout-quantity"><button aria-label="Decrease ${dish.name}" data-quantity="${dish.id}" data-delta="-1">−</button>${quantity}<button aria-label="Increase ${dish.name}" data-quantity="${dish.id}" data-delta="1">+</button></span>
      </div><span class="checkout-item-price">${money(dish.price * quantity)}</span>
    </div>`).join("");
  document.getElementById("item-total").textContent = money(itemsTotal);
  document.getElementById("delivery-fee").textContent = delivery === 0 ? "FREE" : money(delivery);
  document.getElementById("platform-fee").textContent = money(platform);
  document.getElementById("discount-amount").textContent = `− ${money(discount)}`;
  document.getElementById("grand-total").textContent = money(itemsTotal + delivery + platform - discount);
}

function placeOrder() {
  const name = document.getElementById("customer-name");
  const phone = document.getElementById("customer-phone");
  const address = document.getElementById("customer-address");
  if (!name.value.trim() || !phone.value.trim() || !address.value.trim()) {
    const missing = !name.value.trim() ? name : !phone.value.trim() ? phone : address;
    missing.focus();
    missing.reportValidity?.();
    showToast("Please add your name, phone number and delivery address.");
    return;
  }
  const digits = phone.value.replace(/\D/g, "");
  if (digits.length !== 10) {
    phone.focus();
    showToast("Enter a valid 10-digit Indian mobile number.");
    return;
  }
  const email = document.getElementById("customer-email");
  if (email.value && !email.checkValidity()) {
    email.focus();
    showToast("Please check your email address.");
    return;
  }
  const orderId = `ZM${Math.floor(100000 + Math.random() * 900000)}`;
  const restaurantName = getDish(cart[0]?.id)?.restaurantName || "your restaurant";
  document.getElementById("order-number").textContent = orderId;
  document.getElementById("success-message").textContent = `Thanks, ${name.value.trim().split(/\s+/)[0]}! ${restaurantName} is getting your order ready.`;
  document.getElementById("success-overlay").hidden = false;
  cart = [];
  saveCart();
  updateCartCount();
}

document.getElementById("category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-card").forEach((item) => item.classList.toggle("active", item === button));
  renderRestaurants();
  document.getElementById("restaurants").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => {
  document.getElementById("category-list").scrollBy({ left: Number(button.dataset.scroll) * 250, behavior: "smooth" });
}));
document.getElementById("search-input").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderRestaurants();
});
document.getElementById("sort-select").addEventListener("change", renderRestaurants);
document.querySelector(".filter-row").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  renderRestaurants();
});
document.getElementById("clear-filters").addEventListener("click", () => {
  activeCategory = "All";
  activeFilter = "all";
  searchTerm = "";
  document.getElementById("search-input").value = "";
  document.querySelectorAll(".category-card").forEach((button) => button.classList.toggle("active", button.dataset.category === "All"));
  document.querySelectorAll(".filter-chip").forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  renderRestaurants();
});
document.getElementById("restaurant-grid").addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    event.stopPropagation();
    const saved = saveButton.classList.toggle("saved");
    saveButton.textContent = saved ? "♥" : "♡";
    saveButton.setAttribute("aria-pressed", String(saved));
    showToast(saved ? "Saved to your favourites" : "Removed from your favourites");
    return;
  }
  const card = event.target.closest("[data-restaurant]");
  if (card) renderRestaurantMenu(card.dataset.restaurant);
});
document.getElementById("restaurant-grid").addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-restaurant]")) {
    event.preventDefault();
    renderRestaurantMenu(event.target.dataset.restaurant);
  }
});
document.addEventListener("click", (event) => {
  if (event.target.closest(".menu-close")) {
    document.getElementById("menu-overlay")?.remove();
    document.body.classList.remove("modal-open");
  }
  const addButton = event.target.closest("[data-add]");
  if (addButton) addDish(addButton.dataset.add);
  if (event.target.id === "menu-overlay") {
    event.target.remove();
    document.body.classList.remove("modal-open");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.getElementById("menu-overlay")?.remove();
    document.body.classList.remove("modal-open");
    document.getElementById("success-overlay").hidden = true;
  }
});
document.getElementById("mobile-cart").addEventListener("click", showCheckout);
document.getElementById("back-to-menu").addEventListener("click", closeCheckout);
document.getElementById("edit-order").addEventListener("click", closeCheckout);
document.getElementById("checkout-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (button) updateQuantity(button.dataset.quantity, Number(button.dataset.delta));
});
document.querySelectorAll(".payment-option input").forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelectorAll(".payment-option").forEach((option) => option.classList.toggle("selected", option.contains(input) && input.checked));
  });
});
document.querySelectorAll(".address-tag").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".address-tag").forEach((tag) => tag.classList.toggle("active", tag === button));
}));
document.getElementById("place-order").addEventListener("click", placeOrder);
document.getElementById("success-close").addEventListener("click", () => { document.getElementById("success-overlay").hidden = true; closeCheckout(); });
document.getElementById("continue-browsing").addEventListener("click", () => {
  document.getElementById("success-overlay").hidden = true;
  closeCheckout();
});
document.querySelectorAll("[data-home]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  closeCheckout();
  window.scrollTo({ top: 0, behavior: "smooth" });
}));
document.getElementById("login-button").addEventListener("click", () => showToast("Sign-in is coming soon. Explore the menu for now!"));
document.getElementById("signup-button").addEventListener("click", () => showToast("Account creation is coming soon. Enjoy exploring!"));
document.getElementById("club-button").addEventListener("click", () => showToast("The Good Food Club is coming soon. Stay hungry!"));
updateCartCount();
renderRestaurants();
