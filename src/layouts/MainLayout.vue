<template>
  <q-layout view="lHh lpR fFf">
    <layout-header />
    <layout-side-bar />
    <div corner="top">
      <router-view />
    </div>
    <layout-footer />
  </q-layout>
</template>

<script setup>
import LayoutHeader from "src/components/layout/LayoutHeader.vue";
import LayoutFooter from "src/components/layout/LayoutFooter.vue";
import LayoutSideBar from "src/components/layout/LayoutSideBar.vue";
</script>
