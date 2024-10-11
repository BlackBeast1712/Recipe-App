import React from 'react';

const RecipeCard = ({ recipe }) => {
    console.log(recipe);

    
    return (
        <div className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>Category: {recipe.strCategory}</p>
            <p>Area: {recipe.strArea}</p>
            <p>Instructions: {recipe.strInstructions}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default RecipeCard;
