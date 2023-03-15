import React from "react";
import SearchMovie from "../searchMovieComp/SearchMovie";
import myimg from "/Users/salt-dev/Desktop/TheMovieListApp/frontend/src/images/elpahlogo.png";
import "./Nav.css";

type Props = {
  onAddSearchMovie: (data: Movie) => void;
};
type Movie = {
  movieId: string;
  title: string;
  year: string;
  posterUrl: string;
  plot: string;
  likes: number;
  dislikes: number;
};

export default function Nav({ onAddSearchMovie }: Props) {
  return (
    <div className="nav__headercontainer">
      <img className="nav__logo-image" src={myimg} alt="No found" />
      <div className="nav__search-container">
        <SearchMovie onAddSearchMovie={onAddSearchMovie} />
      </div>
    </div>
  );
}
