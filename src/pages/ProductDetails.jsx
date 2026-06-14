import { useParams } from "react-router-dom";
import products from "../prdt data/products";

function ProductDetails({
  addToCart
}) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div style={{ padding: "20px" }}>

      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <h2>₹{product.price}</h2>

      <p>{product.description}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductDetails;