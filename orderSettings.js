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
                        <a href="admin.html" class="nav-link text-light">Admin TEST</a>
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
        <div class="order-section">
            <h2>Order Settings</h2>
            <div id="orderHistorySection">
                <h3>Order History</h3>
                <p>CONTENT FOR ORDER HISTORY</p>
            </div>
        </div>
    </div>
    `;
    settingsPage.innerHTML = html;
}

