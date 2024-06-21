import React from "react";
import "./RecipeView.css";

const RecipeView = ({ recipe, onViewClick }) => {
  return (
    <div className="cards">
      <div className="card">
        <article class="information [ card ]">
          <span className="tag">{recipe.name}</span>
          <p className="description">Description:</p>
          <p className="info">{recipe.description}</p>

          <button className="button" onClick={onViewClick}>
            <span>View Complete Recipe</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="none"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                fill="currentColor"
              />
            </svg>
          </button>
        </article>
      </div>
    </div>
  );
};

export default RecipeView;
