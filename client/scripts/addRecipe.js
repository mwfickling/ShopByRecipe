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
                        <a href="admin.html" class="nav-link text-light">Analytics</a>
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
            <select id="cuisineType" name="cuisineType">
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="French">French</option>
                <option value="Japanese">Japanese</option>
                <option value="Thai">Thai</option>
                <option value="Spanish">Spanish</option>
                <option value="Mediterranean">Mediterranean</option>
            </select>

            <div class="ingredients-section">
    <h3>Ingredients</h3>
    <div id="ingredientEntries">
    </div>
    <div class="total-ingredients-section">
        <div class="total-ingredient-entry">
            <label for="totalIngredientName">Ingredient Name:</label>
            <input type="text" id="totalIngredientName" name="totalIngredientName" >

            <label for="totalIngredientAmount">Amount:</label>
            <input type="number" id="totalIngredientAmount" name="totalIngredientAmount" min="1" max="9999">

            <label for="totalIngredientUnit">Unit:</label>
            <select id="totalIngredientUnit" name="totalIngredientUnit">
                <option value="grams">grams</option>
                <option value="kilograms">kilograms</option>
                <option value="liters">liters</option>
                <option value="milliliters">milliliters</option>
                <option value="cups">cups</option>
                <option value="tablespoons">tablespoons</option>
                <option value="teaspoons">teaspoons</option>
                <!-- Add more units as necessary -->
            </select>
        </div>
    </div>
    <button class="add-ingredient-button" type="button" id="addIngredientButton">Add Ingredient</button>
</div>

            <h3>Added Ingredients:</h3>

            

            <label for="prepTime">Preparation and Cooking Time:</label>
            <input type="text" id="prepTime" name="prepTime">

            <label for="cookingInstructions">Cooking Instructions or Method:</label>
            <textarea id="cookingInstructions" name="cookingInstructions"></textarea>

            <label for="servingSize">Serving Size or Number of Servings:</label>
            <input type="number" id="servingSize" name="servingSize">

        

            

            <label for="specialDiet">Special Diet Categories:</label>
            <select id="specialDiet" name="specialDiet">
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="keto">Keto</option>
            </select>

            <button type="submit">Add Recipe</button>
        </form>
    </div>
    `;
    addRecipesPage.innerHTML = html;
}
{/* <label for="mealCategory">Category or Type of Meal:</label>
            <select id="mealCategory" name="mealCategory">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="appetizer">Appetizer</option>
            </select> */}
            // <label for="nutritionalInfo">Nutritional Information:</label>
            // <textarea id="nutritionalInfo" name="nutritionalInfo"></textarea>

