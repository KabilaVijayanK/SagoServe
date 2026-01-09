
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Services from "../Pages/Services";
import Auction from "../Pages/Auction";
import Registration from "../Pages/Registration";
import News from "../Pages/News";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/auction" element={<Auction />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/news" element={<News />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
