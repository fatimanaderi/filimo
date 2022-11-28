import { tags } from "src/api/conf/tags";
import { movies } from "src/api/conf/movies";

// this func get type of movies and filter all movie to find movies with this type
const getFilteredMovies = (type) => {
  let filteredMovies = [];
  for (let movie of movies) {
    for (let ganr of movie.ganre) {
      if (ganr == type) {
        filteredMovies.push(movie);
      }
    }
  }
  return filteredMovies;
};

const getTypes = (len = 12) => {
  const arrTypes = [];
  for (let ganre of tags) {
    let objTypes = {
      movies: getFilteredMovies(ganre.name).slice(0, len),
      title: ganre.name,
      titleEN: ganre.englishname,
    };
    arrTypes.push(objTypes);
  }
  return arrTypes;
};

export const allMovies = getTypes();

export const types = getTypes(6);
