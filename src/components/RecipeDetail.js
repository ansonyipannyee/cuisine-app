import React, { useState, useEffect } from 'react';

function RecipeDetail({ match }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recipeId = match.params.id;
    axios.get('/Users/ant/Development/code/phase-2/cuisine-app/db.json')
      .then((response) => {
        const recipe = response.data.recipes.find(
          (r) => r.id === parseInt(recipeId)
        );
        if (recipe) {
          setSelectedRecipe(recipe);
        } else {
          setSelectedRecipe(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [match.params.id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : selectedRecipe ? (
        <div>
          <h2>{selectedRecipe.name}</h2>
          <p>Description: {selectedRecipe.description}</p>
          <img src={selectedRecipe.thumbnail} alt={selectedRecipe.name} />
          <a href={selectedRecipe.recipe}>Recipe</a>
        </div>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
}

export default RecipeDetail;