function main() {
    const baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

    const getMeal = () => {
        fetch(`${baseUrl}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllMeals(responseJson.movies);
                }
                })
            .catch(error => {
                showResponseMessage(error);
                })
            };
        
        
const renderAllMeals = (meals) => {
    const listMealElement = document.querySelector("#listMeal");
    listMealElement.innerHTML = "";

    meals.forEach(meal => {
        listMovieElement.innerHTML += `
            <div class="col-md-4" style="margin-top: 12px;">
                <div class="card">
                    <div class="card-body">
                        <img src="${meal.strMeal}" alt="${meal.strCategory}" class="img-fluid">
                        <h5>${meal.strArea}</h5>
                        <p>asd</p>
                    </div>
                </div>
            </div>
            `;
    });

  
}
        const showResponseMessage = (message = "Check your internet connection") => {
            alert(message);
        };

      
}

export default main;