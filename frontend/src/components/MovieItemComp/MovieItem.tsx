import React from 'react';
import "./MovieItemStyle.css"
import { Movie } from '../../types';
type Props = {
    movie: Movie,
    onDeleteMovie: (movieId: string)=> void,
    onLikeMovie:(movieId: string)=> void,
    onDislikeMovie:(movieId: string)=> void,
}


function MovieItem({movie, onDeleteMovie, onLikeMovie, onDislikeMovie}: Props) {
    return (
        <div className='movie__card'>            
            <img className='movie__img' src={movie.posterUrl} alt="img not found" />
            <h3 className='movie__title'>{movie.title}</h3>
            <p className='movie__year'>{movie.year}</p>
            <p className='movie__plot'>{movie.plot}</p>
            <div className='Movie__buttonContainer'>
            <button className="delete__button" type='button' onClick={() => onDeleteMovie(movie.movieId)}>Delete</button>
            <div>
            <button className='like__button' type='button' onClick={() => onLikeMovie(movie.movieId)}>Like { movie.likes}</button>
            <button className='dislike__button' type='button' onClick={() => onDislikeMovie(movie.movieId)}>Dislike {movie.dislikes}</button>
            </div>
            </div>
        </div>
    
    );
}

export default MovieItem;