import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/Users/ant/Development/code/phase-2/cuisine-app/db.json')
      .then((response) => {
        setRecipes(response.data.recipes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Cuisines from Different Continents</h1>
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