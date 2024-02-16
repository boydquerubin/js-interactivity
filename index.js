console.log("connected");

var message = document.querySelector("#message");

function addMovie(event) {
  event.preventDefault();

  var inputField = document.querySelector("#movieInput");
  var movieTitleText = inputField.value;

  var movie = document.createElement("li");

  var movieTitle = document.createElement("span");
  movieTitle.textContent = movieTitleText;

  movieTitle.addEventListener("click", crossOffMovie);

  movie.appendChild(movieTitle);

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", deleteMovie);

  movie.appendChild(deleteBtn);

  var movieList = document.querySelector("#movieList");
  movieList.appendChild(movie);

  inputField.value = "";

  message.textContent = "Movie added!";
}

function revealMessage() {
  message.classList.remove("hide");

  setTimeout(function () {
    message.classList.add("hide");
  }, 1000);
}

function deleteMovie(event) {
  event.target.parentNode.remove();
  var deletedMovieTitle =
    event.target.parentNode.querySelector("span").textContent;
  message.textContent = "Movie deleted!";
  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  var crossedOffMovieTitle = event.target.textContent;
  if (event.target.classList.contains("checked")) {
    message.textContent = "'" + crossedOffMovieTitle + "' watched!";
  } else {
    message.textContent = "'" + crossedOffMovieTitle + "' added back!";
    revealMessage();
  }
}

var form = document.querySelector("form");
form.addEventListener("submit", addMovie);
