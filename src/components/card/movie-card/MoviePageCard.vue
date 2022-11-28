<template>
  <div class="q-pa-sm text-grey-5" v-if="currentMovie.name">
    <h5 class="text-white q-my-md">
      دانلود
      <span v-if="currentMovie.price.englishname == 'FREE'">رایگان</span>
      {{ currentMovie.typeMovie.name }}
      {{ currentMovie.name.name }}
      {{ currentMovie.name.englishname }}
      <span v-if="currentMovie.quality.englishname == 'HD'">
        با کیفیت {{ currentMovie.quality.englishname }}
      </span>
      <span>
        سال
        {{ currentMovie.year.englishname }}
      </span>
      <span>با {{ currentMovie.language.name }}</span>
    </h5>
    <div v-if="currentMovie.rate">
      <div class="row">
        <q-icon color="primary" size="sm" class="q-mx-xs" name="movie" />
        ژانر :
        <p class="q-mx-xs comma" v-for="ganre in currentMovie.ganre" :key="ganre">
          {{ ganre }}
        </p>
      </div>
      <div class="row">
        <q-icon color="primary" size="sm" class="q-mx-xs" name="thumb_up" />
        <p>محبوبیت :</p>
        {{ currentMovie.rate.like }}
      </div>
      <div class="row">
        <q-icon color="primary" size="sm" class="q-mx-xs" name="grade" />
        <p>امتیاز IMDB :</p>
        {{ currentMovie.rate.imdb }}
      </div>
      <div class="row">
        <q-icon color="primary" size="sm" class="q-mx-xs" name="event" />
        <p>سال تولید :</p>
        {{ currentMovie.year.name }}
      </div>
      <div class="row">
        <q-icon color="primary" size="sm" class="q-mx-xs" name="pin_drop" />
        <p>ساخت کشور :</p>
        {{ currentMovie.country.name }}
      </div>
      <div class="row">
        <q-icon color="primary" size="sm" class="q-mx-xs" name="sell" />
        <p>قیمت :</p>
        {{ currentMovie.price.name }}
      </div>

      <div class="row" v-if="currentMovie.quality.englishname == 'HD'">
        <q-icon color="primary" size="sm" class="q-mx-xs" name="high_quality" />
        <p>کیفیت :</p>
        {{ currentMovie.quality.name }}
      </div>
      <div class="row justify-between">
        <div class="row">
          <q-icon color="primary" size="sm" class="q-mx-xs" name="language" />
          <p>زبان :</p>
          {{ currentMovie.language.name }}
        </div>
        <div class="row">
          <div class="column">
            <q-icon
              color="grey-10"
              class="q-ma-sm col bg-grey-5 q-pa-sm border-radius-10"
              name="thumb_up"
              size="sm"
              @click="addPopularity('like')"
            />
            <p class="col text-center">
              {{ currentMovie.popularity.like }}
            </p>
          </div>
          <div class="column">
            <q-icon
              color="grey-10"
              class="q-ma-sm col bg-grey-5 q-pa-sm border-radius-10"
              name="thumb_down"
              size="sm"
              @click="addPopularity('dislike')"
            />
            <p class="col text-center">
              {{ currentMovie.popularity.dislike }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { currentMovie, addPopularity } from "src/composiables/movies/movie";
</script>
