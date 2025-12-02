import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import"./Mobiles.css";

function LaptopPage(){
    const[laptops,setlaptop]=useState([])
    useEffect(()=>{
    fetch("http://localhost:3000/Laptops")
    .then((reponse)=>reponse.json())
    .then((data)=>setlaptop(data))
    },[]);

    return (
         <div className="mobiles-wrapper">
      <h1 className="page-title">Laptops</h1>

      <div className="mobiles-grid">
        {laptops.map((l) => (
          <Link key={l.id} to={`/products/Laptops/${l.id}`} className="mobile-link">
            <div className="mobile-card">
              <img src={l.image} alt={l.name} className="mobile-img" />
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
