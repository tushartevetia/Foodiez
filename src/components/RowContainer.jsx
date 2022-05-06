import React, { useEffect, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function RowContainer({ flag, data }) {
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      className={`w-full my-12 flex gap-3 items-center scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none "
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] min-w-[200px] md:min-w-[300px] md:w-225 my-12 backdrop-blur-lg bg-cardOverlay rounded-lg p-2 hover:drop-shadow-lg h-[225px] flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className="w-32 h-28 object-contain drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center cursor-pointer justify-center hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className=" text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">Rs</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center">
          <img src={NotFound} alt="Not Found" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Out Of Stock!
          </p>
        </div>
      )}
    </div>
  );
}

export default RowContainer;
