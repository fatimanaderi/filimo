import {
  getComments,
  getMovie,
  getMovies,
  postComment,
  postPopularityMovie,
  postPopularityComment,
} from "src/services/movies.service.js";
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";

export const currentMovie = reactive({});
export const setMovie = (type, id) => {
  getMovie({ type, id })
    .then(({ data }) => Object.assign(currentMovie, data))
    .catch((e) => console.log(e));
};
export const addPopularity = (type) => {
  postPopularityMovie({ movie: currentMovie, type })
    .then(({ data }) => Object.assign(currentMovie, data))
    .catch((e) => console.log(e));
};
export const useRelatedMovie = () => {
  const relatedMovies = reactive({});
  const router = useRouter();
  const route = useRoute();
  const setMovies = (type, id) => {
    getMovies({
      type,
      id,
      pageSize: 6,
    })
      .then(({ data }) => Object.assign(relatedMovies, data))
      .catch((e) => console.log(e));
  };
  const pushToNewMoviepage = (id, type) => {
    router.push({ name: "movie", params: { id, type } });
    setMovie(type, id);
  };
  onMounted(() => setMovies(route.params.type, route.params.id));
  return {
    relatedMovies,
    pushToNewMoviepage,
  };
};
export const commentform = ref();
export const comments = reactive({});
export const newComment = reactive({
  name: "",
  email: "",
  message: "",
});
export const sendNewComment = () => {
  postComment({ comments, newComment })
    .then(({ data }) => {
      newComment.name = "";
      newComment.email = "";
      newComment.message = "";
      commentform.value.reset();
      Object.assign(comments, data);
    })
    .catch((e) => console.log(e));
};
export const useComments = () => {
  const setComments = () => {
    getComments()
      .then(({ data }) => Object.assign(comments, data))
      .catch((e) => console.log(e));
  };
  const setPopularityComment = (currentComment, type) => {
    postPopularityComment({ comments, currentComment, type })
      .then(({ data }) => Object.assign(comments, data))
      .catch((e) => console.log(e));
  };
  onMounted(() => setComments());
  return {
    setPopularityComment,
  };
};
