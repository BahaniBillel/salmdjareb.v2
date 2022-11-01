import React from "react";
import Link from "next/link";

function CardToExplore({ icon, label, url }) {
  return (
    <Link href={`/categories/${url}`}>
      <div
        className="flex flex-row space-x-2 border-transparent border-solid px-3 py-3 md:py-5 border
     rounded-md cursor-pointer hover:scale-95 transition-all duration-200 bg-white hover:bg-beige shadow-md"
      >
        {icon}
        <p className="text-blackgrey">{label}</p>
      </div>
    </Link>
  );
}

export default CardToExplore;
