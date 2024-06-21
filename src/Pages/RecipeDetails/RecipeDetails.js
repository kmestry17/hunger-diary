import React from "react";
import "../../App.css";

const RecipeDetails = ({ recipe, onCloseClick }) => {
  return (
    <div className="recipe-details">
      <h3>{recipe.name}</h3>
      <p>Description: {recipe.description}</p>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Preparation Time: {recipe.PreparationTime}</p>
      <p>Cook Time: {recipe.CookTime}</p>
      <p>Total Time: {recipe.TotalTime}</p>
      <p>Servings: {recipe.Servings}</p>
      <p>Calories: {recipe.Calories}</p>
      <p>Instructions:</p>
      <ol>
        {recipe.Instructions.map((Instruction, index) => (
          <li key={index}>{Instruction}</li>
        ))}
      </ol>
      <button className="close-recipe" onClick={onCloseClick}>
        Close Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
