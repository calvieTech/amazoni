import React, { useState, useEffect } from "react";
import {
  query,
  ref,
  get,
  limitToLast,
  limitToFirst,
  orderByChild,
  startAfter,
} from "firebase/database";
import { db } from "./firebase";
import "./Home.css";
import Product from "./Product";
import ProductList from "./ProductList";
import Slider from "./Slider";
import { v4 as uuidv4 } from "uuid";

function Home(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const isValidPrice = (book) => {
    if (book.price === "$0.00") {
      return false;
    }
    return true;
  };

  // const loadTop10Books = async () => {
  //   let dbRef = ref(db);
  //   let productsRef = dbRef;
  //   let top10BooksQuery = query(productsRef, limitToFirst(10));
  //   await get(top10BooksQuery, (snapshot) => {
  //     // if (snapshot.exists()) snapshotToArray(snapshot);
  //   })
  //     .then((snapshot) => {
  //       console.log("Data is loaded");
  //       let top10Books = snapshot.val();
  //       console.log(top10Books);
  //       return top10Books;
  //     })
  //     .catch((error) => {
  //       console.error("Error getting the snapshot of database: " + error);
  //     });
  // };

  // const shuffleProducts = (productsArray) => {
  //   for (let i = productsArray.length - 1; i > 0; --i) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     let t = productsArray[i];
  //     productsArray[i] = productsArray[j];
  //     productsArray[j] = t;
  //   }
  //   return productsArray;
  // };

  // useEffect(() => {
  //   const url = "http://localhost:8000/products";
  //   fetch(url).then((response) => {
  //     response.json().then((data) => {
  //       setProducts(shuffleProducts(data));
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   const loadFirst10Books = async () => {
  //     let dbRef = ref(db);
  //     let productsRef = dbRef;
  //     let first10BooksQuery = query(productsRef, limitToFirst(10));
  //     await get(first10BooksQuery, (snapshot) => {
  //       if (snapshot.exists()) setLoading(true);
  //     })
  //       .then((snapshot) => {
  //         console.log("Data is loaded");
  //         let products = snapshot.val();
  //         setProducts(products);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error getting the snapshot of database: " + error);
  //       });
  //   };

  //   loadFirst10Books();
  // }, []);

  useEffect(() => {
    const loadNewITBooks = async () => {
      let endpoint = "https://api.itbook.store/1.0/new";
      await fetch(endpoint).then((response) => {
        setLoading(true);
        response.json().then((books) => {
          let booksArray = books.books;
          let products = booksArray.filter((book, idx) => {
            return isValidPrice(book);
          });
          setProducts(products);
          setLoading(false);
        });
      });
    };

    loadNewITBooks();
  }, []);

  if (!products) {
    return null;
  }

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__slideshow">
          <Slider />
        </div>
        <div className="home__row">
          <ProductList list={products.slice(0, 2)} />
          {/* {products.forEach((newBook, idx) => {
            return <ProductList book={newBook} />;
          })} */}
          {/* {products.map((book) => {
            return (
              <Product
                key={book.key}
                title={book.title}
                thumbnailUrl={book.thumbnailUrl}
                shortDescription={book.shortDescription}
                longDescription={book.longDescription}
                pageCount={book.pageCount}
              />
            );
          })} */}
          {/* <Product
            id={products[2].id}
            title={products.title}
            price={59} // to do
            thumbnailUrl={products.thumbnailUrl}
            description={products.shortDescription}
            rating={42}
          /> */}
        </div>
        <div className="home__row">
          <ProductList list={products.slice(2, 5)} />
        </div>
        <div className="home__row">
          <ProductList list={products.slice(6, 10)} />
        </div>
      </div>
    </div>
  );
}
export default Home;
