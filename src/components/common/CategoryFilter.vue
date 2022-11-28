<template>
  <div class="row justify-center q-my-md" v-if="movieProperties">
    <div
      :class="{ 'btn-dropdown': classBtn }"
      v-for="category in movieProperties"
      class="q-pa-sm w-100"
      :key="category"
    >
      <q-select
        dark
        dense
        outlined
        class="w-100"
        option-label="name"
        :label="category.name"
        :options="category.properties"
        :option-value="category.englishname"
        v-model="listCategory[category.englishname]"
      />
    </div>
    <div class="q-pa-sm w-100" :class="{ 'btn-dropdown': classBtn }">
      <q-btn
        flat
        label="فیلتر ها"
        @click="setFilterdMovies"
        class="bg-primary text-dark w-100 h-39"
      />
    </div>
  </div>
</template>
<script setup>
import { useCateGoryFilter } from "src/composiables/movies/filterdMovies";
import { useToggle } from "src/composiables/useToggle";
const props = defineProps({
  classBtn: {
    default: true,
  },
});
const { state, toggleHandler } = useToggle();
const { movieProperties, setFilterdMovies, listCategory } = useCateGoryFilter(
  props.classBtn
);
</script>
