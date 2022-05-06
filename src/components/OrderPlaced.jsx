import React from "react";
import Delivery from "../img/delivery.png";

function OrderPlaced() {
  return (
    <div>
      <div className="w-full font-semibold text-green-500 text-2xl py-4">
        Order Placed!
      </div>
      <div className="w-full font-semibold py-4">
        Thankyou for Ordering, Please Visit Again
      </div>
      <div className=" w-225 flex items-center gap-2 justify-center bg-orange-100 px-2 py-2 rounded-full mt-2">
        <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
        <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-xl">
          <img
            src={Delivery}
            alt="delivery"
            className="w-full h-full bg-white object-contain"
          />
        </div>
      </div>
      <div className="mt-8 font-semibold text-2xl ">
        A Biker is on its way and will deliver your order in
        <span className="text-orange-400">
          <br /> 30 mins
        </span>
      </div>
    </div>
  );
}

export default OrderPlaced;
