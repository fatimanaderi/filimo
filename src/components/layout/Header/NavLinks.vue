<template>
  <div class="b-sm-none">
    <a v-for="navLink in NavbarLinks" :key="navLink.id" class="dropdown">
      <q-btn flat :label="navLink.name">
        <q-icon v-if="navLink.details.length" name="expand_more" />
      </q-btn>
      <div v-if="navLink.details.length" class="dropdown-content">
        <div class="row">
          <div
            class="q-pa-sm col-6"
            v-for="detail in navLink.details"
            :key="detail"
            @click="pushToNewPage(navLink.englishname, detail.englishname)"
          >
            {{ detail.name }}
          </div>
        </div>
      </div>
    </a>
    <span>
      <SearchDialog />
    </span>
  </div>
</template>
<script setup>
import SearchDialog from "src/components/search/SearchDialog.vue";
import { NavbarLinks } from "src/api/data/layout/menu";
import { useNavLinks } from "src/composiables/layout/navLinks";
const { pushToNewPage } = useNavLinks();
</script>
<style lang="scss" scoped>
a {
  color: $grey-1;
  &:hover {
    color: $primary;
  }
}
</style>
