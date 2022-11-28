<template>
  <div class="border-radius-10 bg-dark-s q-my-sm q-pa-lg row" v-if="currentMovie">
    <div class="col-12 col-md-3 row justify-center">
      <q-img :src="currentMovie.src" class="size" />
    </div>
    <div class="col-12 col-md-9">
      <MoviePageCard />
    </div>
  </div>
</template>
<script setup>
import { currentMovie } from "src/composiables/movies/movie";
import MoviePageCard from "./MoviePageCard.vue";
</script>
