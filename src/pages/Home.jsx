import ProductCard from "../components/ProductCard";
import "./Home.css";
import { useState, useEffect } from "react";
function Home({ search }) {
  const [products, setProducts] = useState([]);
  
  const [category, setCategory] =useState("All");
  useEffect(() => {
  fetch("http://localhost:5000/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Check data from backend
      setProducts(data);
    });
}, []);
  const filteredProducts =
  products.filter((product) => {
    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );
    const matchesCategory =
      category === "All"
      ||
      product.category === category;
    return (
      matchesSearch &&
      matchesCategory
    );

  });
  return (
  <div className="home">
    <h1 className="heading">Today's Deals</h1>

    
    <select
      className="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>All</option>
      <option>Mobile</option>
      <option>Laptop</option>
    </select>

    <div className="products">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </div>
);
}
export default Home;