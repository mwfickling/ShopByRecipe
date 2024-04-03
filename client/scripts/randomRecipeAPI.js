
const mealList = document.getElementById('randomRecipeBox') //Search result box
 
searchBtn.addEventListener('click', getMealList)


function getMealList(){
   
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => {
        let html = ""
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <section id="RandomRecipes" class="p-5 bg-primary">
                <div class="container">
                  <h2 class="text-center text-white">Recipes of the Day!</h2>
                  <p class="lead text-center text-white mb-5">
                    Can't choose? Let us do the thinking for you!
                  </p>
                  <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <img
                            src="${meal.strMealThumb}"
                            class="rounded-circle mb-3"
                            alt=""
                          />
                          <h3 class="card-title mb-3" id="randomRecipe1">Random Recipe 1</h3>
                          <p class="card-text"  id="ranRecDesc1">
                            Filler text for food description, delete when API works
                          </p>
                          <button class="ran-rec-button">Recipe</button>
                        </div>
                      </div>
                    </div>
                `
            })
            mealList.classList.remove('notFound')
        } else{
            html = "Sorry, we didn't find any meal!"
            mealList.classList.add('notFound')
        }

        mealList.innerHTML = html
    })
}