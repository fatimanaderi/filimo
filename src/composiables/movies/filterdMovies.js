import {
  getMovieProperties,
  getFilterdMovies,
} from "src/services/movies.service";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export const filterdmovie = reactive([]);
export const useCateGoryFilter = (classBtn) => {
  const movieProperties = reactive({});
  const listCategory = ref({});
  const router = useRouter();
  onMounted(() => {
    getMovieProperties()
      .then(({ data }) => {
        if (classBtn)
          Object.assign(movieProperties, data.movieProperties.slice(0, 6));
        else Object.assign(movieProperties, data.movieProperties);
      })
      .catch((e) => console.log(e));
  });
  const setFilterdMovies = () => {
    getFilterdMovies(listCategory.value)
      .then(({ data }) => {
        Object.assign(filterdmovie, data);
        router.push({ name: "filterdmovie" });
      })
      .catch((e) => console.log(e));
  };
  return {
    listCategory,
    movieProperties,
    setFilterdMovies,
  };
};
