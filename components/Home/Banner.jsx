import React from "react";
import Image from "next/image";
import BannerImage from "../../images/trusted.png";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Banner() {
  return (
    <div className=" md:h-2/3  overflow-hidden relative px-   ">
      <Image
        src={BannerImage}
        alt="salmdjareb home banner"
        className="brightness-50"
      />
      <div className="absolute left-0 top-0 md:top-1/4 w-full lg:w-6/12   flex flex-col p-10 md:px-10 xl:px-40 z-20">
        <label for="search" className="mb-3 md:mb-5">
          <h3 className="text-white font-bold text-3xl ">
            Write reviews.Find reviews.Read reviews. <br /> Find Companies you
            Can
            <span className="text-bluegreen"> trust.</span>
          </h3>
        </label>
        <div className="relative flex flex-row">
          <input
            type="text"
            className=" rounded-2xl bg-white pl-8  border border-white h-10 md:h-10 w-full
             shadow-sm     focus:outline-none   transition duration-300 text-white placeholder:text-grey
           "
            placeholder="Search for a product or category..."
            id="search"
          />
          <MagnifyingGlassIcon className=" h-full  md:h-10 absolute right-0 text-white rounded-2xl bg-bluegreen px-2 hover:scale-95 transition duration-150 cursor-pointer " />
        </div>
      </div>
    </div>
  );
}

export default Banner;
