import React from "react";
import Image from "next/image";
import Logo from "../images/SAL_MDJAREB_WHITE.png";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function Navigation() {
  return (
    <div className="flex flex-row w-screen  px-5 md:px-10 xl:px-40 py-2 items-center justify-between ">
      {/* logo */}
      <div className="">
        <Image
          src={Logo}
          alt="Vercel Logo"
          width={140}
          height={70}
          objectFit="contain"
        />
      </div>

      {/* Navigationbar */}
      <div className=" ">
        {/* Hidden in small screens */}
        <ul className="md:flex flex-row space-x-8  hidden md:visible lg:visible xl:visible 2xl:visible  ">
          <li className="">
            <Link href="#">
              <span className="text-white py-2 px-3">Categories</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-white py-2 px-3">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-white py-2 px-3">User</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="bg-blue-300 py-2 px-3 rounded-lg ">
                For Businesses
              </span>
            </Link>
          </li>
        </ul>
        <div>
          <Bars3BottomRightIcon className="text-white h-10 cursor-pointer lg:hidden md:hidden sm:visible"  />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
