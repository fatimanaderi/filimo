<template>
  <q-form class="row q-pa-lg q-mt-sm justify-center" ref="commentform">
    <div class="col-12">
      <q-input
        :rules="[(val) => val.length >= 3 || 'پر کردن این فیلد الزامیست']"
        class="q-my-sm rounded-borders"
        label="نظر خود را بنویسید."
        v-model="newComment.message"
        bg-color="grey-9"
        type="textarea"
        outlined
        dark
      />
    </div>
    <div class="col-12 col-md-5">
      <q-input
        :rules="[(val) => val.length >= 3 || 'پر کردن این فیلد الزامیست']"
        class="q-my-sm m-10 rounded-borders"
        v-model="newComment.name"
        bg-color="grey-9"
        label="نام"
        outlined
        dense
        dark
      />
    </div>
    <div class="col-12 col-md-5">
      <q-input
        :rules="[(val) => val.length >= 3 || 'پر کردن این فیلد الزامیست']"
        class="q-my-sm m-10 rounded-borders"
        v-model="newComment.email"
        bg-color="grey-9"
        label="ایمیل"
        outlined
        dense
        dark
      />
    </div>
    <div class="col-12 col-md-2">
      <q-btn
        class="h-35 q-my-sm m-10 bg-primary text-dark w-100"
        @click="sendNewComment"
        label="ارسال نظر"
        dense
      />
    </div>
  </q-form>
</template>
<script setup>
import { sendNewComment, newComment, commentform } from "src/composiables/movies/movie";
</script>
