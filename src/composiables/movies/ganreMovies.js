import { reactive, computed, ref } from "vue";
import { getGanreMovies } from "src/services/movies.service";

export const searchInput = ref("");

export const ganreMovies = reactive({});

export const setGanreMovies = (type, tag) => {
  getGanreMovies({ type, tag })
    .then(({ data }) => Object.assign(ganreMovies, data))
    .catch((e) => console.log(e));
};

export const filteredList = computed(() => {
  return ganreMovies.movies.filter((movie) => {
    return (
      movie.name.name.includes(searchInput.value) ||
      movie.name.englishname
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    );
  });
});
