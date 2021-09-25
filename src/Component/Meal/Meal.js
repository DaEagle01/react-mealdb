import "./Meal.css";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Meal = (props) => {
  // console.log(props.meal);
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <div>
      <div className="row col-md-12 g-0">
        <div className="col-md-4">
          <img
            src={strMealThumb}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{strInstructions.slice(0, 80)}</p>
            <p className="card-text">
              <button
                onClick={() => props.showDetail(props.meal)}
                className="btn btn-warning"
              >
                <i class="fas fa-hamburger"></i> Detail
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
