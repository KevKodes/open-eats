<h1 align="center">OpenEats</h1>

<p align="center">See our site hosted on heroku
<br><a href="https://openeats-app.herokuapp.com/">OpenEats</a></br></p>
&nbsp

## About

---

OpenEats is a clone of OpenTable. Users can view and search for restaurants in the database 
by name or cuising type. Signing up allows users to make reservations, see their dining history, and
save their favorite restaurants to their profile.

<p>&nbsp;</p>

![Home Page]()

## Technologies used

---

- JavaScript
- PostgreSQL
- Sequelize
- npm
- Express.js
- React
- Redux
- All styling was done with raw CSS, no frameworks were used.
<p>&nbsp;</p>

## Development Environment

---

- The database should be generated and seeded with the sequelize commands:
- `npx dotenv sequelize-cli db:create`
- `npx dotenv sequelize-cli db:migrate`
- `npx dotenv sequelize-cli db:seed:all`
- The project can be run locally through the command line with `npm start` in both the backend and frontend directories
<p>&nbsp;</p>

## Wiki Documentation

---

- [User Stories](https://github.com/sam-hearst/Comic-collection/wiki/User-Stories)
- [Front End Routes](https://github.com/KevKodes/open-eats/wiki/Frontend-Routes)
- [Database Schema](https://drawsql.app/aaprojects/diagrams/openeats)
- [Feature List](https://github.com/KevKodes/open-eats/wiki/Features)
- [API Documentation](https://github.com/KevKodes/open-eats/wiki/API-Documentation)
<p>&nbsp;</p>

## Key Technical Features

---


### AJAX for the reviews


![Reviews]()
![Reviews]()


<p>&nbsp;</p>

## Obstacles

---


### Managing state with Redux
Prior to this project, I only had a few days of experience with Redux. As such, managing the shape of the state in my 
application became one of the biggest learning opportunities. Through trial and error, I 

<p>&nbsp;</p>

### Styling

Styling the the website pages using raw CSS was another obstacle we had. There are hundred of lines of code just for the CSS styling. We use mixins Pug templates in order to reuse most of the code for the styling and the html/pug. This save us probably hundred of lines code as well.

<p>&nbsp;</p>

## Code Samples



## Future Improvements

This project was a sprint. A couple features I would like to implement in the future are:
- Increasing the amount of data in the database by either seeding more data or connecting to an external API.
- Linking to the google maps API to show a mini map of individual restaurant locations.
- Adding the ablility for users to create reviews and ratings of restaurants.
- Updating the splash page to include multiple rows of restaurants of various types.
- Adding a search modal to allow users to search from any page on the site.
- Creating buttons for restaurant rows on the splash page for carousel functions in lieu of horizontal scrolling.
