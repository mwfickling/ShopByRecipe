function handleOnLoad(){
const loginPage = document.getElementById('loginPage')
let html = `
<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div class="container">
             <a href="./index.html" class="navbar-brand text-light ">Shop By Recipe</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target=#navmenu>
                <span class="navbar-toggler-icon"></span>
            </button>

             <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-items ">
                        <a href="recipe.html" class="nav-link text-light ">Recipes</a>
                    </li>
                    <li class="nav-items">
                        <a href="accountInfo.html" class="nav-link text-light ">Admin TEST</a>
                    </li>
                    <li class="nav-items">
                        <a href="login.html" class="nav-link text-light ">Sign Up / Login</a>
                    </li>
                </ul>
             </div>
            </div>
       
    </nav>
    
    <div class="login-form">
        <form>
          <h1>Login</h1>
          <div class="content">
            <div class="input-field">
              <input type="email" placeholder="Email" autocomplete="nope">
            </div>
            <div class="input-field">
              <input type="password" placeholder="Password" autocomplete="new-password">
            </div>
            <a href="#" class="link">Forgot Your Password?</a>
          </div>
          <div class="action">
            <button>Register</button>
            <button>Sign in</button>
          </div>
        </form>
      </div>`
      loginPage.innerHTML = html;
}