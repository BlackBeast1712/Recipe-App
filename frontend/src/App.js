import React, { useEffect, useState } from 'react';
import RecipeCard from './components/RecipeCard';

function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/recipes'); // Adjusted for Flask backend
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipes(data.meals || []); // Assuming the response structure has a 'meals' array
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);
    console.log(recipes);

    return (
        <div>
            <h1>Recipe App</h1>
            <div className="recipe-list">
                {recipes && recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.idMeal} recipe={recipe} />
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
}

export default App;
