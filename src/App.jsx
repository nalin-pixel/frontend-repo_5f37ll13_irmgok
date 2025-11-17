import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar onCart={() => alert("Cart coming soon")} />
      <Hero onShop={scrollToProducts} />
      <div ref={productsRef}>
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
