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
A key feature that shows our team's technical abilities is using AJAX on the reviews portion of our site.  A user
is able to navigate to a comic and add a review for that comic.  Without refreshing, the review shows up on the page and the user then has the ability to edit and remove that review after having created it.  We accomplished this by using api routes. When the user clicks "submit review" a fetch call is made to an api which updates our database with the review and then sends back a JSON review object.  The JSON object is parsed and the information for the review is then added to the document as shown in the image below.


![Reviews]()
![Reviews]()




### Custom backgrounds for specific comics



- Creating the search bar logic querying for all the database information was definitely one of toughest implementations.
- Using AJAX to create a dynamic and responsive UI for the Website was one of the challenges we accomplished on this project.
<p>&nbsp;</p>

## Obstacles

---


### Managing state with Redux
Prior to this project, I only had a few days of experience with Redux. As such, managing the shape of the state in my 
application became one of the biggest learning opportunities. Through trial and error, I 

<p>&nbsp;</p>

### User Reviews

Using AJAX to add user reviews was our first AJAX implementation of dynamic UI and was hard to make it work.

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
