<template>
  <div class="row justify-center" v-if="specficsMovies">
    <BigCard
      :movie="movie"
      v-for="movie in specficsMovies.movies"
      :key="movie"
      :state="state"
    />
  </div>
  <div class="row justify-center">
    <q-btn
      dense
      color="primary"
      text-color="dark"
      @click="toggleHandler"
      :label="state ? 'بیشتر' : 'کمتر'"
      class="q-px-lg a-sm-none q-mt-sm"
    />
  </div>
</template>
<script setup>
import { useToggle } from "src/composiables/useToggle";
import { useSpecficsMovies } from "src/composiables/movies/movies";
import BigCard from "src/components/card/big-card/BigCard.vue";
const { state, toggleHandler } = useToggle();
const { specficsMovies } = useSpecficsMovies();
</script>
