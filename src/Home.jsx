import { Link } from "react-router-dom";
import "./Home.css";
import samsung from"./assets/samsungs23.avif";
import mac from "./assets/Macbook.webp";
import banner from"./assets/bannerr.jpg"

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img
          src={banner}
          alt="banner"
        />
      </div>

      
      <h2 className="section-title">Top Deals</h2>
      <div className="top-deals">
        <div className="deal-card">
          <img src="https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg" alt="Deal" />
          <p>iPhone 15</p>
          <h4>₹67,999</h4>
        </div>

        <div className="deal-card">
          <img src={samsung} alt="Deal" />
          <p>Samsung S23 Ultra</p>
          <h4>₹1,14,999</h4>
        </div>

        <div className="deal-card">
          <img src={mac} alt="Deal" />
          <p>Macbook Air M2</p>
          <h4>₹89,999</h4>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-grid">

        <Link to="/products/mobiles" className="cat-card">
          <img src="http://localhost:3000/Images/Mobiles.jpg" alt="Mobiles" />
          <p>Mobiles</p>
        </Link>

        <Link to="/products/laptops" className="cat-card">
          <img src="http://localhost:3000/Images/Laptops.jpg" alt="Laptops" />
          <p>Laptops</p>
        </Link>

        <Link to="/products/shoes" className="cat-card">
          <img src="http://localhost:3000/Images/shoes (2).jpg" alt="Shoes" />
          <p>Shoes</p>
        </Link>

        <Link to="/products/skincare" className="cat-card">
          <img src="http://localhost:3000/Images/Products.jpg" alt="Skincare" />
          <p>Skincare</p>
        </Link>

      </div>
    </div>
  );
}

export default Home;
