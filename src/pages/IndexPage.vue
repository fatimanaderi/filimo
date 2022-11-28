<template>
  <q-page v-if="allMovies">
    <LandingBanner :height="height" />
    <div class="q-pa-md">
      <CategoryFilter />
      <BigCardCollection />
      <q-infinite-scroll @load="onLoad" class="q-px-sm">
        <SmallCardCollection
          v-for="moviesItem in allMovies.types"
          :movies="moviesItem"
          :key="moviesItem"
        />
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </q-page>
</template>
<script setup>
import SmallCardCollection from "src/components/card/small-card/SmallCardCollection.vue";
import BigCardCollection from "src/components/card/big-card/BigCardCollection.vue";
import CategoryFilter from "src/components/common/CategoryFilter.vue";
import LandingBanner from "src/components/home/LandingBanner.vue";
import { useAllMovies, allMovies } from "src/composiables/movies/allMovies";
import { useListener } from "src/composiables/layout/listener";
const { onLoad } = useAllMovies();
const { height } = useListener();
</script>
