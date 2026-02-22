import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import MobilesPage from "./MobilesPage";
import Front from "./Front";
import LaptopPage from "./LaptopPage";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import Home from "./Home";
import Shoespage from "./Shoespage";
import Cart from "./Cart";
import Skincarepage from "./Skincarepage";
import Buypage from "./Buypage";


function App() {
  return (
    <BrowserRouter>
    <Front></Front>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsList/>} />
        <Route path="/products/Mobiles" element={<MobilesPage />} />
        <Route path="/products/laptops" element={<LaptopPage />} />
        <Route path="/products/Shoes" element={<Shoespage />} />
        <Route path="/products/Skincare" element={<Skincarepage />} />
        <Route path="/products/:category/:id"element={<ProductDetails />}/>
         <Route path="/buy/:id" element={<Buypage />} />
        
        
      </Routes>
    <Footer></Footer>
    
    </BrowserRouter>
    
    
    
  );
}

export default App;
