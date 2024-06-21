import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe, onCloseClick }) => {
  return (
    <div className="card">
      <article class="information [ card ]">
        <span className="tag">{recipe.name}</span>
        <h4>Description: </h4>
        <p>{recipe.description}</p>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h4>Additional Information:</h4>
        <p>Preparation Time: {recipe.PreparationTime}</p>
        <p>Cook Time: {recipe.CookTime}</p>
        <p>Total Time: {recipe.TotalTime}</p>
        <p>Servings: {recipe.Servings}</p>
        <p>Calories: {recipe.Calories}</p>
        <h4>Instructions:</h4>
        <ol>
          {recipe.Instructions.map((Instruction, index) => (
            <li key={index}>{Instruction}</li>
          ))}
        </ol>
        <button className="close-button" onClick={onCloseClick}>
          Close Recipe
        </button>
      </article>
    </div>
  );
};

export default RecipeDetails;
