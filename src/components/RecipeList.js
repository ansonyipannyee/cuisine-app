import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>all recipes.</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;