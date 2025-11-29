let showProduct = document.querySelector(".show-products");

async function all(){
    const res=await fetch("https://fakestoreapi.com/products")
    const jsonRes= await res.json()
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
                <button onclick="callme()">Add to Cart</button>
            </div>
        </div>
        `).join("")
}
all()

// -------------------------------filter by category-----------

async function FilterMen(){
    const res=await fetch("https://fakestoreapi.com/products");
    const Jsonres=await res.json();
    console.log(Jsonres);
    const MenCategory=Jsonres.filter((e)=>e.category=="men's clothing");
    
     showProduct.innerHTML=MenCategory.map(e=>`
        <div class="card">
            <img src=${e.image}>
            <h4>${e.title.slice(0,12).concat("...")}<h4>

        </div>
        
        `).join("")
}
 


