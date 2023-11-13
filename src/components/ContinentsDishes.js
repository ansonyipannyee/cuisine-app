import React, { useState, useEffect } from "react";
import "./ContinentsDishes.css";

function ContinentsDishes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return <p>loading data...</p>;
  }

  return (
    <div className="continents-dishes-container">
      <h1>dishes by continents.</h1>
      <ul className="continents-list">
        {data.continents.map((continent) => (
          <li key={continent.id}>
            <h3>{continent.name}</h3>
            <ul className="dishes-list">
              {data.recipes
                .filter((recipe) => recipe.continentId === continent.id)
                .map((recipe) => (
                  <li key={recipe.id} className="dish-item">
                    <img
                      className="dishitem-img"
                      src={recipe.thumbnail}
                      alt={recipe.name}
                    />
                    <div className="dish-details">
                      <h4>{recipe.name}</h4>
                      <p>{recipe.description[0]}</p>
                      <a
                        href={recipe.recipe}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        see recipe.
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContinentsDishes;
