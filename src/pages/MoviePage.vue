<template>
  <q-page v-if="currentMovie">
    <div class="img-bg">
      <img :src="currentMovie.src" />
    </div>
    <div class="q-ma-xl q-pa-lg q-mx-auto">
      <MoviePageCollection />
      <OnlineMovieCard />
      <SuggestionMovies />
      <div class="bg-dark-s border-radius-10">
        <CommentForm />
        <CommentMovie />
      </div>
    </div>
  </q-page>
</template>
<script setup>
import MoviePageCollection from "src/components/card/movie-card/MoviePageCollection.vue";
import SuggestionMovies from "src/components/movie/SuggestionMovies.vue";
import { currentMovie, setMovie } from "src/composiables/movies/movie";
import OnlineMovieCard from "src/components/movie/OnlineMovieCard.vue";
import CommentMovie from "src/components/common/CommentMovie.vue";
import CommentForm from "../components/common/CommentForm.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const route = useRoute();
onMounted(() => setMovie(route.params.type, route.params.id));
</script>
