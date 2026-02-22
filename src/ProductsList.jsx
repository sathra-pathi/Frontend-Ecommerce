import { Link } from 'react-router-dom';
import Front2 from './Front2';
import { useEffect, useState } from 'react';
import "./ProductsList.css";
import axios from "axios";

function ProductsList(){
    const [Products, setproducts] = useState([]);

    useEffect(() => {
       fetch('https://backend-ecommerce-kx63.onrender.com/products')
       .then((response)=>response.json())
       .then((data)=>setproducts(data))
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
                        <Front2 Name={p.name} image={p.image} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ProductsList;
