<template>
  <q-btn flat label="جستجو" icon="search" @click="openDialog" />
  <q-dialog v-model="medium">
    <q-card
      style="width: 700px; max-width: 80vw"
      class="full-height bg-dark-s border-radius-10"
    >
      <q-card-section>
        <h6 class="text-primary">نام فیلم را جست و جو کنید.</h6>
      </q-card-section>
      <q-card-section>
        <q-input
          dark
          borderless
          color="primary"
          class="q-px-md border-bottom-primary"
          v-model="searchInput"
        >
          <template v-slot:prepend>
            <q-icon name="search" color="primary" @click="pushToSearchPage" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section v-if="allMovie.length != 0">
        <div v-if="!searchInput.length" class="q-my-sm text-h6">ترندها</div>
        <div
          v-for="movie in filteredMovie"
          :key="movie.id"
          class="q-pa-sm border-bottom-grey"
          @click="searchHandler({ id: movie.id, type: movie.tag.englishname })"
        >
          <q-icon name="search" size="md" color="primary" />
          <span class="text-h6">
            {{ movie.typeMovie.name }}
            {{ movie.name.name }}
          </span>
          <div>
            {{ movie.name.englishname }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import {
  medium,
  allMovie,
  openDialog,
  searchInput,
  filteredMovie,
  useSearchDialog,
} from "src/composiables/search";
import { useNavLinks } from "src/composiables/layout/navLinks";
const { pushToSearchPage } = useNavLinks();
const { searchHandler } = useSearchDialog();
</script>
