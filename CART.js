var products=[
  {name:"Airpods", headline:"For IOS devices", price:"10,999" ,image:"https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"Headphone", headline:"Portable Heasphones",price:"3,999", image:"https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  // {name:"Head  phone", headline:"Portable Heasphones",price:"3,999", image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"Airdopes", headline:"Wireless EarBuds",price:"4,999", image:"https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  // {name:"Airdopes", headline:"Nothing Airdopes",price:"4,999", image:"https://images.unsplash.com/photo-1677346414290-d337cbc682a6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

var clutter="";
function addProduct(){
  products.forEach(function(product,index){
    clutter+= `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full object-cover" src="${product.image}" />
    </div>
    <div class="data w-full px-2 py-5">
    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
    <div class="flex justify-between w-full items-center mt-2">
    <div class="w-1/2">
    <h3 class="font-semibold opacity-21">${product.headline}</h3>
    <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
    </div>
    <button data-index="${index}" class=" add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
    class=" add ri-add-line"></i></button>
    </div>
    </div>
    </div>`;
  }) 
  
  document.querySelector (".products").innerHTML=clutter;
}

addProduct();

var popular=[
  {name:"Airpods", headline:"For IOS devices", price:"10,999" ,image:"https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"Airdopes", headline:"Nothing Airdopes",price:"4,999", image:"https://images.unsplash.com/photo-1677346414290-d337cbc682a6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

function addPopular(){
  var clutter="";
  popular.forEach(function(product){
  clutter+=` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
  <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
      <img class="w-full h-full object-cover"
          src="${product.image}"
          alt="">
  </div>
  <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${product.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-21">${product.headline}</h4>
      <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
      </div>
</div>`;
  })

  document.querySelector(".populars").innerHTML=clutter;
}

addPopular();

var cart=[];

function addToCart(){
  document.querySelector(".products")
  .addEventListener("click",function(details){
    if(details.target.classList.contains('add')){
        cart.push(products[details.target.dataset.index])
    }
  })
}

addToCart();

function showCart(){
  document.querySelector(".carticon")
  .addEventListener("click",function(){
    document.querySelector(".cartexpnd").style.display="block";

    var clutter="";
    cart.forEach(function(prod,index){
      clutter+=`<div class="flex gap-2 bg-white p-2 rounded-lg">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="${prod.image}"/>
      </div>
      <div>
        <h3 class="font-semibold">${prod.name}</h3>
        <h5 class"text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
      </div>
    </div>`;
    })
    document.querySelector(".cartexpnd").innerHTML=clutter;
  });

 
  document.querySelector(".carticon").addEventListener("blur", function(){
      document.querySelector(".cartexpnd").style.display = "none";
  })

}

showCart();