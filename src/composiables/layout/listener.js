import { ref, onMounted, onUnmounted } from "vue";

export const useListener = () => {
  const height = ref(null);
  const onResize = () => {
    if (window.innerWidth > 992) height.value = "550px";
    else if (window.innerWidth < 992 && window.innerWidth > 770) {
      height.value = "450px";
    } else if (window.innerWidth < 770 && window.innerWidth > 500) {
      height.value = "300px";
    } else if (window.innerWidth < 500) height.value = "270px";
  };

  onMounted(() => {
    onResize();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  return { height };
};
