<template>
  <div class="row justify-between items-center q-mx-md q-my-sm">
    <h5 class="text-primary">{{ movies.title }}</h5>
    <router-link :to="{ name: 'movies', params: { type: movies.titleEn } }">
      مشاهده همه
      <q-icon name="chevron_left" />
    </router-link>
  </div>
  <div class="row justify-between no-wrap overFlowScroll q-mt-sm">
    <SmallCard
      class="col-6 col-sm-3 col-md-2"
      v-for="movie in movies.movies"
      :movie="movie"
      :key="movie"
    />
  </div>
</template>
<script setup>
import SmallCard from "src/components/card/small-card/SmallCard.vue";
const props = defineProps({
  movies: Object,
});
</script>
