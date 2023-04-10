import React, { ChangeEvent, FormEvent, useState } from "react";
import "./SearchMovie.css";
import { Movie } from "../../types";

type Props = {
  onAddSearchMovie: (data: Movie) => void;
};


export default function SearchMovie({ onAddSearchMovie }: Props) {
  const [input, setInput] = useState("");

  function formSubmit(event: FormEvent) {
    event.preventDefault();
    fetch(`http://localhost:5000/api/movies/${input}`)
      .then((response) => response.json())
      .then((data) => {
        onAddSearchMovie({
          movieId: data.movieId,
          title: data.title,
          plot: data.plot,
          posterUrl: data.posterUrl,
          year: data.year,
          likes: data.likes,
          dislikes: data.dislikes,
        })
      })
      .catch((error) => console.error(error));
  }
  //change any type later
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  return (
    <form className="Search__movieform" onSubmit={formSubmit}>
      <input
        className="Search__movieform-input"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button className="search__movieButton" type="submit">
        Search
      </button>
    </form>
  );
}