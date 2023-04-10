import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ReviewShowcaseCard from "../ShowcaseReview";

const dummyData = [
  {
    id: 1,
    businessName: "Pizza Palace",
    overallRating: 4.2,
    reviewsCount: 124,
    businessActivity: "Pizza Restaurant",
    lastUserReviewer: "John Doe",
    lastUserReviewDate: "January 20, 2021",
    lastUserRating: 5,
    lastUserComment:
      "The pizza was delicious and the service was great! Will definitely come back.",
  },
  {
    id: 2,
    businessName: "Burgers R Us",
    overallRating: 4.8,
    reviewsCount: 79,
    businessActivity: "Fast Food Restaurant",
    lastUserReviewer: "Jane Doe",
    lastUserReviewDate: "February 15, 2021",
    lastUserRating: 4.5,
    lastUserComment:
      "The burgers were juicy and the fries were crispy! A great quick meal.",
  },
  {
    id: 3,
    businessName: "Taco Town",
    overallRating: 4.6,
    reviewsCount: 54,
    businessActivity: "Mexican Restaurant",
    lastUserReviewer: "Alex Smith",
    lastUserReviewDate: "March 10, 2021",
    lastUserRating: 4.8,
    lastUserComment:
      "The tacos were amazing and the salsa was so fresh and flavorful!",
  },
  {
    id: 4,
    businessName: "Taco Town",
    overallRating: 4.6,
    reviewsCount: 54,
    businessActivity: "Mexican Restaurant",
    lastUserReviewer: "Alex Smith",
    lastUserReviewDate: "March 10, 2021",
    lastUserRating: 4.8,
    lastUserComment:
      "The tacos were amazing and the salsa was so fresh and flavorful!",
  },
];
const ReviewsSlider = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { origin: "center", perView: 1, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { origin: "center", perView: 2, spacing: 15 },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider  ">
      {dummyData.map((data) => (
        <div className="keen-slider__slide ">
          <ReviewShowcaseCard
            key={data.id}
            businessName={data.businessName}
            overallRating={data.overallRating}
            reviewsCount={data.reviewsCount}
            businessActivity={data.businessActivity}
            lastUserReviewer={data.lastUserReviewer}
            lastUserReviewDate={data.lastUserRating}
            lastUserRating={data.lastUserRating}
            lastUserComment={data.lastUserComment}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewsSlider;
