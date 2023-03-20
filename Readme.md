Movie List App

This is a movie list app. It allows a user to add movies to a database, Users can search for movies, and delete movies from the list and also add likes and dislikes. The app uses the external API http://www.omdbapi.com/ to fetch movie data.

Technologies Used

Frontend:-React 
Backend:-Express and Node.js
Database:-MongoDB

Getting Started

git clone the repository to your local machine
cd into the backend folder and run npm install and npm start
cd into the frontend folder and run npm install

Functionality

-Add a movie to the list by entering the movie title, plot, image URL, and year of release into a form
-Search for a movie by entering the movie title into a search bar
Delete a movie from the list
Add likes or dislikes to a movie

API Routes

POST /movies - Adds a movie to the database
GET /movies - Retrieves all movies from the database
GET /movies/:id - Retrieves a single movie from the database by ID
PATCH /movies/:id - Updates a movie likes and dislikes in the database by ID
DELETE /movies/:id - Deletes a movie from the database by ID
GET /search/:title - Searches for a movie using the external API by title and returns the first result
