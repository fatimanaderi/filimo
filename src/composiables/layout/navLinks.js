import { setGanreMovies } from "src/composiables/movies/ganreMovies";
import { searchInput } from "src/composiables/search";
import { useRouter } from "vue-router";

export const useNavLinks = () => {
  const router = useRouter();
  const pushToNewPage = (type, tag) => {
    router.push({ name: "moviesganre", params: { type, tag } });
    setGanreMovies(type, tag);
  };
  const pushToSearchPage = () => {
    router.push({ name: "search", params: { name: searchInput.value } });
  };
  const pushToAcountPayment = () => {
    router.push({ name: "AcountPayment" });
  };
  return {
    pushToNewPage,
    pushToSearchPage,
    pushToAcountPayment,
  };
};
