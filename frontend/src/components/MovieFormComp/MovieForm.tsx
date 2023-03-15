import React, { FormEvent, ChangeEvent, useState, useEffect } from "react";
import "./MovieForm.css"
type Props = {
    onAddMovie: (data: Movie, resetForm: () => void) => void;
}

  type Movie = {
    movieId?:string
    title: string
    year: string
    posterUrl: string
    plot:string
  }
  
function MovieForm({onAddMovie}: Props) {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [posterUrl, setPosterUrl] = useState<string>("");
    const [plot, setPlot] = useState<string>("");

    function handleVisibleForm() {
      setIsFormVisible(!isFormVisible);
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddMovie({
        title: title,
        plot: plot,
        posterUrl: posterUrl,
        year: year
     }, resetForm)
  };
  function resetForm(){
    setTitle('');
    setYear('');
    setPosterUrl('');
    setPlot('');
  }

    return (
      <>
      <button className="add__newmovie" onClick={handleVisibleForm}>Add New</button>
       <form 
        className={`movie__form ${isFormVisible ? "visible" : ""}`}
        onSubmit={handleSubmit}
        >
        <h3 className="form__header">Add New Movie</h3>
        <div className="input__div">
          <label className="input__label">Title:</label>
          <input
            className="input__field"
            type="text"
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </div>
        <div className="input__div">
          <label className="input__label Plot">Plot:</label>
          <input
            className="input__field"
            type="text"
            value={plot}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPlot(event.target.value)
            }
          />
        </div>
        <div className="input__div">
          <label className="input__label">ImgUrl:</label>
          <input
            className="input__field"
            type="text"
            value={posterUrl}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPosterUrl(event.target.value)
            }
          />
        </div>
        <div className="input__div">
          <label className="input__label">Year:</label>
          <input
            className="input__field"
            type="text"
            value={year}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setYear(event.target.value)
            }
          />
        </div>
        <button className="Form__button" type="submit">
          Add Movie
        </button>
      </form>
      
      </>
    );
}

export default MovieForm;