import "./Buypage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Buypage() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="buy-container">
      <div className="buy-card">
        <h2>Enter Your Details</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            rows="4"
            placeholder="Delivery Address"
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Buypage;
