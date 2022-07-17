import React, { useState } from "react";
import "./styles.css";

// data for cities
const citiesList = {
  Delhi: [
    {
      Name: "Chole Bhature",
      Image:
        "https://media.istockphoto.com/photos/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-picture-id979912108?k=20&m=979912108&s=612x612&w=0&h=2qIDH_ewNV8LoOmjzur2PskebAWdPCRekViBjyAT4Xw=",
      Description:
        "A common meal in the northern regions of the Indian subcontinent is chole bhature. It consists of bhatura/puri, a fried bread made from maida, and chana masala, a spicy white chickpea dish."
    },
    {
      Name: "Gulab jamun",
      Image:
        "https://media.istockphoto.com/photos/gulab-jamun-in-clay-pot-indian-dessert-or-sweet-dish-picture-id1188000132?k=20&m=1188000132&s=612x612&w=0&h=G1r0Z3wPhju7yu9jTfA8ANILb4S20JevxSxb-QpuZwg=",
      Description:
        "An Indian dessert made of paneer balls that have been deep-fried and then cooked in sugar syrup."
    },
    {
      Name: "Butter Chicken",
      Image:
        "https://media.istockphoto.com/photos/butter-chicken-served-with-indian-naan-bread-picture-id1273713110?k=20&m=1273713110&s=612x612&w=0&h=5v76rK1JaQvS1GdLkcG67f4K8Pdg7bzeQ7UI67LJ07E= ",
      Description:
        "Indian cuisine's version of butter chicken, sometimes referred to as murgh makhani, is a sort of curry cooked with chicken in a spicy tomato and butter sauce. For its thick texture, its sauce is renowned."
    }
  ],
  Kolkata: [
    {
      Name: "Kati Roll",
      Image:
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/07/030816_BestRolls_Rollmall.jpg",
      Description:
        "A street food delicacy from Kolkata, West Bengal, is called a kati roll. It is a skewer-roasted kebab wrapped in paratha bread in its original form, but throughout time, several variations have emerged that are now all referred to as kati rolls."
    },
    {
      Name: "Biryani",
      Image:
        "https://i.pinimg.com/originals/05/bd/a2/05bda2af264339d2a1b08dd169408b5d.jpg",
      Description:
        "The Kolkata biryani, traditionally, is a dish where the meat and the potatoes are slow cooked in clarified butter, on low heat (dumpukht). The uncooked rice, the meat and potatoes are then layered in a big-based pot (handi) to which certain spices such as cardamom, mace, saffron, cloves and sweet ittar are added."
    },
    {
      Name: "Rosgulla",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7ewzmI1tV7sCRRBOAbZj6-JoT8fQehYbkA&usqp=CAU",
      Description:
        "an Indian sweet consisting of a ball of paneer (curd cheese) cooked in syrup."
    }
  ],
  Lucknow: [
    {
      Name: "Galouti Kebab",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_b-VHsVwa0RnTDAIj4TLkgDejA-A05o_qzw&usqp=CAU",
      Description:
        "Galouti meant 'soft', something that melts in the mouth, and that was the purpose."
    },
    {
      Name: "Nihari Kulcha",
      Image:
        "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/qjiqji4xzhqt4qfo7sl4",
      Description:
        "The nihari originates from Arabic nahar, meaning it was originally eaten by nawabs in the Mughal Empire as a breakfast course following Fajr prayer"
    },
    {
      Name: "Malai ki Gilori",
      Image: "https://pbs.twimg.com/media/CPp0PmRUcAAKKcD.jpg",
      Description:
        "This delicacy from the city of nawabs, is a pure delight of milk and malai."
    }
  ]
};

export default function App() {
  const [selectCity, setCityName] = useState("Delhi");

  function CityClickHandler(cityName) {
    setCityName(cityName);
  }

  return (
    <div className="App">
      <header>
        <h1 class="heading">Cities and foods</h1>
        <p> click on the city to check their famous foods.</p>
        <nav class="city_Name_list">
          {Object.keys(citiesList).map((cityName) => (
            <button onClick={() => CityClickHandler(cityName)}>
              {cityName}
            </button>
          ))}
        </nav>
      </header>

      <hr class="divider"></hr>

      <div>
        <ul class="list-holder">
          {citiesList[selectCity].map((food) => (
            <li class="list">
              <div class="food-name">{food.Name}</div>
              <div>
                <img class="food-img" src={food.Image} alt={food.name} />
              </div>
              <div>{food.Description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
