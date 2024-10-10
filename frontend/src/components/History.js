import React from 'react';

const History = ({ history }) => {
    return (
        <div>
            <h2>History</h2>
            {history.map(recipe => (
                <div key={recipe.idMeal}>{recipe.title}</div>
            ))}
        </div>
    );
};

export default History;
