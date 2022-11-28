<template>
  <div class="specific-img size-specific-img q-mt-sm" :class="{ 'image-slector': state }">
    <router-link
      :to="{
        name: 'movie',
        params: { id: movie.id, type: movie.tag.englishname },
      }"
    >
      <q-img :src="movie.mainsrc" class="border-radius-10" />
      <p v-if="movie.price.englishname == 'FREE'" class="state">رایگان</p>
      <CardHoverEffect :movie="movie" hoverClass="hover-img" />
    </router-link>
  </div>
</template>
<script setup>
import CardHoverEffect from "src/components/card/CardHoverEffect.vue";
const props = defineProps({
  movie: Object,
  state: Boolean,
});
</script>
