import { getGanreMovies, getSearchMovies } from "src/services/movies.service";
import { allMovies } from "src/composiables/movies/allMovies";
import { reactive, computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export const medium = ref(false);
export const searchInput = ref("");
export const allMovie = reactive({});
export const openDialog = () => {
  medium.value = true;
};
const closeDialog = () => {
  searchInput.value = "";
  medium.value = false;
};
export const useSearchDialog = () => {
  const router = useRouter();
  const searchHandler = (params) => {
    router.push({ name: "movie", params });
    closeDialog();
  };
  onMounted(() => {
    getSearchMovies()
      .then(({ data }) => Object.assign(allMovie, data))
      .catch((e) => console.log(e));
  });
  return {
    searchHandler,
  };
};

export const filteredMovie = computed(() => {
  let movies = allMovie.movies.filter((movie) => {
    return (
      movie.name.name.includes(searchInput.value) ||
      movie.name.englishname
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    );
  });
  if (!searchInput.value.length) return movies.slice(0, 7);
  else return movies;
});
