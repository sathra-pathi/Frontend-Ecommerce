import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
 
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedItems);
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalPrice = cartItems.reduce((total, item) => {
  const cleanPrice = Number(item.price.replace(/[^0-9]/g, ""));
  return total + cleanPrice;
}, 0);



  return (
    <div className="cart-container">
      <div className="cart-left">
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-image" />

              <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}</p>
               

                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      REMOVE
                    </button>
                    
              </div>
            </div>
            
          ))
        )}
      </div>
        
      <div className="cart-right">
        
        <h2>PRICE DETAILS</h2>
        <hr />
        <p>Total Price: ₹{totalPrice}</p>
        <h3>Payable Amount: ₹{totalPrice}</h3>
        
      </div>
    </div>
  );
}

export default Cart;
