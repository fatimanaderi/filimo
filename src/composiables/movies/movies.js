import { reactive, onMounted, ref } from "vue";
import { getMovies, getSpecficsMovies } from "src/services/movies.service.js";
import { useRoute, useRouter } from "vue-router";

export const useMovies = () => {
  const movies = reactive({});
  const route = useRoute();
  const router = useRouter();
  const setMovies = (type, pageSize, pageNumber) => {
    getMovies({
      type,
      pageSize,
      pageNumber,
    })
      .then((response) => Object.assign(movies, response.data))
      .catch((e) => console.log(e));
  };
  const pageNumber = ref(1);

  const changePageNumber = () => {
    setMovies(route.params.type, 4, pageNumber.value);
    router.push({
      name: "movies",
      params: { type: route.params.type },
      query: { page: pageNumber.value },
    });
  };
  onMounted(() => setMovies(route.params.type, 4, 1));

  return {
    movies,
    pageNumber,
    setMovies,
    changePageNumber,
  };
};

export const useSpecficsMovies = () => {
  const specficsMovies = reactive({});
  onMounted(() => {
    getSpecficsMovies({ type: "spesfics", pageSize: 8 })
      .then((response) => Object.assign(specficsMovies, response.data))
      .catch((e) => console.log(e));
  });
  return {
    specficsMovies,
  };
};
