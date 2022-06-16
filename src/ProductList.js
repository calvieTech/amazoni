import React from "react";
import Product from "./Product";
import "./ProductList.css";

function ProductList({ list }) {
  return (
    <div className="productList">
      {list.map((book, idx) => {
        return (
          <Product
            key={idx}
            id={book.isbn13}
            title={book.title}
            subtitle={book.subtitle}
            image={book.image}
            price={book.price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
