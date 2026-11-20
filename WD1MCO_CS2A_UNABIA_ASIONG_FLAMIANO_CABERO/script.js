// Merch list: edit names, descriptions and prices here. Replace "emoji" with img paths if you have product photos.
const products = [
 {name:"HUNTR/X Light Stick",desc:"Glows violet and pink at every concert.",price:25, img:"img/huntrix_lightstick.jpg"},
 {name:"Rumi Hoodie",desc:"Soft pink hoodie with Rumi's Face.",price:45, img:"img/rumi_hoodie.webp"},
 {name:"Golden Vinyl Record",desc:"A Golden vinyl of the hit anthem.",price:30, img:"img/golden_vinyl.jpg"},
 {name:"HUNTR/X Keychain",desc:"Mini Huntrix members for your bag.",price:8, img:"img/keychain.webp"},
 {name:"Zoey Photocard",desc:"10 collectible cards in a holo sleeve.",price:12, img:"img/poster_zoey.webp"},
 {name:"SajaBoys Poster",desc:"Large glossy poster for your wall.",price:15, img:"img/poster_sajaboys.webp"},
 {name:"HUNTR/X T-Shirt",desc:"Blue tee with the HUNTR/X world tour logo.",price:22, img:"img/t_shirt.webp"},
 {name:"HUNTR/X Pins",desc:"Set of 4 pink and violet star clips.",price:9, img:"img/pins.webp"},
 {name:"HUNTR/X Cup",desc:"A mystery cup where you never know what you'll get!",price:14, img:"img/cup.webp"},
 {name:"Mini Backpack",desc:"Black backpack with a blue zipper.",price:38, img:"img/mini_backpack.jpg"},
 {name:"Sticker Pack",desc:"Variety of stickers for your collection.",price:6, img:"img/sticker.webp"},
 {name:"Wireless Earbuds",desc:"White earbuds with a symbolic design.",price:49, img:"img/Wireless_Earbuds.jpg"},
];
let count = 0;
const cartEl = document.getElementById("cart");
const grid = document.getElementById("products");
if (cartEl && grid) {
  cartEl.hidden = false;
  products.forEach((p, i) => {
    grid.insertAdjacentHTML("beforeend",
      `<div class="card">
        <img src="${p.img}" alt="${p.name}" class="pimg">
        <h3 style="margin-top:12px">${p.name}</h3>
        <p>${p.desc}</p>
        <p class="price">$${p.price}</p>
        <button data-i="${i}">Add to cart</button>
        </div>`);
  });
  grid.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    count++;
    cartEl.textContent = "Cart: " + count;
    toast(products[b.dataset.i].name + " added to cart");
  });
}
function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1500);
}