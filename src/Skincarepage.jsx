import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import"./Mobiles.css";

function Skincarepage(){
   const[skin,setskin]=useState([])
    useEffect(()=>{
    fetch("http://localhost:3000/Skincare")
    .then((reponse)=>reponse.json())
    .then((data)=>setskin(data))
    },[]);

    return (
        <div className="mobiles-wrapper">
      <h1 className="page-title">Skincare</h1>

      <div className="mobiles-grid">
        {skin.map((s) => (
          <Link key={s.id} to={`/products/Skincare/${s.id}`} className="mobile-link">
            <div className="mobile-card">
              <img src={s.image} alt={s.name} className="mobile-img" />
              <h3>{s.name}</h3>
              <p className="price">{s.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
}

export default Skincarepage;
