import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

function HomeContainer() {
  return (
    //   left pannel
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center  gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full bg-white object-contain"
            />
          </div>
        </div>

        <p className="text-[2.7rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4.3rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[85%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae
          modi perferendis accusamus vel at harum. Odit porro alias repellat
          officia rerum adipisci, aliquam beatae minima. Incidunt dignissimos
          rerum nesciunt.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="h-400 w-full lg:h-650 lg:w-auto ml-auto"
          alt="hero-bg"
        />

        {/* Static Dishes-Right Pannel */}
        <div className="w-full top-0 left-0 h-full absolute flex items-center justify-center py-4 gap-6 flex-wrap">
          {heroData &&
            heroData.map((data) => (
              <div
                key={data.id}
                className=" w-150 lg:w-190 p-4  bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg"
              >
                <img
                  src={data.imageSrc}
                  alt="i1"
                  className="w:20 -mt-10 lg:w-40 lg:-mt-20"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {data.name}
                </p>
                <p className="text-[12px] lg:text-m text-lighttextGray font-semibold my-1 lg:my-3">
                  {data.desc}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">Rs</span> {data.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
