import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import"./Mobiles.css";

function Shoespage(){
    const[shoes,setshoes]=useState([])
    useEffect(()=>{
    fetch("https://backend-ecommerce-kx63.onrender.com/shoes")
    .then((reponse)=>reponse.json())
    .then((data)=>setshoes(data))
    },[]);

    return (
        <div className="mobiles-wrapper">
      <h1 className="page-title">Shoes</h1>

      <div className="mobiles-grid">
        {shoes.map((s) => (
          <Link key={s.id} to={`/products/shoe/${s.id}`} className="mobile-link">
            <div className="mobile-card">
              <img src={`https://backend-ecommerce-kx63.onrender.com/Images/${s.image}`} loading="lazy" alt={s.name} className="mobile-img" />
              <h3>{s.name}</h3>
              <p className="price">{s.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
}

export default Shoespage;
