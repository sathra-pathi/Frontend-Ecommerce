import { Link } from 'react-router-dom';
import Front2 from './Front2';
import { useEffect, useState } from 'react';
import "./ProductsList.css";

function ProductsList(){
    const [Products, setproducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/Products')
            .then((response) => response.json())
            .then((data) => setproducts(data));
    }, []);

    return (
        <>
            <h1 className="product-title">Products</h1>

            <div className="products-container">
                {Products.map((p) => (
                    <Link 
                      key={p.id} 
                      to={p.link} 
                      className="product-link"
                    >
                        <Front2 Name={p.Name} image={p.image} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ProductsList;
