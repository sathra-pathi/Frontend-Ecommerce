import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Mobiles.css";

function MobilesPage() {
  const [mobiles, setmobiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Mobiles")
      .then((response) => response.json())
      .then((data) => setmobiles(data));
  }, []);

  return (
    <div className="mobiles-wrapper">
      <h1 className="page-title">Mobiles</h1>

      <div className="mobiles-grid">
        {mobiles.map((m) => (
          <Link key={m.id} to={`/products/Mobiles/${m.id}`} className="mobile-link">
            <div className="mobile-card">
              <img src={m.image} alt={m.name} className="mobile-img" />
              <h3>{m.name}</h3>
              <p className="price">{m.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobilesPage;
