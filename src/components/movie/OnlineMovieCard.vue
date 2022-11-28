<template>
  <div
    class="q-ma-sm q-pa-lg border-radius-10 bg-dark-s q-my-sm q-mx-auto"
    v-if="currentMovie.name"
  >
    <div class="q-pa-lg row">
      <video
        controls
        src="/movie/The-sandman.mp4"
        class="border-radius-10 col-12 col-md-6"
      />
      <div class="col-12 col-md-6">
        <h5 class="q-mx-sm q-my-md">
          <q-icon name="movie_filter" color="primary" />
          داستان سریال
        </h5>
        <div class="bg-grey-10 q-pa-sm q-ma-sm border-radius-10">
          در
          {{ currentMovie.typeMovie.name }}
          {{ currentMovie.name.name }} : {{ currentMovie.desc }} ...
        </div>
        <h5 class="q-mx-sm q-my-md">
          <q-icon name="theater_comedy" color="primary" />
          بازیگران
        </h5>
        <div class="bg-grey-10 q-pa-sm q-ma-sm border-radius-10">
          در سریال بازیگرانی چون Bill Paterson، David Horovitch، Emily Carey، Emma D'Arcy،
          Eve Best، Fabien Frankel، Gavin Spokes، Graham McTavish، Jefferson Hall، Matt
          Smith و... به ایفای نقش پرداخته اند.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { currentMovie } from "src/composiables/movies/movie";
</script>

<style scoped lang="scss">
video {
  width: 100%;
  height: auto;
  object-fit: fill;
  z-index: 1;
}
video::-webkit-media-controls-play-button {
  position: absolute;
  left: 50%;
}
</style>
