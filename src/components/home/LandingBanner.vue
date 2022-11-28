<template>
  <div>
    <q-carousel
      animated
      infinite
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      ref="carousel"
      :autoplay="60000"
      :height="height"
    >
      <q-carousel-slide :name="1" class="q-pa-none scroll">
        <video
          controls
          src="/banner/1.mp4"
          muted
          autoplay
          disablepictureinpicture
          controlslist="nodownload"
          ref="videoRef"
        />
      </q-carousel-slide>
      <q-carousel-slide
        v-for="link in bannerList"
        :key="link"
        :name="link.id + 1"
        :img-src="link.src"
      >
        <div class="absolute-bottom shadaw-bg"></div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            flat
            class="bg-dark-light"
            icon="arrow_right"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            flat
            class="bg-dark-light"
            icon="arrow_left"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { bannerList } from "src/api/data/layout/banner";
const props = defineProps({
  height: String,
});
const slide = ref(1);
const videoRef = ref();
onMounted(() => {
  videoRef.value.src = "/banner/1.mp4";
  videoRef.value.muted = true;
  videoRef.value.play();
});
</script>
<style scoped lang="scss">
video {
  width: 100%;
  height: 550px;
  object-fit: fill;
}
video::-webkit-media-controls-play-button {
  position: absolute;
  left: 50%;
}
video::-webkit-media-controls-timeline,
video::-webkit-media-controls-current-time-display,
video::-webkit-media-controls-fullscreen-button,
video::-webkit-media-controls-time-remaining-display {
  display: none;
}

.scroll {
  overflow: hidden;
}
</style>
