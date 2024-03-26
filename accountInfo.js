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
                        <a href="admin.html" class="nav-link text-light">ADMIN TEST</a>
                    </li>
                    <li class="nav-items">
                        <a href="login.html" class="nav-link text-light">Sign Up / Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Side Navigation Bar for Settings (unchanged) -->
    <div class="sbr-settings-sidebar">
        <a href="accountInfo.html" class="sbr-settings-link">Account Information</a>
        <div class="sbr-settings-dropdown">
        </div>
        <a href="dietaryPersonalization.html" class="sbr-settings-link">Dietary Personalization</a>
        <div class="sbr-settings-dropdown">
        </div>
        <a href="orderSettings.html" class="sbr-settings-link">Order Settings</a>
        
    </div>

    <!-- Main Content Area for Account Information -->
    <div id="settingsContent" class="container">
        <div class="account-info-section">
            <h2>Account Information</h2>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td><input type="text" id="userName" class="form-control" placeholder="Your name"></td>
                    </tr>
                    <tr>
                        <th>Email Address</th>
                        <td><input type="email" id="userEmail" class="form-control" placeholder="Your email"></td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td><input type="password" id="userPassword" class="form-control" placeholder="New password"></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-primary">Update</button>
        </div>
    </div>
    <footer class="p-5 bg-dark text-white text-center position-relative">
        <div class="container">
          <p class="lead">Copyright &copy; CrimsonTech Creations </p>
          <a class="position-absolute bottom-0 end-0 p-5">
            <i class="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    `;
    settingsPage.innerHTML = html;
}
