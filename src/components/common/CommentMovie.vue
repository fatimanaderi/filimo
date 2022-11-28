<template>
  <div class="q-mt-sm" v-if="comments.comments">
    <div
      class="row q-pa-sm items-center justify-center"
      v-for="comment in comments.comments"
      :key="comment.id"
    >
      <div class="row items-center bg-grey-9 w-100 q-ma-md q-pa-md rounded-borders">
        <q-icon name="person" color="primary" size="md" />
        <div class="col-10 q-pa-sm">
          <div>
            {{ comment.name }}
          </div>
          <div>
            {{ comment.message }}
          </div>
        </div>
        <div class="row">
          <div class="column" @click="setPopularityComment(comment, 'like')">
            <q-icon class="q-ma-sm col" name="thumb_up" size="sm" />
            <p class="col text-center">{{ comment.like }}</p>
          </div>
          <div class="column" @click="setPopularityComment(comment, 'dislike')">
            <q-icon class="q-ma-sm col" name="thumb_down" size="sm" />
            <p class="col text-center">{{ comment.dislike }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useComments, comments } from "src/composiables/movies/movie";
const { setPopularityComment } = useComments();
</script>
