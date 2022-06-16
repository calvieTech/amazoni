import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { Rating } from "@mui/material";

function CheckoutProduct({ id, image, subtitle, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__subtitle">{subtitle}</p>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>{/* <Rating value={rating} readOnly /> */}</p>
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
