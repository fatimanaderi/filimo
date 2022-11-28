<template>
  <div :class="hoverClass" v-if="movie">
    <div class="content">
      <div class="row">
        <span class="rate-detail">
          <q-icon name="thumb_up" />
          {{ movie.rate.like }}
        </span>
        <span class="rate-detail">
          <q-icon name="grade" />
          {{ movie.rate.imdb }}
        </span>
      </div>
      <div>
        {{ movie.typeMovie.englishname }}
        {{ movie.name.englishname }}
      </div>
      <span v-for="ganre in movie.ganre" :key="ganre" class="comma">
        {{ ganre }}
      </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ movie: Object, hoverClass: String });
</script>
