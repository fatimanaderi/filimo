<template>
  <q-page>
    <div class="q-mt-xl q-pt-xl q-mx-auto">
      <div class="row justify-center">
        <div class="col-10 col-sm-6">
          <q-input
            outlined
            color="primary"
            bg-color="grey-9"
            v-model="searchInput"
            label-color="primary"
            label="نام فیلم را جستجو کنید"
          >
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="q-pa-lg" v-if="ganreMovies.movies">
        <div class="row q-py-xl wrap justify-center overFlowScroll">
          <div class="row" v-for="movie in filteredList" :key="movie.id">
            <SmallCard classImg="size-img-ganre" class="q-my-md" :movie="movie" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import SmallCard from "src/components/card/small-card/SmallCard.vue";
import {
  ganreMovies,
  filteredList,
  searchInput,
} from "src/composiables/movies/ganreMovies";
</script>
