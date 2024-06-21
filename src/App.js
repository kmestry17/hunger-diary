import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeView from "./Pages/RecipeView/RecipeView";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import Header from "./Pages/Header/Header";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch("/data/recipesData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes data:", error));
  }, []);

  const handleViewClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Header />
      <div className="card">
        <div className="card-body">
          {selectedRecipe ? (
            <RecipeDetails
              recipe={selectedRecipe}
              onCloseClick={handleCloseClick}
            />
          ) : (
            <div className="recipe-list">
              {recipes.map((recipe, index) => (
                <RecipeView
                  key={index}
                  recipe={recipe}
                  onViewClick={() => handleViewClick(recipe)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
