import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ProductDetails.css";
import MobilesPage from "./MobilesPage";

function ProductDetails(props) {
   const { category,id } = useParams();
  const [product, setProduct] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/${category}/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [category,id]);
if(!product)
  return(<p>loding</p>);
 const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    

    navigate("/cart");  
  };
  function deleteProduct(){
      
        fetch(`http://localhost:3000/${category}/${id}`, {
          method:"DELETE"

        }
        )
        .then((respons)=>respons.json())
        .then((data)=>{console.log(data);alert("product delete")})
      
      
      navigate(`/products/${category}`)
  }
  
  return (
    <div className="product-container">

      
      <div className="product-left">
        <img
          src={product.image}
          className="main-image"
          alt={product.name}
        />

        <div className="btn-section">
          <button className="buy-btn">BUY NOW</button>
          <button className="cart-btn" onClick={addToCart}>ADD TO CART</button>
          <button className="buy-btn" onClick={deleteProduct}>DELETE</button>
        </div>
      </div>

      <div className="product-right">
        <h2>{product.name}</h2>

        <p className="rating">⭐ 4.5 | 3,421 Ratings & 521 Reviews</p>

        <h1 className="price">{product.price}</h1>
        <p className="offer">Available Offers</p>

        <ul className="offers">
          <li>✔ Bank Offer: 10% Instant Discount on ICICI Credit Cards</li>
          <li>✔ Free Delivery</li>
          <li>✔ No Cost EMI starting from ₹3,499/month</li>
        </ul>

        <h3>Product Details</h3>
        <table className="details-table">
          <tr><td>Brand</td><td>{product.brand}</td></tr>
          <tr><td>Model</td><td>{product.model}</td></tr>
          {product.Ram &&(
          <tr><td>RAM / Storage</td><td>{product.Ram} / {product.storage}</td></tr>)}
          {product.battery &&(
          <tr><td>Battery</td><td>{product.battery}</td></tr>)}
          {product.camera &&(
          <tr><td>Camera</td><td>{product.camera}</td></tr>)}
        </table>
      </div>
    </div>
  );
}

export default ProductDetails;
