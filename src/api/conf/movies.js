import { animations } from "src/api/data/movies/tags/animations";
import { iranians } from "src/api/data/movies/tags/iranians";
import { foreigns } from "src/api/data/movies/tags/foreigns";
import { newMovies } from "src/api/data/movies/tags/newMovies";
import { spesfics } from "src/api/data/movies/tags/spesfics";
import { koreans } from "src/api/data/movies/tags/koreans";

export const movies = [
  ...animations,
  ...iranians,
  ...foreigns,
  ...koreans,
  ...spesfics,
  ...newMovies,
];
