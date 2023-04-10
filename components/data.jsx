import {
  CakeIcon,
  ShoppingBagIcon,
  TvIcon,
  HomeIcon,
  HeartIcon,
  BankIcon,
  AirplaneIcon,
} from "@heroicons/react/24/solid";
import { AiFillCar, AiFillBank } from "react-icons/ai";
import { MdSportsBasketball, MdOutlineRealEstateAgent } from "react-icons/md";
import { ImAirplane } from "react-icons/im";
const cards = [
  {
    id: 1,
    branch: "Food,Beverages",
    icon: <CakeIcon className="h-5" />,
    activities: [
      {
        id: 11,
        activitiy: "Pastery-shop",
        subactivity: [
          "Bakery",
          "Bakery Equipment",
          "Baking Supply Store",
          "Cake Decorating Equipment Shop",
          "Cake Shop",
          "Crumbouch",
        ],
      },
    ],
    label: "Pastery shop",
    slug: "Pastery-shop",
  },
  {
    id: 2,
    branch: "Electronics",
    icon: <TvIcon className="h-5" />,
    activities: [
      {
        id: 21,
        activitiy: "Electronics-shop",
        subactivity: [
          "Computers",
          "Smartphones",
          "Tablets",
          "Gaming Consoles",
          "Audio and Video Equipment",
        ],
      },
    ],
    label: "Electronics shop",
    slug: "Electronics-shop",
  },
  {
    id: 3,
    branch: "Clothing, Shoes & Accessories",
    icon: <ShoppingBagIcon className="h-5" />,
    activities: [
      {
        id: 31,
        activitiy: "Fashion Retailer",
        subactivity: [
          "Women's Clothing",
          "Men's Clothing",
          "Children's Clothing",
          "Shoes",
          "Accessories",
        ],
      },
      {
        id: 32,
        activitiy: "Sportswear Retailer",
        subactivity: [
          "Athletic Clothing",
          "Athletic Footwear",
          "Athletic Accessories",
        ],
      },
    ],
    label: "Clothing store",
    slug: "Clothing-store",
  },
  {
    id: 4,
    branch: "Home and Garden",
    icon: <HomeIcon className="h-5" />,
    activities: [
      {
        id: 41,
        activitiy: "Home Furnishing",
        subactivity: [
          "Furniture",
          "Lighting",
          "Home Decor",
          "Kitchen and Dining",
          "Bedding",
        ],
      },
      {
        id: 42,
        activitiy: "Gardening and Lawn Care",
        subactivity: [
          "Plants",
          "Gardening Tools",
          "Lawn Mowers",
          "Pest Control",
          "Outdoor Furniture",
        ],
      },
    ],
    label: "Home and Garden ",
    slug: "Home-and-Garden-store",
  },
  {
    id: 5,
    branch: "Beauty & Personal Care",
    icon: <HeartIcon className="h-5" />,
    activities: [
      {
        id: 51,
        activitiy: "Beauty and Cosmetics",
        subactivity: [
          "Skincare",
          "Makeup",
          "Fragrances",
          "Hair Care",
          "Nail Care",
        ],
      },
      {
        id: 52,
        activitiy: "Personal Care",
        subactivity: [
          "Bath and Body",
          "Oral Care",
          "Men's Grooming",
          "Feminine Care",
          "Incontinence",
        ],
      },
    ],
    label: "Beauty and Personal Care",
    slug: "Beauty-and-Personal-Care-store",
  },
  {
    id: 6,
    branch: "Sports",
    icon: <MdSportsBasketball className="h-5" />,
    activities: [
      {
        id: 61,
        activitiy: "Fitness",
        subactivity: [
          "Gym",
          "Personal Trainer",
          "Yoga Studio",
          "Martial Arts School",
          "Pilates Studio",
        ],
      },
      {
        id: 62,
        activitiy: "Outdoor Activities",
        subactivity: [
          "Beach",
          "Park",
          "Hiking Trail",
          "Bike Trail",
          "Ski Resort",
          "Boat Rental",
        ],
      },
    ],
    label: "Sports",
    slug: "Sports",
  },
  {
    id: 7,
    branch: "Finance",
    icon: <AiFillBank className="h-5" />,
    activities: [
      {
        id: 71,
        activitiy: "Bank",
        subactivity: [
          "Personal Banking",
          "Business Banking",
          "Mortgage Lending",
          "Investment Services",
          "Wealth Management",
        ],
      },
    ],
    label: "Bank",
    slug: "Bank",
  },
  {
    id: 8,
    branch: "Travel, Insurance",
    icon: <ImAirplane className="h-5" />,
    activities: [
      {
        id: 81,
        activitiy: "Travel and Insurance Company",
        subactivity: [
          "Flight Booking",
          "Hotel Reservation",
          "Travel Insurance",
          "International Tour Packages",
          "Cruise Packages",
        ],
      },
    ],
    label: "Travel and Insurance Company",
    slug: "Travel-and-Insurance-Company",
  },
  {
    id: 10,
    branch: "Real Estate",
    icon: <MdOutlineRealEstateAgent className="h-5" />,
    activities: [
      {
        id: 101,
        activitiy: "Real Estate Agency",
        subactivity: [
          "Residential Property Sales",
          "Commercial Property Sales",
          "Residential Property Rentals",
          "Commercial Property Rentals",
          "Property Management",
        ],
      },
    ],
    label: "Real Estate Agency",
    slug: "Real-Estate-Agency",
  },
];

export default cards;
