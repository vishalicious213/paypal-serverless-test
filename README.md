# Paypal / Netlify Serverless Function Test

This project is a simple demonstration of serverless functionality, using Netlify Functions. It features two anchor links and two buttons, which allow users to interact with serverless functions that navigate to pages or send back responses in the console, respectively.

__Deployed at:__ https://vish213-serverless-test.netlify.app/

## Features

- Two anchor tags for external navigation
- Two buttons with interactive functionality

One anchor tag & one button makes a standard API call to the serverless function. A 2nd anchor tag & button make calls using the path to the serverless function, to demonstrate how to use each method. They both return the same results using string query parameters.

To see the results of the button clicks, open the browser's developer tools and go to the `console` tab. The JSON message responses will display there.

## Technologies Used

- HTML5 – Structuring the web page
- CSS3 – Styling and layout
- JavaScript (ES6) – Handling button interactions
- Netlify – Serverless hosting and deployment