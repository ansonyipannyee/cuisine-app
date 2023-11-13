import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetail.css";

function RecipeDetail() {
  const { id } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const recipe = data.recipes.find((r) => r.id === parseInt(id));
        if (recipe) {
          setSelectedRecipe(recipe);
        } else {
          setError("Recipe not found.");
        }
      })
      .catch((error) => {
        setError("Network error occurred.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="recipe-detail">
      {loading ? (
        <p className="loading-message">loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : selectedRecipe ? (
        <div className="recipe-detail-container">
          <h2>{selectedRecipe.name}</h2>
          <img src={selectedRecipe.thumbnail} alt={selectedRecipe.name} />
          <p>{selectedRecipe.description}</p>
          <a
            href={selectedRecipe.recipe}
            target="_blank"
            rel="noopener noreferrer"
          >
            see recipe.
          </a>
        </div>
      ) : (
        <p className="error-message">recipe not found.</p>
      )}
    </div>
  );
}

export default RecipeDetail;
