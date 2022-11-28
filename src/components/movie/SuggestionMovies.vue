<template>
  <div class="w-100 q-pa-lg bg-dark-s border-radius-10" v-if="relatedMovies">
    <h5 class="text-primary q-mx-lg">فیلم‌های پیشنهادی</h5>
    <div class="row justify-center">
      <div
        class="col-6 col-sm-3 col-md-2"
        v-for="movie in relatedMovies.movies"
        :key="movie.id"
      >
        <div
          class="specific-img"
          @click="pushToNewMoviepage(movie.id, relatedMovies.titleEn)"
        >
          <q-img :src="movie.src" class="border-radius-10" />
          <p v-if="movie.price.englishname == 'FREE'" class="state">رایگان</p>
          <div class="cut-text">
            {{ movie.typeMovie.name }}
            {{ movie.tag.name }}
            {{ movie.name.name }}
          </div>
          <CardHoverEffect
            :movie="movie"
            :movieName="movie.name"
            hoverClass="hover-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CardHoverEffect from "src/components/card/CardHoverEffect.vue";
import { useRelatedMovie } from "src/composiables/movies/movie";
const { pushToNewMoviepage, relatedMovies } = useRelatedMovie();
</script>
