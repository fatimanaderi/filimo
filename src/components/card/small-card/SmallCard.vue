<template>
  <router-link
    :to="{
      name: 'movie',
      params: { id: movie.id, type: movie.tag.englishname },
    }"
  >
    <div class="specific-img" :class="classImg">
      <q-img :src="movie.src" class="border-radius-10" />
      <p v-if="movie.price.englishname == 'FREE'" class="state">رایگان</p>
      <div class="cut-text">
        {{ movie.typeMovie.name }}
        {{ movie.tag.name }}
        {{ movie.name.name }}
      </div>
      <CardHoverEffect :movie="movie" hoverClass="hover-img" />
    </div>
  </router-link>
</template>
<script setup>
import CardHoverEffect from "src/components/card/CardHoverEffect.vue";
const props = defineProps({
  movie: Object,
  classImg: String,
});
</script>
