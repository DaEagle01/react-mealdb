import "./Cart.css";
import React from "react";

const Cart = (props) => {
  //   console.log(props.cart);
  const { cart } = props;
  return (
    <div>
      <h3>
        <i class="fas fa-shopping-cart"></i>This is cart.
      </h3>
      {cart.map((cartItem) => (
        <p>{cartItem.strMeal}</p>
      ))}
    </div>
  );
};

export default Cart;
