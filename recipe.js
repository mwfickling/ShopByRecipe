function handleOnLoad(){
 const recipePage = document.getElementById('recipePage')
 let html = `<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
 <div class="container">
      <a href="index.html" class="navbar-brand text-light ">Shop By Recipe</a>

     <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target=#navmenu>
         <span class="navbar-toggler-icon"></span>
     </button>

      <div class="collapse navbar-collapse" id="navmenu">
         <ul class="navbar-nav ms-auto">
             <li class="nav-items ">
                 <a href="recipes.js" class="nav-link text-light ">Recipes</a>
             </li>
             <li class="nav-items">
                 <a href="admin.html" class="nav-link text-light ">Admin TEST</a>
             </li>
             <li class="nav-items">
                 <a href="login.html" class="nav-link text-light ">Sign Up / Login</a>
             </li>
         </ul>
      </div>
     </div>

</nav>
<div class = "container">
 <div class = "meal-wrapper">
   <div class = "meal-search">
     <h2 class = "title">Find Meals For Your Ingredients</h2>
     <div class = "meal-search-box">
       <input type = "text" class = "search-control" placeholder="Enter an ingredient" id = "search-input">
       <button type = "submit" class = "search-btn btn" id = "search-btn">
         <i class="fa fa-search"></i>
       </button>
     </div>
   </div>
   <div class = "meal-result">
     <h2 class = "title">Your Search Results:</h2>
     <div id= "meal">  
     </div>
   </div>
   <div class = "meal-details">
     <button type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn">
       <i class = "fas fa-times"></i>
     </button>
         <div class = "meal-details-content">
     </div>
   </div>
 </div>
</div>
`
recipePage.innerHTML = html;

}


