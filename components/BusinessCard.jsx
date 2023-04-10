import React from "react";
import Image from "next/image";
import Lays from "../images/Lays.png";
import {
  MagnifyingGlassIcon,
  CakeIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";

import ReactStars from "react-stars";
import Link from "next/link";

function BusinessCard({ url, BusinessName, id }) {
  return (
    <Link href={`/business/${url}`}>
      <div
        className=" overflow-hidden w-full bg-white h-28 rounded-md shadow-sm hover:shadow-md 
   transition-all duration-300 active: cursor-pointer border border-lightGray hover:border-none p-4 grid grid-cols-10 grid-rows-3"
      >
        <div className="col-span-2 row-span-3">
          <Image src={Lays} with={120} objectFit="contain" alt="lays-logo" />
        </div>
        <div className="col-span-8 row-span-2 border-b border-lightGray flex flex-row   ">
          <div>
            <h2 className="text-2xl font-semibold">
              {BusinessName}
              {id}
            </h2>
            <p className="text-xs text-gray">Food processing industry</p>
          </div>
          <div className="flex-grow"></div>
          <div className="flex flex-col items-end">
            <ReactStars count={5} size={18} color2={"#ffd700"} value={4.5} />
            <p className="text-sm text-bluegreen font-semibold">
              SMScrore : 4.3/5
            </p>
          </div>
        </div>
        {/* bottom row */}
        <div className="col-span-8 row-span-1 pt-1 flex flex-row space-x-8  ">
          <div className="flex flex-row flex-nowrap space-x-2">
            <CakeIcon className="h-4 text-gray hover:text-blackgrey" />
            <LockOpenIcon className="h-4 text-gray hover:text-blackgrey" />
            <MagnifyingGlassIcon className="h-4 text-gray hover:text-blackgrey" />
          </div>
          <div className="   flex-row space-x-1 hidden md:flex">
            <p className="text-xs text-gray">Potato chips.</p>
            <p className="text-xs text-gray">Potato chips.</p>
            <p className="text-xs text-gray">Potato chips.</p>
          </div>
          <div className="flex-grow"></div>
          <div>
            <p className="text-xs">Latest Reviews</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BusinessCard;
