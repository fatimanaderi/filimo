import { ref } from "vue";

export const leftDrawerOpen = ref(false);

export const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
