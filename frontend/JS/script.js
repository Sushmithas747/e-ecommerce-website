
let products = [
  {
    id: 1,
    name: "red crop top",
    category: "Crop Tops",
    image: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014753009_437Wx649H_202210041901291.jpeg",
    price: 444,
    dicount: "15% OFF",
    sizes: ["S", "M", "L"]
  },
  {
    id: 2,
    name: "Black crop top",
    category: "Crop Tops",
    image:
      "https://rukmini1.flixcart.com/image/300/300/xif0q/shopsy-top/7/u/2/m-croptop-dazeel-original-imags25uyrgtxzzg.jpeg",
    price: 444,
    dicount: "15% OFF",
  },
  {
    id: 3,
    name: "Navy blue crop top",
    category: "Crop Tops",
    image:
      "https://m.media-amazon.com/images/I/61WkjdM3daL._UY1100_.jpg",
    price: 444,
    dicount: "15% OFF",
  },
  {
    id: 4,
    name: "Mint green crop top",
    category: "Crop Tops",
    image:
      "https://i5.walmartimages.com/asr/e98f857a-a82c-43cd-8853-5cf333cfb671.e2cc10f74bb966f90e1ff67fb4ab1644.jpeg?odnHeight=264&odnWidth=264&odnBg=FFFFFF",
    price: 444,
    dicount: "15% OFF",
  },
  {
    id: 5,
    name: "Lilac crop top",
    category: "Crop Tops",
    image:
      "https://gigstore.in/cdn/shop/files/RICH039_3.jpg?v=1742817503&width=1200",
    price: 444,
    dicount: "15% OFF",
  },
  {
    id: 6,
    name: "Black crop hoodie",
    category: "Cropped Hoodies",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/1/WR/UX/BC/121749566/basic-crop-hoodie.png",
    price: 855,
    dicount: "15% OFF",
  },
  {
    id: 7,
    name: "Pink crop hoodies",
    category: "Cropped Hoodies",
    image:
      "https://m.media-amazon.com/images/I/41VU-rtGpuL._AC_UY1100_.jpg",
    price: 855,
    dicount: "15% OFF",
  },
  {
    id: 8,
    name: "Lilac crop hoodie",
    category: "Cropped Hoodies",
    image:
      "https://cdn.lookastic.com/light-violet-hoodie/cropped-pullover-hoodie-original-959397.jpg",
    price: 855,
    dicount: "15% OFF",
  },
];

console.log(products);
let ProductsList = document.getElementById("ProductsList");
console.log(ProductsList);

//! FilteredData
if (ProductsList) {
  displayProducts(products);
  let FilterButton = document.querySelectorAll(".FilterButton");
  console.log(FilterButton);
  FilterButton.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
      // console.log("Button Clicked");
      let category = e.target.dataset.category;
      console.log(category);
      if (category === "all") {
        displayProducts(products);
      } else {
        let FilteredData = products.filter((p) => {
          return p.category === category;
        });
        console.log(FilteredData);
        displayProducts(FilteredData);
      }
    });
  });
}

//! Displaying the Products on UI
function displayProducts(item) {
  ProductsList.innerHTML = item.map((p) => {
    console.log(p);
    return `
         <aside class="Products">
        <img src="${p.image}" alt="" />
        <h3>${p.name}</h3>
        <p>₹ ${p.price} /-</p>
        <button onclick="addToCart(${p.id})">Add to cart</button>
      </aside>
        `;
  });
}

//! add to cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let ProductsData = products.find((p) => {
    return p.id === id;
  });
  cart.push(ProductsData);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${ProductsData.name} added to cart`);
  console.log(cart);
  updateCartItems();
}

//! updating the cart
function updateCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTotal = document.getElementById("cartTotal");
  console.log(cartTotal);
  cartTotal.textContent = `${cart.length}`;
}
updateCartItems();


//! Cart Page Container Code
let cartItems = document.getElementById("cartItems");
console.log(cartItems);
if (cartItems) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cartItems.innerHTML = cart
    .map((item) => {
      total += item.price;
      console.log(total);
      return `<article>${item.name}   ₹ ${item.price} /-</article>`;
    })
    .join("");

  let totalBill = document.getElementById("totalBill");
  totalBill.textContent = `Total Bill : ₹${total}/-`;

  //! Clear Cart
  let clearCart = document.getElementById("clearCart");
  console.log(clearCart);
  clearCart.onclick = () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "HomePage.html";
  };

  //! Check out

  let checkout=document.getElementById('checkout');
  console.log(checkout);
  checkout.onclick=()=>{
    alert(`Thank You For Shopping ,Your Total Bill is ₹ ${total}/-  Vist Again!!!`)
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "HomePage.html";
  }
}
