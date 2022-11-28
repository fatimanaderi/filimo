<template>
  <div v-if="movie.name">
    <router-link
      :to="{
        name: 'movie',
        params: { id: movie.id, type: movie.tag.englishname },
      }"
    >
      <h5 class="text-white">
        دانلود
        {{ movie.typeMovie.name }}
        {{ movie.name.name }}
        {{ movie.name.englishname }}
      </h5>
      <div v-if="movie.rate">
        <div class="row q-mt-md">
          <q-icon color="primary" size="sm" class="q-mx-xs" name="movie" />
          <p class="q-mx-xs comma" v-for="ganre in movie.ganre" :key="ganre">
            {{ ganre }}
          </p>
        </div>
        <div class="row">
          <q-icon color="primary" size="sm" class="q-mx-xs" name="thumb_up" />
          <p>محبوبیت :</p>
          {{ movie.rate.like }}
        </div>
        <div class="row">
          <q-icon color="primary" size="sm" class="q-mx-xs" name="language" />
          <p>زبان :</p>
          {{ movie.language.name }}
        </div>
        <div class="row" v-if="movie.quality.englishname == 'HD'">
          <q-icon color="primary" size="sm" class="q-mx-xs" name="high_quality" />
          <p>کیفیت :</p>
          {{ movie.quality.name }}
        </div>
      </div>
      <div class="bg-grey-10 q-pa-sm rounded-borders text-white b-sm-none b-xs-show">
        در
        {{ movie.typeMovie.name }}
        {{ movie.name.name }} : {{ movie.desc }} ...
      </div>
    </router-link>
  </div>
</template>
<script setup>
const prop = defineProps({ movie: Object });
</script>
