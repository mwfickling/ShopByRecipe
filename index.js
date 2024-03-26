function handleOnLoad(){
    const page = document.getElementById('page')
    let html = `<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
    <div class="container">
         <a href="index.html" class="navbar-brand text-light ">Shop By Recipe</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target=#navmenu>
            <span class="navbar-toggler-icon"></span>
        </button>

         <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-items ">
                    <a href="recipe.html" class="nav-link text-light ">Recipes</a>
                </li>
                <li class="nav-items">
                    <a href="accountInfo.html" class="nav-link text-light id=luckyLink">I'm Feeling Lucky</a>
                </li>
              
                
                <li class="nav-items">
                    <a href="login.html" class="nav-link text-light ">Sign Up / Login</a>
                </li>
            </ul>
         </div>
        </div>
   
</nav>

<section class="bg-dark text-light p-5 text-center text-sm-start">
    <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
            
            <div>
                <h1>The Pinnacle of Culinary <span class="text-warning">Exploration</span></h1>
             <p class="lead my-4">Welcome to Shop by Recipe! Explore our diverse collection with thousands of recipes and intuitive search options to satisfy any craving. Plus, join the Shop by ReciPeoples club for exclusive weekly recipe coupons. Dive in and discover your next favorite dish today!</p>
             <button href="#" class="btn btn-primary btn-lg">Join Now!</button>
            </div>
            <img class="img-fluid w-50 d-none d-lg-block" src="./img/oopsies.png" alt="">
        </div>
    </div>
</section>

<section class="bg-primary text-light p-5">
    <div class="container">
        <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 md-md-0">Sign Up For Our Newsletter!</h3>
            <div class="input-group news-input">
                <input type="text" class="form-control" placeholder="Enter Email">
                <button class="btn btn-dark btn-lg" type="button">Enter</button>
              </div>
        </div>
    </div>
</section>`
page.innerHTML = html;
}
function loadPage(){
    
}

