import { useState } from "react";

function AddMovieForm(props) {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleGradeChange(event) {
    setGrade(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (title === "") {
      alert("Du måste ange en titel!");
      return;
    }
    if (grade === "") {
      alert("Du måste välja ett betyg!");
      return;
    }

    props.addMovie(title, Number(grade));

    setTitle("");
    setGrade("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="border-bottom pb-2">Lägg till en film</legend>

        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bold">
            Titel:
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Titel här..."
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="grade" className="form-label fw-bold">
            Betyg:
          </label>
          <select
            id="grade"
            className="form-select"
            value={grade}
            onChange={handleGradeChange}>
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Spara film
        </button>
      </fieldset>
    </form>
  );
}

export default AddMovieForm;
