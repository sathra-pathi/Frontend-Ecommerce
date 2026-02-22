import "./Front2.css";

function Front2({ Name, image }) {
  return (
    <div className="product-card">
      <img src={`https://backend-ecommerce-kx63.onrender.com/Images/${image}`} 
      
 alt={Name} loading="lazy"/>
    
      <h3>{Name}</h3>
    </div>
    
  );
  
}

export default Front2;
