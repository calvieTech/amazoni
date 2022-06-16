import React from "react";
import "./Product.css";
import StarsIcon from "@material-ui/icons/";
import { Rating } from "@mui/material";
import { useStateValue } from "./StateProvider";

function Product({ id, title, subtitle, price, isbn13, image, url }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        subtitle: subtitle,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <h3>{title}</h3>
        <p className="product__price">
          <span>{price}</span>
        </p>
        <div className="product__rating">
          {/* <Rating value={rating} readOnly /> */}
        </div>
      </div>
      <img src={image} alt="product" height={300} width={300} />
      <button className="product__add" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
