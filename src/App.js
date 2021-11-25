import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/HomePage/Home";
import Products from "./pages/ProductsPage/Products";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import AnimationRevealPage from "./AnimationRevealPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <AnimationRevealPage>
        <Footer />
      </AnimationRevealPage>
    </div>
  );
}

export default App;
