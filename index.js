let showProduct = document.querySelector(".show-products");

async function all(){
    const res=await fetch("https://fakestoreapi.com/products")
    const jsonRes= await res.json()
    console.log(jsonRes);
    
    showProduct.innerHTML=jsonRes.map(e=>`
        <div class="card">
            <img src=${e.image}>
            <h5>${e.title.slice(0,12).concat("...")}<h5>
        
        
        
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
            <h5>${e.title.slice(0,12).concat("...")}<h5>

        </div>
        
        `).join("")
            
        
    
}
 
