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
}

function decrease(i) {
    if (qty[i] > 1) {
        qty[i]--;
        document.getElementById(`count-${i}`).innerText = qty[i];
        document.getElementById(`total-${i}`).innerText =
            `${qty[i]} X ${CartItems[i].price} = ${qty[i] * CartItems[i].price}`;
    } else {
        CartItems.splice(i, 1);
        qty.splice(i, 1);
        displayCart();
    }
    saveCart();
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
                <p>${item.description.slice(0,90).concat(". . .")}</p>

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

    if(CartItems.length === 0){
        cartDiv.innerHTML = "<p>Your cart is empty</p>";
    }
}
displayCart();
