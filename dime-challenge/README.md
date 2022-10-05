# DIME-Beauty-Challenge

This is a demo website created as part of the DIME take home.

## Status

This project is currently in development however, the core functionality works. The website is a plain landing page that has a total of 4 items retrieved from DIME's Shopify storefront. User's can add these items to a cart and if a total price of $100 is bundled in the cart, a 10% discount is added to the total.

Styling is also incomplete as the website requires breakpoints to accomodate more screen sizes and mobile devices.

## Technologies

This app was created using React.js as a framework and styled with plain css in conjuction with Material UI components. They were chosen due to their large support and my own personal famliarity with them. The Storefront api was also used to gather the products displayed in the demo. I created a simpled fetch request to query the api and return the results.

## Setup

To install this project, download or clone the repo and then run `npm install` to install all the dependencies. `npm start` will run the development server where further changes can be begin. This project will run on `localhost:3000`.
