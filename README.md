# Dispatch simulation app
This app simulates dispatching a delivery process from point A to B via React and Google maps API, this is my first ever attempt with google maps api along with react, and this app is still far from being perfect, there are surely a lot of exciting new stuff to learn and implement!

in order for this app to run please make sure to have node.js v 10.x.x installed or later along with NPM for more info please visit [this link](https://nodejs.org/en/download/) and you will find all the information you need about node.js and NPM.

---  
## Available Scripts
npm start -> to start the react app and run google maps 

npm run fizz -> to run a fizz buzz style program

---

## to run this app please do the following:
1. on your favorite terminal app navigate to the dispatch app folder `cd dispatch` then run: `npm install` or just `npm i` for a shortcut.
2. make sure to have a valid Google maps API key, if you don't please visit [this link](https://developers.google.com/maps/documentation/javascript/get-api-key) to get one.
3. once you have your API key ready please place it in the Google maps script @ public/index.html `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR-GOOGLE-API-KEY&libraries=places,geometry,drawing&sensor=false"></script>`
4. if everything is in place now simply run `npm start` to spin up the dev server

## to run the Fizz Buzz program
1. again make sure you have node.js installed
2. simply run `npm run fizz` to see the results =]