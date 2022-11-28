<template>
  <q-header class="border-top-primary bg-dark-light">
    <q-toolbar>
      <div class="row">
        <q-btn class="a-sm-none" flat dense @click="toggleLeftDrawer" icon="menu" />
        <q-toolbar-title>
          <router-link to="/">
            <q-avatar><img src="favicon.png" /></q-avatar>
            فیلیمو
          </router-link>
        </q-toolbar-title>
        <q-separator dark vertical inset />
      </div>
      <NavLinks />
      <q-space />
      <q-btn flat class="bg-green" @click="pushToAcountPayment">
        <span>
          <q-icon class="b-xs-none" name="movie" />
          <span class="b-xs-none"> خرید </span>
          <span> اشتراک</span>
        </span>
      </q-btn>
      <q-btn-dropdown
        flat
        rounded
        color="red"
        class="q-mx-sm"
        dropdown-icon="person"
        no-icon-animation
      >
        <NavUser />
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { toggleLeftDrawer } from "src/composiables/layout/layout.js";
import { useNavLinks } from "src/composiables/layout/navLinks";
import NavLinks from "./Header/NavLinks.vue";
import NavUser from "./Header/NavUser.vue";
const { pushToAcountPayment } = useNavLinks();
</script>
