# CarHub

## Overview

Welcome to the Car Properties Showcase Web Application! This web application is designed to provide users with a visually appealing and user-friendly interface to explore various car properties. Whether you are a car enthusiast or looking for specific information about cars, this application allows you to filter and find cars based on their make, manufacturer, year, and the type of fuel they use.

## Preview

![Screenshot from 2023-12-12 11-55-56](https://github.com/arnold-aswan/car-showcase/assets/135007872/a7d32bd8-cf06-4854-9d38-21824de35895)

![Screenshot from 2023-12-12 11-56-20](https://github.com/arnold-aswan/car-showcase/assets/135007872/39ff467b-40af-4b45-b863-5deec5a18206)

## Features

1. Car Showcase.<br/>
   Browse through a diverse collection of cars, each with detailed information about their properties. The application provides a rich display of car images and essential details.

2. Filtering Options.<br/>
   Easily narrow down your search using the following filters:

- **Make:** Filter cars based on their make (e.g., Ford, Toyota, Honda).
- **Model:** Explore cars from specific manufacturers (e.g., corolla, stinger, odyssey, outlander).
- **Year:** Find cars manufactured in a particular year or within a range.
- **Fuel Type:** Filter cars based on the type of fuel they use, including gas or electric.

1. Responsive Design.<br/>
   The application is built with a responsive design, ensuring a seamless experience across various devices, including desktops, tablets, and mobile phones.

2. User-friendly Interface.<br/>
   The intuitive user interface makes navigation easy for users of all levels. Whether you're a tech-savvy user or a casual browser, you'll find the application straightforward and enjoyable to use.

## Technologies Used

1. NextJS
2. Material UI
3. Headless UI
4. Tailwind CSS

## Project Setup And Installation

### Getting Started

1. Navigate to a directory you would like to clone the project.
2. Clone the repository in the desired directory: `git clone git@github.com:arnold-aswan/car-showcase.git`
3. Run `npm install` to install the required dependencies.

### Environment Variables

Create a `.env ` file in the root directory of the cloned repository.

### Cars Details API

1. Sign up to [rapidapi](https://rapidapi.com/)
2. Search and subscribe to [Cars by Api-Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas/) api
3. Get your api key and place it in the `.env` file you created as: `RAPID_API_KEY="your_api_key `

### Setup

Once you have the api key and you've created the `.env` file and placed the api key in there:

1. Open the file with an IDE of your choice i.e Visual studio code.
2. Navigate to the root directory of the project.
3. Run `npm run dev` to launch the app in development mode.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Author & License

[Arnold Aswani](https://github.com/arnold-aswan)

Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for more details.
