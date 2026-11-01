import { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";
import OrderByAlphaButton from "./OrderByAlphaButton";
import OrderByGradeButton from "./OrderByGradeButton";

function MovieApplication() {
  const [movies, setMovies] = useState([]);

  function addMovie(title, grade) {
    let newList = movies.slice(); // copy the list
    newList.push({ title: title, grade: grade });
    setMovies(newList);
  }

  function deleteMovie(index) {
    let newList = [];
    for (let i = 0; i < movies.length; i++) {
      if (i !== index) {
        newList.push(movies[i]);
      }
    }
    setMovies(newList);
  }

  function orderByAlpha() {
    let newList = movies.slice();
    newList.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }

      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setMovies(newList);
  }

  // Sort the movies with the highest grade first
  function orderByGrade() {
    let newList = movies.slice();
    newList.sort(function (a, b) {
      return b.grade - a.grade;
    });
    setMovies(newList);
  }

  return (
    <div className="container movie-app my-5">
      <h1>Min filmlista</h1>

      <AddMovieForm addMovie={addMovie} />

      <h2 className="mt-5">Inlagda filmer</h2>
      <MovieList movies={movies} deleteMovie={deleteMovie} />

      <div className="mt-3">
        <OrderByAlphaButton orderByAlpha={orderByAlpha} />
        <OrderByGradeButton orderByGrade={orderByGrade} />
      </div>
    </div>
  );
}

export default MovieApplication;
