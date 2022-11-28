<template>
  <q-drawer
    :width="250"
    v-model="leftDrawerOpen"
    side="left"
    behavior="mobile"
    class="bg-dark"
  >
    <q-list>
      <q-expansion-item
        v-for="navLink in NavbarLinks"
        :key="navLink.id"
        :label="navLink.name"
        :icon="navLink.icon"
        :expand-icon="navLink.details.length ? '' : 'arrow'"
      >
        <q-card class="bg-dark" v-if="navLink.details.length">
          <q-card-section
            class="q-mx-md"
            v-for="detail in navLink.details"
            @click="pushToNewPage(navLink.englishname, detail.englishname)"
            :key="detail"
          >
            - {{ detail.name }}</q-card-section
          >
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { leftDrawerOpen } from "src/composiables/layout/layout.js";
import { NavbarLinks } from "src/api/data/layout/menu";
import { useNavLinks } from "src/composiables/layout/navLinks";
const { pushToNewPage } = useNavLinks();
</script>
