import React from "react";
import Link from "next/link";

function CardToExplore({ icon, label, url }) {
  return (
    <Link href={`/categories/${url}`}>
      <div
        className="flex flex-row items-center justify-center space-x-4 border-transparent border-solid px-5 py-3 md:py-5 border
     rounded-md cursor-pointer hover:scale-95 transition-all duration-200 bg-white
      hover:border-lightGray hover:bg-lightOrange shadow-md hover:shadow-inner group hover:text-white "
      >
        {icon}
        <p className="text-blackgrey group-hover:text-white">{label}</p>
      </div>
    </Link>
  );
}

export default CardToExplore;
