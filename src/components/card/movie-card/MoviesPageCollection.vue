<template>
  <div v-if="movies">
    <div class="card row q-pa-md" v-for="movie in movies.movies" :key="movie">
      <div class="col-12 col-sm-5 col-md-3 row justify-center items-center">
        <q-img :src="movie.src" class="size" />
      </div>
      <div class="col-12 col-sm-7 col-md-9 q-pl-sm q-mx-auto q-mt-md">
        <MoviesPageCard :movie="movie" />
      </div>
    </div>
    <div class="row justify-center q-my-xl" v-if="movies.totalPage">
      <q-pagination
        :max-pages="5"
        direction-links
        v-model="pageNumber"
        :max="movies.totalPage"
        icon-prev="fast_rewind"
        icon-next="fast_forward"
        @click="changePageNumber()"
      />
    </div>
  </div>
</template>
<script setup>
import MoviesPageCard from "src/components/card/movie-card/MoviesPageCard.vue";
import { useMovies } from "src/composiables/movies/movies";
const { setMovies, movies, changePageNumber, pageNumber } = useMovies();
</script>
<style lang="scss">
.card {
  background: rgb(61, 61, 61);
}
</style>
