import React from "react";
import Image from "next/image";
import BannerImage from "../images/trusted.png";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Banner() {
  return (
    <div className="md:h-screen xl:h-screen 2xl:h-screen   overflow-hidden relative  ">
      <Image
        src={BannerImage}
        alt=""
        //  height={900}
        objectFit="cover"
        objectPosition="top"
      />
      <div className="absolute left-0 top-2/4 sm:w-full lg:w-6/12   flex flex-col  p-3 z-20">
        <label for="search">
          <h3 className="text-white font-bold text-3xl w-3/4">
            Write ,find, and read reviews you{" "}
            <span className="text-blue-300">trust.</span>
          </h3>
        </label>
        <input
          type="text"
          className=" rounded-2xl bg-white pl-8  border border-white h-10 lg:h-14 w-full
        shadow-sm shadow    focus:outline-none   transition duration-300 text-white placeholder:text-gray-400
           "
          placeholder="Search for a product or category..."
          id="search"
        />
      </div>
    </div>
  );
}

export default Banner;
