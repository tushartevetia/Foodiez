import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-center"
      id="main"
    >
      <HomeContainer />
      <section className="w-full py-2">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold text-headingColor capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ">
            Fresh & Healthy fruits
          </p>
        </div>
        <RowContainer
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
}

export default MainContainer;
