function Movie(props) {
  // Make one star image for each grade point
  let stars = [];
  for (let i = 0; i < props.movie.grade; i++) {
    stars.push(<img key={i} src="/star.png" alt="Star" className="star" />);
  }

  function handleDelete() {
    props.deleteMovie(props.index);
  }

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      data-grade={props.movie.grade}
      data-title={props.movie.title}>
      {props.movie.title}
      <span>
        {stars}
        <img
          src="/delete.png"
          alt="Delete movie"
          className="delete-movie-icon"
          onClick={handleDelete}
        />
      </span>
    </li>
  );
}

export default Movie;
