import React from "react";
import { useRouter } from "next/router";
import data from "../../components/data";
import BusinessCard from "../../components/BusinessCard";
import { FaStar } from "react-icons/fa";
import Pagination from "../../components/Pagination";
import ReviewsSlider from "../../components/Home/ReviewsSlider";
import businessDB from "../../database/BusinessDB";

function CategoryDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const page = businessDB.find((branch) =>
    branch.categories.find((cat) => cat.catName === slug)
  );
  const found = !!page;
  if (found) {
    console.log(page);
  } else {
    console.error("Page not found");
  }

  return (
    <div className="bg-gray/5">
      {/* Page details */}
      <div className="w-full bg-white h-346 md:h-44 px-5 md:px-10 xl:px-40  py-4 grid grid-rows-4 grid-cols-1 text-left border-b border-lightGray ">
        <p className="row-span-1 ">Restaurants & Hotels &gt; FastFood</p>
        <div className="row-span-3   mt-5 md:text-center space-y-3">
          <h3 className=" text-2xl font-semibold md:text-5xl  ">
            {found ? (
              <div>Best in {slug}</div>
            ) : (
              <div className="text-sm">Loading...</div>
            )}
          </h3>
          <p>Compare the companies in this category</p>
        </div>
      </div>

      {/* Conpanies List */}
      <div className="p-5 md:px-10 xl:px-40 grid grid-cols-10 gap-5  ">
        {/* left side */}
        <section
          className="md:col-span-3    hidden    overflow-hidden   
        md:flex flex-col space-y-5 "
        >
          {/* upper side */}
          <div className="bg-white shadow-md rounded-md p-5 ">
            <div>
              {/* Rating filter */}
              <div className=" border-b pb-5 border-gray/30">
                <h2 className="font-semibold text-lg tracking-wide pb-2">
                  Rating
                </h2>
                <div className="grid grid-cols-4 grid-rows-1 h-10 rounded-md overflow-hidden border border-gray/80   font-light justify-center items-center text-sm">
                  <button
                    type="button"
                    className="border-r border-gray/80 text-center flex flex-row flex-nowrap space-x-2 items-center justify-center h-full cursor-pointer
               focus:bg-bluegreen/40 focus:font-bold"
                  >
                    Any
                  </button>
                  <button
                    type="button"
                    className="border-r border-gray/80 text-center flex flex-row flex-nowrap space-x-2 items-center justify-center h-full cursor-pointer
               focus:bg-bluegreen/40 focus:font-bold"
                  >
                    <FaStar className="mr-1" /> 3.0+
                  </button>
                  <button
                    type="button"
                    className="border-r border-gray/80 text-center flex flex-row flex-nowrap space-x-2 items-center justify-center h-full cursor-pointer
               focus:bg-bluegreen/40 focus:font-bold"
                  >
                    <FaStar className="mr-1" /> 4.0+
                  </button>
                  <button
                    type="button"
                    className=" text-center flex flex-row flex-nowrap space-x-2 items-center justify-center h-full cursor-pointer
               focus:bg-bluegreen/40 focus:font-bold"
                  >
                    <FaStar className="mr-1" /> 4.5+
                  </button>
                </div>
              </div>

              {/* location filter */}

              <div className=" border-b py-5 border-gray/30">
                <h2 className="font-semibold text-lg tracking-wide pb-2">
                  Location
                </h2>
                <label htmlFor="wilaya" className="text-sm">
                  Wilaya
                </label>
                <select
                  name=""
                  id="wilaya"
                  className="border border-gray/80 rounded-md h-10 w-full px-4 text-sm"
                >
                  <option value="adrar">Adrar</option>
                  <option value="blida">Blida</option>
                </select>

                <label htmlFor="wilaya" className="text-sm">
                  Commune
                </label>
                <select
                  name=""
                  id="wilaya"
                  className="border border-gray/80 rounded-md h-10 w-full px-4 text-sm"
                >
                  <option value="adrar">Bouarfa</option>
                  <option value="blida">ouled yaich</option>
                </select>
              </div>

              {/* subcategories filter */}

              <div className="flex flex-row space-x-2 flex-wrap gap-3 py-5">
                {data.map((card) => {
                  return card.activities.map((activity) => {
                    return activity.subactivity.map((subactivity, index) => {
                      return (
                        <button
                          key={index}
                          className="focus:bg-bluegreen/40 rounded-md border border-gray/80 px-2 py-2 text-sm
                       hover:bg-bluegreen/50 hover:border-white focus:border-white focus:font-semibold "
                        >
                          {subactivity}
                        </button>
                      );
                    });
                  });
                })}
              </div>
            </div>
          </div>

          {/* bottom side */}
          <div className="bg-white shadow-md rounded-md p-5 ">
            <h2 className="font-semibold text-lg">Related categories</h2>

            <div>
              {data.map((card) => {
                const total = card.activities.reduce((sum, activity) => {
                  return sum + activity.subactivity.length;
                }, 0);
                return (
                  <div
                    key={card.id}
                    className="flex flex-row flex-nowrap space-x-5 border-b border-gray/40 py-2 cursor-pointer text-sm tracking-wide"
                  >
                    {card.branch}
                    <div className="flex flex-grow" />
                    {total}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* end of the left side */}

        {/* right side */}
        <section className="md:col-span-7 col-span-10  rounded-sm  md:p-1 flex flex-col space-y-5">
          {businessDB.map((category) => {
            return category.categories
              .filter((category) => category.catName == slug)
              .map((cat) => {
                return cat.businesses.map((business) => {
                  return (
                    <BusinessCard
                      id={business.businessId}
                      url={business.businessName}
                      key={business.businessId}
                      BusinessName={business.businessName}
                    />
                  );
                });
              });
          })}

          <div className="flex flex-grow" />
          {/* <Pagination
            totalItems={page ? page.branch.length : 0}
            itemsPerPage={5}
          /> */}

          <ReviewsSlider />
        </section>

        {/* end of the right side */}
      </div>
    </div>
  );
}

export default CategoryDetailPage;
