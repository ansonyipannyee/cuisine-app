import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); 
  const [selectedRecipe, setSelectedRecipe] = useState(null);
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
        const recipe = data.recipes.find((r) => r.id === parseInt(id));
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
  }, [id]); 

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : selectedRecipe ? (
        <div>
          <h2>{selectedRecipe.name}</h2>
          <p>Description: {selectedRecipe.description}</p>
          <img src={selectedRecipe.thumbnail} alt={selectedRecipe.name} />
        </div>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
}

export default RecipeDetail;