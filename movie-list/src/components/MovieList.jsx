import Movie from './Movie'

function MovieList(props) {
  // Make one <Movie> for each movie in the list
  let movieItems = []
  for (let i = 0; i < props.movies.length; i++) {
    movieItems.push(
      <Movie key={i} index={i} movie={props.movies[i]} deleteMovie={props.deleteMovie} />
    )
  }

  return <ul className="list-group">{movieItems}</ul>
}

export default MovieList
