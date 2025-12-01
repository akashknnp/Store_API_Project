let showProduct = document.querySelector(".show-products");

let jsonRes=[]

async function all(){
    const res=await fetch("https://fakestoreapi.com/products")
     jsonRes= await res.json()
    console.log(jsonRes);
    
    showProduct.innerHTML=jsonRes.map(e=>`
        <div class="card">
            <div><img src=${e.image}></div>
            <br>
            <h3>${e.title.slice(0,12).concat("...")}</h3>
            <br>
            <p>${e.description.slice(0,90).concat("...")}</p><br>
            <h4>${'$ '+ e.price}</h4><br>
            <div class="buttons">
                <button>Details</button>
                <button onclick="addToCart(${e.id})">Add to Cart</button>
            </div>
        </div>
        `).join("")
}
all()


function addToCart(id) {
    let cartProduct = jsonRes.find(e => e.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let qty = JSON.parse(localStorage.getItem("qty")) || [];

    // check if item exists in cart
    let index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        // already exists → increase qty only
        qty[index]++;
    } else {
        // new product → add to cart
        cart.push(cartProduct);
        qty.push(1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("qty", JSON.stringify(qty));

    console.log(cart);
    console.log(qty);
}

// -------------------------------filter by category-------------------------------

async function FilterMen(){
    const res=await fetch("https://fakestoreapi.com/products");
    const Jsonres=await res.json();
    console.log(Jsonres);
    const MenCategory=Jsonres.filter((e)=>e.category=="men's clothing");
    showProduct.innerHTML=MenCategory.map(e=>`
        <div class="card">
            <div><img src=${e.image}></div>
            <br>
            <h3>${e.title.slice(0,12).concat("...")}</h3>
            <br>
            <p>${e.description.slice(0,90).concat("...")}</p><br>
            <h4>${'$ '+ e.price}</h4><br>
            <div class="buttons">
                <button>Details</button>
                <button onclick="addToCart(${e.id})">Add to Cart</button>
            </div>
        </div>
        `).join("")
}
 
// -------------------------------------Filter by all-------------------------------------

function FilterAll(){
    showProduct.innerHTML=jsonRes.map(e=>`
        <div class="card">
            <div><img src=${e.image}></div>
            <br>
            <h3>${e.title.slice(0,12).concat("...")}</h3>
            <br>
            <p>${e.description.slice(0,90).concat("...")}</p><br>
            <h4>${'$ '+ e.price}</h4><br>
            <div class="buttons">
                <button>Details</button>
                <button onclick="addToCart(${e.id})">Add to Cart</button>
            </div>
        </div>
        `).join("")
}

// -------------------------------------Filter by Women-----------------------------------------


function FilterWomen(){
     const WomenCategory=jsonRes.filter((e)=>e.category=="women's clothing");
      showProduct.innerHTML=WomenCategory.map(e=>`
        <div class="card">
            <div><img src=${e.image}></div>
            <br>
            <h3>${e.title.slice(0,12).concat("...")}</h3>
            <br>
            <p>${e.description.slice(0,90).concat("...")}</p><br>
            <h4>${'$ '+ e.price}</h4><br>
            <div class="buttons">
                <button>Details</button>
                <button onclick="addToCart(${e.id})">Add to Cart</button>
            </div>
        </div>
        `).join("")
}


// -----------------------------------------Filter by Jewelry-------------------------------------------
function FilterJewelry(){
    const Jewelry=jsonRes.filter((e)=>e.category=="jewelery");
      showProduct.innerHTML=Jewelry.map(e=>`
        <div class="card">
            <div><img src=${e.image}></div>
            <br>
            <h3>${e.title.slice(0,12).concat("...")}</h3>
            <br>
            <p>${e.description.slice(0,90).concat("...")}</p><br>
            <h4>${'$ '+ e.price}</h4><br>
            <div class="buttons">
                <button>Details</button>
                <button onclick="addToCart(${e.id})">Add to Cart</button>
            </div>
        </div>
        `).join("")
}

// -------------------------------------------Filter by Electronics------------------------------------------

function FilterElectronics(){
    const ele=jsonRes.filter((e)=>e.category=="electronics");
      showProduct.innerHTML=ele.map(e=>`
        <div class="card">
            <div><img src=${e.image}></div>
            <br>
            <h3>${e.title.slice(0,12).concat("...")}</h3>
            <br>
            <p>${e.description.slice(0,90).concat("...")}</p><br>
            <h4>${'$ '+ e.price}</h4><br>
            <div class="buttons">
                <button>Details</button>
                <button onclick="addToCart(${e.id})">Add to Cart</button>
            </div>
        </div>
        `).join("")
}