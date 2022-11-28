<template>
  <q-footer class="bg-dark row justify-between">
    <div class="b-sm-none">
      <span v-for="link in footerLinks" :key="link">
        <q-btn size="sm" flat :label="link.name" />
      </span>
    </div>
    <div class="dropup">
      <q-btn size="sm" flat color="grey" label="شبکه های اجتماعی" icon="expand_more" />
      <div class="dropup-content">
        <div class="column">
          <router-link
            v-for="mediaLink in socialMediaLinks"
            :key="mediaLink"
            :to="mediaLink.link"
            class="q-pa-sm"
          >
            {{ mediaLink.name }}</router-link
          >
        </div>
      </div>
    </div>
  </q-footer>
</template>
<script setup>
import { footerLinks, socialMediaLinks } from "src/api/data/layout/footer";
</script>
<style lang="scss" scoped>
a {
  color: $grey;
  &:hover {
    color: $grey-1;
  }
}
</style>
