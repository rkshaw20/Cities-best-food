import React, { useState } from "react";
import "./styles.css";

// data for cities
const citiesList = {
  Delhi: [
    {
      Name: "Chat",
      Image: "/",
      Description: ""
    },
    {
      Name: "Chole Bhature",
      Image: "",
      Description: ""
    },
    {
      Name: "Butter Chicken",
      Image: "/",
      Description: ""
    }
  ],
  Kolkata: [
    {
      Name: "Roll",
      Image: "/",
      Description: ""
    },
    {
      Name: "Biryani",
      Image: "/",
      Description: ""
    },
    {
      Name: "Rosgulla",
      Image: "/",
      Description: ""
    }
  ],
  Lucknow: [
    {
      Name: "Galawti Kebab",
      Image: "",
      Description: ""
    },
    {
      Name: "Nihari Kulcha",
      Image: "",
      Description: ""
    },
    {
      Name: "Malai ki Gilori",
      Image: "",
      Description: ""
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
          {citiesList[selectCity].map((city) => (
            <li class="list">
              <div>{city.Name}</div>
              <div>{city.Description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
