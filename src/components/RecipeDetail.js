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

  if (loading) {
    return (
      <div className="recipe-detail">
        <p className="loading-message">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="recipe-detail">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (selectedRecipe) {
    return (
      <div className="recipe-detail">
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
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <p className="error-message">Recipe not found.</p>
    </div>
  );
}

export default RecipeDetail;