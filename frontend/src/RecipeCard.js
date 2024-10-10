import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
        </div>
    );
};

export default RecipeCard;
