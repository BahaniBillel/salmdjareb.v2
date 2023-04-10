import React from "react";
import ReactStars from "react-stars";

const ReviewShowcaseCard = ({
  businessName,
  overallRating,
  reviewsCount,
  businessActivity,
  lastUserReviewer,
  lastUserReviewDate,
  lastUserRating,
  lastUserComment,
}) => {
  return (
    <div className="p-4 rounded-md border border-gray/30 shadow-lg bg-white w-64 h-72 ">
      <h3 className="text-base font-medium">{businessName}</h3>
      <div className="my-2 flex items-center">
        <ReactStars
          count={5}
          value={overallRating}
          edit={false}
          size={24}
          color2={"#ffd700"}
        />
        <span className="ml-2 text-base font-medium">{overallRating}</span>
      </div>
      <div className="text-gray-600">
        <span className="text-sm">{reviewsCount} Reviews</span>
        <span className="ml-2">|</span>
        <span className="ml-2 text-sm">{businessActivity}</span>
      </div>
      <hr className="my-4" />
      <div className="text-sm text-gray-700 border border-gray/30 max-h-max p-2 rounded-md bg-beige/10">
        <div className="flex flex-row items-center space-x-2">
          <div className="rounded-full bg-bluegreen/80 w-5 h-5 text-xs flex justify-center items-center">
            BB
          </div>
          <div>
            <span className="font-medium">{lastUserReviewer}</span>
            <span className="ml-2">-</span>
            <span className="ml-2">{lastUserReviewDate}</span>
          </div>
        </div>
        <div className="my-2 flex items-center">
          <ReactStars
            count={5}
            value={lastUserRating}
            edit={false}
            size={16}
            color2={"#ffd700"}
          />
        </div>
        <p className="text-gray-600 line-clamp-2 text-sm">{lastUserComment}</p>
      </div>
    </div>
  );
};

export default ReviewShowcaseCard;
