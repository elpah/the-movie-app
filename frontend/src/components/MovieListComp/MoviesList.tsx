import React from 'react';
import MovieItem from '../MovieItemComp/MovieItem';
import "./MovieList.css"

type Props = {
    movies: Movie[],
    onDeleteMovie: (movieId: string)=> void,
    onLikeMovie:(movieId: string)=> void,
    onDislikeMovie:(movieId: string)=> void,
}

type Movie = {
    movieId: string
    title: string
    year: string
    posterUrl: string
    plot:string
    likes:number
    dislikes:number
  }

function MoviesList({movies, onDeleteMovie, onLikeMovie, onDislikeMovie}: Props) {
    return (
        <>
        <h1 className='movie__listHeader'>Movie List</h1>

        <div className='movie__list'>
            {
                movies.map(movie =>
                    <MovieItem 
                    key={movie.movieId} 
                    movie={movie}
                    onDeleteMovie={onDeleteMovie} 
                    onLikeMovie={onLikeMovie}
                    onDislikeMovie={onDislikeMovie}
                    />
                )
            }
        </div>
        </>
    );
}

export default MoviesList;