import React from "react";
import SearchMovie from "../searchMovieComp/SearchMovie";
import myimg from '../../images/elpahlogo.png';
import "./Nav.css";
import { Movie } from "../../types";


type Props = {
  onAddSearchMovie: (data: Movie) => void;
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
