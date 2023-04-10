import React, { useState, useEffect } from 'react';
import './App.css';
import { Movie } from './types';
import MovieForm from './components/MovieFormComp/MovieForm';
import MoviesList from './components/MovieListComp/MoviesList';
import Nav from './components/NavComp/Nav';
import Footer from './components/FooterComp/Footer';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    fetchMovies()
  }, [])
  
  async function fetchMovies() {
    const response = await fetch("http://localhost:5000/api/movies/");
    const results = await response.json();
    setMovies(results);
  }

  function handleSaveSearchMovie(data:Movie){
    const searchMovie = data;
    if(data)
    setMovies((prevState) => {
      return [searchMovie,...prevState];
    });
    console.log(movies);
  }

  async function handleSaveMovie(data: any, resetForm: ()=> void){
    const response = await fetch("http://localhost:5000/api/movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const movie = await response.json();
    if(movie){
      setMovies((prevState) => {
        return [movie,...prevState  ]
      });
    }
    if (response.ok) {
      resetForm();
    } 
  }

  async function handleDeleteMovie(movieId: string){
    const response = await fetch(`http://localhost:5000/api/movies/${movieId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setMovies((prevState) => prevState.filter((item) => item.movieId !== movieId));
    }
  }

async function handleLikeMovie(movieId: string){
  const response = await fetch(`http://localhost:5000/api/movies/${movieId}/like`, {
      method: "PATCH",
    });

    if (response.ok) {
      const movieItems = [...movies];
      const movieIndex = movieItems.findIndex(movie => movie.movieId === movieId);
      movieItems[movieIndex].likes =  movieItems[movieIndex].likes + 1;
      setMovies(movieItems);
    }
  }

  async function handleDislikeMovie(movieId: string){
    const response = await fetch(`http://localhost:5000/api/movies/${movieId}/dislike`, {
      method: "PATCH",
    });

    if (response.ok) {
      const movieItems = [...movies];
      const movieIndex = movieItems.findIndex(movie => movie.movieId === movieId);
      movieItems[movieIndex].dislikes =  movieItems[movieIndex].dislikes + 1;
      setMovies(movieItems);
    }
  }

  return (
    <>
    <Nav onAddSearchMovie={handleSaveSearchMovie}/>
    <MovieForm onAddMovie={handleSaveMovie}/>
    <MoviesList 
      movies={movies}  
      onDeleteMovie={handleDeleteMovie}
      onLikeMovie={handleLikeMovie}
      onDislikeMovie={handleDislikeMovie}
      />
      <Footer/>
      </>
  );
}

export default App;
