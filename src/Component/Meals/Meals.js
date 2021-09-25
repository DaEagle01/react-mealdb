import "./Meals.css";
import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import Cart from "../Cart/Cart";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  const showDetail = (meal) => {
    const newCart = [meal];
    setCart(newCart);
  };

  useEffect(
    () =>
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
        .then((res) => res.json())
        .then((data) => setMeals(data.meals)),
    []
  );

  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {meals.map((meal) => (
              <Meal
                showDetail={showDetail}
                key={meal.idMeal}
                meal={meal}
              ></Meal>
            ))}
          </div>
        </div>

        <div className="col-md-3">
          <Cart key={cart.idMeal} cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Meals;
