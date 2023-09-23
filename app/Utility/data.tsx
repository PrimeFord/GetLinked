"use client";
//Dummy API

import axios from "axios";
import { useEffect } from "react";
//Navbar Data
export const navInfo: {
  name: string;
  route: string;
}[] = [
  { name: "Overview", route: "/#overview" },
  { name: "Timeline", route: "/#timeline" },
  { name: "FAQs", route: "/#faqs" },
  { name: "Contact", route: "/contact" },
];

//Axios Get
let url = "https://backend.getlinked.ai";

const fetchWeather = async () => {
  // e.preventDefault();
  // if (city.trim().length !== 0 && lat !== 0) {
  //   setEmpty("");
  // } else {
  //   setEmpty("Please enter a city name in this field");
  //   console.log("empty");
  // }
  try {
    const res = await axios.get(`${url}/hackathon/categories-list`);
    console.log(res);
  } catch (error) {
    console.log(error);
    // console.log(error.response.data.message);
  } finally {
  }
  // setEmpty("");/
};

// const fetchProduct = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => setProduct(data.drinks))
//     .catch((err) => console.log(err));
// };

// useEffect(() => {
//   fetchWeather();
// }, []);
