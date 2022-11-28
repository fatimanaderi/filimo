<template>
  <q-page>
    <div class="q-mt-xl q-pt-xl q-mx-auto">
      <div class="q-pa-lg" v-if="filterdmovie.length">
        <div class="row q-py-xl wrap justify-center overFlowScroll">
          <div class="row" v-for="(movie, index) in filterdmovie" :key="index">
            <SmallCard
              :movie="movie"
              :typeMovie="movie.tag.englishname"
              classImg="size-img-ganre"
              class="q-my-md"
            />
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <h2 class="text-primary">فیلمی یافت نشد...</h2>
        <router-link to="/" class="q-mt-xl">
          <h6>فیلم های بیشتر</h6>
        </router-link>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { filterdmovie } from "src/composiables/movies/filterdMovies";
import SmallCard from "src/components/card/small-card/SmallCard.vue";
</script>
