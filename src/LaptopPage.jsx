import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import"./Mobiles.css";

function LaptopPage(){
    const[laptops,setlaptop]=useState([])
    useEffect(()=>{
    fetch("https://backend-ecommerce-kx63.onrender.com/laptops")
    .then((reponse)=>reponse.json())
    .then((data)=>setlaptop(data))
    },[]);

    return (
         <div className="mobiles-wrapper">
      <h1 className="page-title">Laptops</h1>

      <div className="mobiles-grid">
        {laptops.map((l) => (
          <Link key={l.id} to={`/products/laptops/${l.id}`} className="mobile-link">
            <div className="mobile-card">
              <img src={`https://backend-ecommerce-kx63.onrender.com/Images/${l.image}`}loading="lazy" alt={l.name} className="mobile-img" />
              <h3>{l.name}</h3>
              <p className="price">{l.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
}

export default LaptopPage;
