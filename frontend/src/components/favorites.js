import React from 'react';

const Favorites = ({ favorites }) => {
    return (
        <div>
            <h2>Favorites</h2>
            {favorites.map(recipe => (
                <div key={recipe.idMeal}>{recipe.title}</div>
            ))}
        </div>
    );
};

export default Favorites;
