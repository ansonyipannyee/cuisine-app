import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
    <div className="dishes-list-container">
      <h1 className="dishes-list-title">all dishes.</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul className="dishes-container">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <Link to={`/recipe/${recipe.id}`} className="dishes-link">
                <div className="recipe-img">
                  <img src={recipe.thumbnail} alt={recipe.name} />
                </div>
                <div className="recipe-name">{recipe.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
