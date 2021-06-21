import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function HomeScreen() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data} = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    {
      loading ? <LoadingBox />
       : error ?  <MessageBox variant="danger">{error}</MessageBox> 
       : <div className="row center">
      {products.map(product => (
        <Products key={product._id} product={product} />
      ))}
    </div>
   
    }

    </div>
  );
}
