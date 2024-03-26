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
        <a href="dietaryPersonalization.html" class="sbr-settings-link">Dietary Personalization</a>
        <a href="orderSettings.html" class="sbr-settings-link">Order Settings</a>
    </div>

    <!-- Main Content Section -->
    <div id="settingsContent">
        <div class="dietary-section">
            <h2>Dietary Personalization</h2>
            <div id="preferencesSection">
                <h3>Preferences</h3>
                <p>Content for Preferences</p>
            </div>
            <div id="allergiesSection">
                <h3>Allergies</h3>
                <p>Content for Allergies</p>
            </div>
            <div id="favoritesSection">
                <h3>Favorites</h3>
                <p>Content for Favorites</p>
            </div>
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
