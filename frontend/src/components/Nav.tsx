import React from 'react';
import SearchMovie from './searchMovieComp/SearchMovie';
import "./Nav.css";

type Props = {
    onAddSearchMovie: (data: Movie) => void;
  }
  type Movie = {
  
    movieId:string
    title: string
    year: string
    posterUrl: string
    plot:string
    likes:number
    dislikes:number
  }
  
export default function Nav({onAddSearchMovie}:Props) {

  
  return (
    
     <div className="nav__headercontainer"> 
    <nav className="nav__logopara">
    <img className="nav__logo-image" src="/Users/salt-dev/Desktop/TheMovieListApp/frontend/src/images/elpahlogo.png" alt="No found"/>
    <p className='nav__latest'>Latest</p>
    <p className="nav__contact">Contact</p>
  </nav>
  <div className='nav__search-container'>
    <SearchMovie onAddSearchMovie={onAddSearchMovie}/>
  </div>
</div>

  )
}
