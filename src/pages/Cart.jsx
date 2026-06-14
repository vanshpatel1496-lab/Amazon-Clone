function Cart({
  cartItems,
  removeFromCart
}) {
    const totalPrice =
      cartItems.reduce(
        (total, item) =>
         total +
         item.price * item.quantity,0
     );

  return (

    <div style={{ padding: "20px" }}>

      <h1>Cart</h1>

      {
        cartItems.length === 0
        ? (
            <h3>Cart is Empty</h3>
          )
        : (
            cartItems.map((item) => (

              <div
                key={item.id}
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  padding: "10px"
                }}
              >

                <h3>{item.name}</h3>

                <p>
                  ₹{item.price}
                </p>

                <p>
                  Quantity:
                  {item.quantity}
                </p>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))
          )
      }

    </div>

  );
}

export default Cart;