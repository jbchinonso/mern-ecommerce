import React from "react";
import Products from "./components/Products";
import { data } from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            amazona
          </a>
        </div>

        <div>
          <a href="/cart">Cart</a>
          <a href="/signin"> Sign In</a>
        </div>
      </header>

      <main>
        <div className="row center">
          {data.products.map(product => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      </main>

      <footer className="row center">All right Reserved</footer>
    </div>
  );
}

export default App;
