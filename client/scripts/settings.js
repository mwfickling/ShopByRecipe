// function handleOnLoad(){
//     const settingsPage = document.getElementById('settingsPage')
//     let html = `
//     <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
//             <div class="container">
//                  <a href="./index.html" class="navbar-brand text-light ">Shop By Recipe</a>
    
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target=#navmenu>
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
    
//                  <div class="collapse navbar-collapse" id="navmenu">
//                     <ul class="navbar-nav ms-auto">
//                         <li class="nav-items ">
//                             <a href="recipe.html" class="nav-link text-light ">Recipes</a>
//                         </li>
//                         <li class="nav-items">
//                             <a href="admin.html" class="nav-link text-light ">I'm Feeling Lucky</a>
//                         </li>
//                         <li class="nav-items">
//                             <a href="login.html" class="nav-link text-light ">Sign Up / Login</a>
//                         </li>
//                     </ul>
//                  </div>
//                 </div>
           
//         </nav>
//         `
//           settingsPage.innerHTML = html;
//     }
function handleOnLoad() {
    const settingsPage = document.getElementById('settingsPage');
    let html = `
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div class="container">
            <a href="./index.html" class="navbar-brand text-light">Shop By Recipe</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-items">
                        <a href="recipe.html" class="nav-link text-light">Recipes</a>
                    </li>
                    <li class="nav-items">
                        <a href="admin.html" class="nav-link text-light">I'm Feeling Lucky</a>
                    </li>
                    <li class="nav-items">
                        <a href="login.html" class="nav-link text-light">Sign Up / Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Side Navigation Bar for Settings -->
    <div class="sbr-settings-sidebar">
        <a href="accountInfo.html" class="sbr-settings-link">Account Information</a>
        <div class="sbr-settings-dropdown">
        </div>
        <a href="#dietaryPersonalization" class="sbr-settings-link">Dietary Personalization</a>
        <div class="sbr-settings-dropdown">
            <a href="#preferences" class="sbr-settings-link">- Preferences</a>
            <a href="#allergies" class="sbr-settings-link">- Allergies</a>
            <a href="#favorites" class="sbr-settings-link">- Favorites</a>
        </div>
        <a href="#orderSettings" class="sbr-settings-link">Order Settings</a>
        <div class="sbr-settings-dropdown">
            <a href="#orderHistory" class="sbr-settings-link">- Order History</a>
        </div>
    </div>
    `;
    settingsPage.innerHTML = html;
}
