import express from "express";
import movieDb from "../db/movie";

const router = express.Router();

router.get("/:title", async (req, res) => {
  const title = req.params.title;
  const apiKey = "19d9136f";
  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    const data = await response.json();
    const movie = await movieDb.createNewMovie({
      movieId: "",
      title: data.Title,
      year: data.Year,
      posterUrl: data.Poster,
      plot: data.Plot,
    });
    res.status(200).json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching movie data");
  }
});


router.get('/', async (req, res) => {
  try {
    const movieList = await movieDb.getmovies();

    res.status(200).json(movieList);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching movie data');
  }
});



router.post('/', async (req, res) => {
  try {
    const movie = await movieDb.createNewMovie({
      movieId: "",
      title: req.body.title,
      plot: req.body.plot,
      posterUrl: req.body.posterUrl,
      year: req.body.year
    });

    res.status(200).json(movie);

  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching movie data');
  }
});



router.delete('/:movieId', async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const movie = await movieDb.deleteMovie(movieId);
    res.status(200).json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting movie');
  }
});


router.patch('/:movieId/like', async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const movie = await movieDb.likeMovie(movieId);
    res.status(200).json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error liking movie');
  }
});


router.patch('/:movieId/dislike', async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const movie = await movieDb.dislikeMovie(movieId);
    res.status(200).json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error disliking movie');
  }
});


export default router;
