<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-primary" style="font-size: 30vh">404</div>
      <div class="text-h5" style="opacity: 0.4">برای برگشت روی لینک زیر کلیک کنید</div>
      <q-btn
        class="q-mt-xl"
        color="dark"
        text-color="primary"
        unelevated
        to="/"
        label="صفحه اصلی"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
