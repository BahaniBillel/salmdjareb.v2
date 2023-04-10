import { db } from "../firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { AiFillCar, AiFillBank } from "react-icons/ai";

export default function UploadData() {
  const data = { name: "John", age: 30 };
  const handleClick = async () => {
    await setDoc(doc(db, "businesses", "som-id"), {
      CatId: 11,
      catName: "Véhicle Rental",

      businesses: [
        {
          businessId: 111,
          businessName: "Parkos",
          logo: "",
          address: "Rue amalou youcef, IMP AK , n°15,Bouarfa ",
          city: "Blida",
          zip: "09000",
          country: "Algerie",
          website: "www.parkos.com",
          industry: "Location véhicules avec ou sans chauffeurs",
          reviewsCount: 253,
          contact: {
            name: "Bahani Billel",
            email: "billel.bahani@gmail.com",
            phone: "0554 990 201",
          },
        },
        {
          businessId: 112,
          businessName: "Taj Mahal",
          logo: "",
          address: "Pancsheel Enclave, New Delhi",
          city: "New Delhi",
          zip: 110017,
          country: "India",
          website: "www.tajmahal.com",
          industry: "Hospitality",
          reviewsCount: 1756,
          contact: {
            name: "Rajesh Kumar",
            email: "rajesh@tajmahal.com",
            phone: "+91-11-6614-8888",
          },
        },
        {
          businessId: 113,
          businessName: "Sofa King",
          logo: "",
          address: "1234 Main Street",
          city: "Anytown",
          zip: 12345,
          country: "USA",
          website: "www.sofaking.com",
          industry: "Furniture",
          reviewsCount: 102,
          contact: {
            name: "John Smith",
            email: "john@sofaking.com",
            phone: "(123) 456-7890",
          },
        },
        {
          businessId: 114,
          businessName: "La Parisienne",
          logo: "",
          address: "10 Rue du Faubourg Saint-Honoré",
          city: "Paris",
          zip: 75008,
          country: "France",
          website: "www.laparisienne.com",
          industry: "Fashion",
          reviewsCount: 789,
          contact: {
            name: "Marie Dupont",
            email: "marie@laparisienne.com",
            phone: "+33 1 42 65 63 63",
          },
        },
        {
          businessId: 115,
          businessName: "Jungle Surf",
          logo: "",
          address: "Calle 20, Playa del Carmen",
          city: "Playa del Carmen",
          zip: 77710,
          country: "Mexico",
          website: "www.junglesurf.com",
          industry: "Surf Shop",
          reviewsCount: 45,
          contact: {
            name: "Juan Hernandez",
            email: "juan@junglesurf.com",
            phone: "+52 984 123 4567",
          },
        },
        {
          businessId: 116,
          businessName: "GreenThumb",
          logo: "",
          address: "100 Main Street",
          city: "Anytown",
          zip: 12345,
          country: "USA",
          website: "www.greenthumb.com",
          industry: "Landscaping",
          reviewsCount: 341,
          contact: {
            name: "Sarah Johnson",
            email: "sarah@greenthumb.com",
            phone: "(123) 456-7890",
          },
        },
      ],
    });
    console.log("Data uploaded successfully!");
    alert("uploaded");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-goldenBeige px-6 py-3 hover:scale-95"
    >
      Upload Data
    </button>
  );
}
