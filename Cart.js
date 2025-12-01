let CartItems = JSON.parse(localStorage.getItem("cart")) || [];
let qty = JSON.parse(localStorage.getItem("qty")) || [];

if (qty.length !== CartItems.length) {
    qty = CartItems.map(() => 1); // default qty = 1 if not saved
}


function saveCart() {
    localStorage.setItem("cart", JSON.stringify(CartItems));
    localStorage.setItem("qty", JSON.stringify(qty));
}


document.querySelector(".cart-items").innerHTML = CartItems.map((e, index) => `
    <div class="items">
        <img src="${e.image}">
        <h4>${e.title}</h4>

        <button onclick="decrease(${index})">-</button>

        <span id="count-${index}">1</span>

        <button onclick="increase(${index})">+</button>

        <div id="total-${index}">
            ${1} X ${e.price} = ${e.price}
        </div>
    </div>
`).join("");


function increase(i) {
    qty[i]++;
    document.getElementById(`count-${i}`).innerText = qty[i];
    document.getElementById(`total-${i}`).innerText =
        `${qty[i]} X ${CartItems[i].price} = ${qty[i] * CartItems[i].price}`;
    saveCart();
    updateSummary();
}

function decrease(i) {
    if (qty[i] > 1) {
        qty[i]--;
    } else {
        CartItems.splice(i, 1);
        qty.splice(i, 1);
    }
    saveCart();
    displayCart();
    updateSummary();
}


function displayCart() {
    let cartDiv = document.querySelector(".cart-items");
    cartDiv.innerHTML = "";

    CartItems.forEach((item, index) => {
        cartDiv.innerHTML += `
            <div class="items">
                <div><img src="${item.image}"></div>
                <div>
                    <h5>${item.title}</h5>
                    <p>${item.description.slice(0, 90)}...</p>
                </div>
                <div>
                    <button onclick="decrease(${index})">-</button>
                    <span id="count-${index}">${qty[index]}</span>
                    <button onclick="increase(${index})">+</button>
                    <p id="total-${index}">${qty[index]} X ${item.price} = <b>${qty[index] * item.price}</b></p>
                </div>
            </div>
        `;
    });

    if (CartItems.length === 0) {
    cartDiv.innerHTML = `
        <div style="text-align:center;">
        <p>Your cart is empty</p>
        <a href="index.html" style="color: white;background-color:black;border-radius:5px; text-decoration: none;border:1px solid black;padding:5px;margin-top:10px;">
            Continue Shopping
        </a>
        </div>
    `;
}
    updateSummary();
}


function updateSummary() {
    let totalItems = qty.reduce((a, b) => a + b, 0);
    let productTotal = CartItems.reduce((sum, item, index) =>
        sum + item.price * qty[index], 0);

    let shipping = CartItems.length > 0 ? 30 : 0;
    let grandTotal = productTotal + shipping;

    
    document.getElementById("total-items").innerText = totalItems;
    document.getElementById("product-total").innerText = "$" + productTotal.toFixed(2);
    document.getElementById("shipping").innerText = "$" + shipping;
    document.getElementById("grand-total").innerText = "$" + grandTotal.toFixed(2);
}

displayCart();
updateSummary();

