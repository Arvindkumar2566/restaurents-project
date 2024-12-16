import React from 'react';
import './Searchfoodbody.css';

function Searchfoodbody({ data }) {
  return (
    <div className="food-cards">
      {data?.map((meal, index) => (
        <div key={index} className>
          <div className="card mt-4" >
            <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
            <div className="card-body">
              <h5 className="card-title">{meal.strMeal}</h5>
              <a href={meal.strYoutube} className="btn  view-btn" target="_blank" rel="noopener noreferrer">
                View Recipe
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Searchfoodbody;