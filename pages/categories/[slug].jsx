import React from "react";
import { useRouter } from "next/router";
import data from "../../components/data";
import Image from "next/image";
import Lays from "../../images/Lays.png";
import {
  MagnifyingGlassIcon,
  CakeIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";

import ReactStars from "react-stars";

function PageDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const page = data.find((x) => x.slug === slug);

  console.log(page);
  return (
    <div className="">
      {/* Page details */}
      <div className="w-full bg-white h-32 md:h-40 px-10 md:px-24 py-4 grid grid-rows-4 grid-cols-1 text-left border-b border-lightGray ">
        <p className="row-span-1 ">Restaurants & Hotels &gt; FastFood</p>
        <div className="row-span-3   mt-5 md:text-center">
          <h3 className=" text-2xl font-semibold md:text-5xl  ">
            {/* Best in {page.label} */}
          </h3>
          <p>Compare the companies in this category</p>
        </div>
      </div>

      {/* Conpanies List */}
      <div className="p-5 md:px-10 xl:px-40 grid grid-cols-10 gap-5  ">
        {/* left side */}
        <div className="md:col-span-3   bg-beige hidden md:grid rounded-sm  grid-col-1 grid-row-24 overflow-hidden gap-5">
          <div className="rows-span-10 bg-white p-4">1</div>
          <div className="rows-span-10 bg-blackgrey">2</div>
          <div className="rows-span-4 bg-blackgrey">3</div>
        </div>
        {/* right side */}
        <div className="md:col-span-7 col-span-10  rounded-sm  md:p-1 flex flex-col space-y-5">
          {/* Card template */}
          <div
            className=" overflow-hidden w-full bg-white h-28 rounded-md shadow-sm hover:shadow-md 
          transition-all duration-300 active: cursor-pointer border border-lightGray hover:border-none p-4 grid grid-cols-10 grid-rows-3"
          >
            <div className="col-span-2 row-span-3">
              <Image
                src={Lays}
                with={120}
                objectFit="contain"
                alt="lays-logo"
              />
            </div>
            <div className="col-span-8 row-span-2 border-b border-lightGray flex flex-row   ">
              <div>
                <h2 className="text-2xl font-semibold">Lays</h2>
                <p className="text-xs text-gray">Food processing industry</p>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col items-end">
                <ReactStars
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                  value={4.5}
                />
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

          {/* Card ends */}

          {/* Card template */}
          <div
            className=" overflow-hidden w-full bg-white h-28 rounded-md shadow-sm hover:shadow-md 
          transition-all duration-300 active: cursor-pointer border border-lightGray hover:border-none p-4 grid grid-cols-10 grid-rows-3"
          >
            <div className="col-span-2 row-span-3">
              <Image
                src={Lays}
                with={120}
                objectFit="contain"
                alt="lays-logo"
              />
            </div>
            <div className="col-span-8 row-span-2 border-b border-lightGray flex flex-row   ">
              <div>
                <h2 className="text-2xl font-semibold">Lays</h2>
                <p className="text-xs text-gray">Food processing industry</p>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col items-end">
                <ReactStars
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                  value={4.5}
                />
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

          {/* Card ends */}
          {/* Card template */}
          <div
            className=" overflow-hidden w-full bg-white h-28 rounded-md shadow-sm hover:shadow-md 
          transition-all duration-300 active: cursor-pointer border border-lightGray hover:border-none p-4 grid grid-cols-10 grid-rows-3"
          >
            <div className="col-span-2 row-span-3">
              <Image
                src={Lays}
                with={120}
                objectFit="contain"
                alt="lays-logo"
              />
            </div>
            <div className="col-span-8 row-span-2 border-b border-lightGray flex flex-row   ">
              <div>
                <h2 className="text-2xl font-semibold">Lays</h2>
                <p className="text-xs text-gray">Food processing industry</p>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col items-end">
                <ReactStars
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                  value={4.5}
                />
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

          {/* Card ends */}
          {/* Card template */}
          <div
            className=" overflow-hidden w-full bg-white h-28 rounded-md shadow-sm hover:shadow-md 
          transition-all duration-300 active: cursor-pointer border border-lightGray hover:border-none p-4 grid grid-cols-10 grid-rows-3"
          >
            <div className="col-span-2 row-span-3">
              <Image
                src={Lays}
                with={120}
                objectFit="contain"
                alt="lays-logo"
              />
            </div>
            <div className="col-span-8 row-span-2 border-b border-lightGray flex flex-row   ">
              <div>
                <h2 className="text-2xl font-semibold">Lays</h2>
                <p className="text-xs text-gray">Food processing industry</p>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col items-end">
                <ReactStars
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                  value={4.5}
                />
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

          {/* Card ends */}
          {/* Card template */}
          <div
            className=" overflow-hidden w-full bg-white h-28 rounded-md shadow-sm hover:shadow-md 
          transition-all duration-300 active: cursor-pointer border border-lightGray hover:border-none p-4 grid grid-cols-10 grid-rows-3"
          >
            <div className="col-span-2 row-span-3">
              <Image
                src={Lays}
                with={120}
                objectFit="contain"
                alt="lays-logo"
              />
            </div>
            <div className="col-span-8 row-span-2 border-b border-lightGray flex flex-row   ">
              <div>
                <h2 className="text-2xl font-semibold">Lays</h2>
                <p className="text-xs text-gray">Food processing industry</p>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col items-end">
                <ReactStars
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                  value={4.5}
                />
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

          {/* Card ends */}
          {/* Card template */}
          <div
            className=" overflow-hidden w-full bg-white h-28 rounded-md shadow-sm hover:shadow-md 
          transition-all duration-300 active: cursor-pointer border border-lightGray hover:border-none p-4 grid grid-cols-10 grid-rows-3"
          >
            <div className="col-span-2 row-span-3">
              <Image
                src={Lays}
                with={120}
                objectFit="contain"
                alt="lays-logo"
              />
            </div>
            <div className="col-span-8 row-span-2 border-b border-lightGray flex flex-row   ">
              <div>
                <h2 className="text-2xl font-semibold">Lays</h2>
                <p className="text-xs text-gray">Food processing industry</p>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col items-end">
                <ReactStars
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                  value={4.5}
                />
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

          {/* Card ends */}
        </div>
      </div>
    </div>
  );
}

export default PageDetail;
