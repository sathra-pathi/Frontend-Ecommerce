import "./Front2.css";

function Front2({ Name, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={Name} />
      <h3>{Name}</h3>
    </div>
  );
}

export default Front2;
