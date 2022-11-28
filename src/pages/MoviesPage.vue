<template>
  <q-page>
    <div class="q-mt-xl q-pt-lg q-mx-auto">
      <BigCardCollection />
      <div class="q-ma-lg row">
        <div class="col-12 col-md-8">
          <MoviesPageCollection />
        </div>
        <div class="col-12 col-md-4 b-md-none">
          <CategoryFilter :classBtn="false" class="w-100 q-py-sm" />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import MoviesPageCollection from "src/components/card/movie-card/MoviesPageCollection.vue";
import BigCardCollection from "src/components/card/big-card/BigCardCollection.vue";
import CategoryFilter from "src/components/common/CategoryFilter.vue";
</script>
