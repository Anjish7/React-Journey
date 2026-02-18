import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Cource from "./pages/Cource";
import CourceDetails from "./pages/CourceDetails";

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
        <Route path="/cource" element={<Cource/>}/>
        <Route path='/cource/:id' element={<CourceDetails/>} />
      </Routes>


    </div>
  );
}

export default App;
