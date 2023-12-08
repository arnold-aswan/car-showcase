// import axios from "axios";
// // const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
//   params: { model: "corolla" },
//   headers: {
//     "X-RapidAPI-Key": "bbac5565f5msh10c800f11d11ffcp1a5762jsne64db0baf547",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "bbac5565f5msh10c800f11d11ffcp1a5762jsne64db0baf547",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
