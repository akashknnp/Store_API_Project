let showProduct = document.querySelector(".show-products");


async function all(){
    const res=await fetch("https://fakestoreapi.com/products")
    const jsonRes= await res.json()
    
    showProduct.innerHTML=jsonRes.map(e=>`
        <div class="card"><img src=${e.image}></div>
        
        `).join("")
    
}

all()