import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home/page";
import Products from "@/pages/product/page"
import ProductDetails from "@/pages/product/details/page"
import Header from "@/components/header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
