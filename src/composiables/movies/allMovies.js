import { reactive, onMounted } from "vue";
import { getAllMovies } from "src/services/movies.service.js";
export const allMovies = reactive({});

export const useAllMovies = () => {
  let pageNumber = 1;

  const setAllMovies = () => {
    getAllMovies({ pageNumber })
      .then(({ data }) => Object.assign(allMovies, data))
      .catch((e) => console.log(e));
  };
  const moreMovies = () => {
    pageNumber = pageNumber + 1;
    setAllMovies();
  };
  const onLoad = (index, done) => {
    setTimeout(() => {
      if (allMovies.pageNumber == allMovies.totalPage) {
        done(true);
      } else {
        moreMovies();
        done();
      }
    }, 2000);
  };

  onMounted(() => setAllMovies());
  return {
    onLoad,
  };
};
