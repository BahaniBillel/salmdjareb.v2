import React from "react";
import { MagnifyingGlassIcon, CakeIcon } from "@heroicons/react/24/solid";
import CardToExplore from "./CardToExplore";
import data from "../../components/data";

function CategoryCards() {
  return (
    <section className="p-10 md:px-10 xl:px-40">
      <div className="flex flex-row ">
        <h3 className="font-semibold text-xl md:text-3xl text-blackgrey">
          Explore categories
        </h3>
        <div className="flex-grow"></div>
        <div className="text-bluegreen font-bold cursor-pointer">View all</div>
      </div>
      <div className="mt-5 grid grid-cols-2  grid-rows-5 md:grid-cols-4 md:grid-rows-3 gap-4">
        {data.map(({ icon, label, slug }) => (
          <CardToExplore icon={icon} label={label} url={slug} />
        ))}
      </div>
    </section>
  );
}

export default CategoryCards;
