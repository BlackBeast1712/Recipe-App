import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'; // Make sure this file exists and is correct
import './styles.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='); // Ensure this endpoint is valid
            const data = await response.json();
            setRecipes(data.meals); // Ensure data.meals is not undefined
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipe App</h1>
            <div className="recipe-list">
                {recipes && recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.idMeal} recipe={recipe} />
                    ))
                ) : (
                    <p>No recipes found.</p> // Message when there are no recipes
                )}
            </div>
        </div>
    );
};

export default App;


