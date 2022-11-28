import { ref } from "vue";

export const useToggle = () => {
  const state = ref(true);
  function toggleHandler() {
    state.value = !state.value;
  }
  return {
    state,
    toggleHandler,
  };
};
