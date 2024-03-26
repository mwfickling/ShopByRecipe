// function handleOnLoad() {
//     const addRecipesPage = document.getElementById('addRecipesPage');
//     let html = `
//     <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
//         <div class="container">
//             <a href="./index.html" class="navbar-brand text-light">Shop By Recipe</a>

//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=#navmenu>
//                 <span class="navbar-toggler-icon"></span>
//             </button>

//             <div class="collapse navbar-collapse" id="navmenu">
//                 <ul class="navbar-nav ms-auto">
//                     <li class="nav-items">
//                         <a href="dashboard.html" class="nav-link text-light">Dashboard</a>
//                     </li>
//                     <li class="nav-items">
//                         <a href="adminRecipes.html" class="nav-link text-light">Recipes</a>
//                     </li>
//                     <li class="nav-items">
//                         <a href="addRecipe.html" class="nav-link text-light">Add Recipe</a>
//                     </li>
//                     <li class="nav-items">
//                         <a href="accountInfo.html" class="nav-link text-light">Settings</a>
//                     </li>
                    
//                 </ul>
//             </div>
//         </div>
//     </nav>
    

//     `;
//     addRecipesPage.innerHTML = html;
// }
function handleOnLoad() {
    const addRecipesPage = document.getElementById('addRecipesPage');
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
                        <a href="dashboard.html" class="nav-link text-light">Dashboard</a>
                    </li>
                    <li class="nav-items">
                        <a href="recipe.html" class="nav-link text-light">Recipes</a>
                    </li>
                    <li class="nav-items">
                        <a href="addRecipe.html" class="nav-link text-light">Add Recipe</a>
                    </li>
                    <li class="nav-items">
                        <a href="accountInfo.html" class="nav-link text-light">Settings</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Add Recipe Form -->
    <div class="add-recipe-form">
        <h2>Add New Recipe</h2>
        <form id="recipeForm">
            <label for="dishName">Dish Name:</label>
            <input type="text" id="dishName" name="dishName">

            <label for="cuisineType">Cuisine Type:</label>
            <input type="text" id="cuisineType" name="cuisineType">

            <label for="ingredients">Ingredients List:</label>
            <textarea id="ingredients" name="ingredients"></textarea>

            <label for="prepTime">Preparation and Cooking Time:</label>
            <input type="text" id="prepTime" name="prepTime">

            <label for="cookingInstructions">Cooking Instructions or Method:</label>
            <textarea id="cookingInstructions" name="cookingInstructions"></textarea>

            <label for="servingSize">Serving Size or Number of Servings:</label>
            <input type="number" id="servingSize" name="servingSize">

            <label for="nutritionalInfo">Nutritional Information:</label>
            <textarea id="nutritionalInfo" name="nutritionalInfo"></textarea>

            <label for="mealCategory">Category or Type of Meal:</label>
            <select id="mealCategory" name="mealCategory">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="appetizer">Appetizer</option>
            </select>

            <label for="specialDiet">Special Diet Categories:</label>
            <select id="specialDiet" name="specialDiet">
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="keto">Keto</option>
            </select>

            <button type="submit">Add Recipe</button>
        </form>
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
    addRecipesPage.innerHTML = html;
}

