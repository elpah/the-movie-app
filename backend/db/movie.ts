import {
  MongoClient,
  Db,
  MongoClientOptions,
  Collection,
  DeleteResult,
  UpdateResult,
} from "mongodb";
import { v4 as uuidv4 } from "uuid";

const url = "mongodb+srv://themoviedb:themoviedb@cluster0.pjbgsvj.mongodb.net/?retryWrites=true&w=majority";
const dbName = "themoviedb";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions);


const createNewMovie = async (movie: Movie): Promise<Movie> => {
  const newMovie = {
    movieId: uuidv4(),
    title: movie.title,
    year: movie.year,
    posterUrl: movie.posterUrl,
    plot: movie.plot,
    likes: 0,
    dislikes: 0,
  };

  await client.connect();
  const db = client.db(dbName);
  const col = await db.collection("movies");
  await col.insertOne(newMovie);
  // await client.close();

  return newMovie;
};


const deleteMovie = async (movieId: string): Promise<DeleteResult> => {
  await client.connect();
  const db = client.db(dbName);
  const col = await db.collection("movies");
  const result = await col.deleteOne({ movieId });
  // await client.close();
  return result;
};


const getmovies = async (): Promise<any[]> => {
  await client.connect();
  const db = client.db(dbName);
  const col = await db.collection("movies");
  const movies = await col.find().toArray();
  //await client.close();

  return movies;
};


const likeMovie = async (movieId: string): Promise<UpdateResult> => {
  await client.connect();
  const db = client.db(dbName);
  const col = await db.collection("movies");

  const result = await col.updateOne(
    { movieId: movieId },
    { $inc: { likes: 1 } }
  );
  //const movieItem = await col.findOne({ cartId: cart });

  // await client.close();
  return result;
};


const dislikeMovie = async (movieId: string): Promise<UpdateResult> => {
  await client.connect();
  const db = client.db(dbName);
  const col = await db.collection("movies");

  const result = await col.updateOne(
    { movieId: movieId },
    { $inc: { dislikes: 1 } }
  );
  //const movieItem = await col.findOne({ cartId: cart });

  // await client.close();
  return result;
};


export type Movie = {
  movieId: string,
  title: string,
  year: string,
  posterUrl: string,
  plot: string,
  // likes?:number,
  // dislikes?:number
};

export default {
  createNewMovie,
  deleteMovie,
  getmovies,
  likeMovie,
  dislikeMovie,
};
