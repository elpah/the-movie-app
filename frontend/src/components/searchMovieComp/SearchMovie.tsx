import React, { FormEvent, useState } from "react";
import "./SearchMovie.css";

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
        });
        console.log(data);
      })

      .catch((error) => console.error(error));
  }
  //change any type later
  function handleInputChange(event: any) {
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