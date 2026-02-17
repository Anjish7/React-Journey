import React from "react";
import { Link, Outlet } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";

function Product() {
  return (
    <div>
      <div className="flex justify-center bg-black p-4 m-2 gap-7 text-white underline">
        <Link to='/product/men' element={<Men />}>
          Men
        </Link>
        <Link to='/product/women' element={<Women />}>
          Women
        </Link>
      </div>

      <div className="bg-black h-screen text-white flex justify-center items-center font-bold text-5xl">
        
      </div>
      <Outlet/>
    </div>
  );
}

export default Product;
