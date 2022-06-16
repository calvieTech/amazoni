import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { authMe } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IGxsrL9Q8PggCiUouirgJyp0ZU2trVRgmbNtFnVV9Erg8KFGbFjaVLQlFq5ZjTMCqqvw9wqORGhIWA8rTyMWNdP00T39PEWEO"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads..
    authMe.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payments"
            element={
              <Elements stripe={promise}>
                <Payment />{" "}
              </Elements>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
