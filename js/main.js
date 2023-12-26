let userInfo = document.querySelector("#user_info")
let userDom = document.querySelector("#user")
let Linkes = document.querySelector("#links")
var loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
var productContainer = JSON.parse(localStorage.getItem('allproduct'))
console.log(productContainer)
console.log(loggedIn)
if(loggedIn){
  Linkes.remove()
  userDom.innerHTML =  loggedIn.pname;


}
function display(){
  // 1) عملت متغير خزنت فيه الداتا اللي هتجيلي
 
  var trs='';
   // 2) هعمل loop  علي  productContainer اللي شايل داتا بتاعتي 
  for(var i =0 ; i<productContainer.length;i++){
    // 3) هضيف جواه اي داتا جديدة تجيلي في table اللي عامله 
    trs +=`  <div class="container1" >
    <div class="products">
<div class="product-item">
<img src="./images/${productContainer[i].image}" alt="img" width="100%"  />
</div>
<div class="product-item-desc">
<h2>${productContainer[i].pname}</h2>
<h3>${productContainer[i].category}</h3>
<span>${productContainer[i].price}</span>
</div>
<div class="product-item-action">
<button class="add-to-chart" onclick="checkLogedUser()">Add To Chart</button>
</div>

    </div>
    <div class="products">
    <div class="product-item">
    <img src="./images/${productContainer[i].image}" alt="img" width="100%"  />
    </div>
    <div class="product-item-desc">
    <h2>${productContainer[i].pname}</h2>
    <h3>${productContainer[i].category}</h3>
    <span>${productContainer[i].price}</span>
    </div>
    <div class="product-item-action">
    <button class="add-to-chart" onclick="checkLogedUser()">Add To Chart</button>
    </div>
    
        </div>
        <div class="products">
<div class="product-item">
<img src="./images/${productContainer[i].image}" alt="img" width="100%"  />
</div>
<div class="product-item-desc">
<h2>${productContainer[i].pname}</h2>
<h3>${productContainer[i].category}</h3>
<span>${productContainer[i].price}</span>
</div>
<div class="product-item-action">
<button class="add-to-chart" id="addChart" onclick="checkLogedUser()">Add To Chart</button>
</div>

    </div>
    <div class="products">
<div class="product-item">
<img src="./images/${productContainer[i].image}" alt="img" width="100%"  />
</div>
<div class="product-item-desc">
<h2>${productContainer[i].pname}</h2>
<h3>${productContainer[i].category}</h3>
<span>${productContainer[i].price}</span>
</div>
<div class="product-item-action">
<button class="add-to-chart" onclick=" checkLogedUser()" >Add To Chart</button>
</div>

    </div>
</div>`
  // 1) بحط on click في button بتاعة delete 
  }
  // 4) هغير table في html هخليه يعرض مكانه متغير بتاعي اللي مخزن جواه داتا trs
  document.getElementById('home').innerHTML=trs
}
display()


function checkLogedUser(){
    if(loggedIn){
        location.replace('chart.html')
    }else{
        location.replace('signin.html')
    }
}
function log(){
    location.replace('./signin.html')
  }