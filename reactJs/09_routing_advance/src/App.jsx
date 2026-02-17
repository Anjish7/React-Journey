import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";

function App() {
  return (
    <div className="bg-black h-full ">
      <Navbar />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="Women" element={<Women />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
