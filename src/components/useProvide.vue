<template>
  <div>
    <h1 :style="{ color }">contador:{{ contador }}</h1>
    <h2>{{ contador }} - {{ color }}</h2>
    <section>
      <div class="store">
        <h1>saldo: ${{ store.saldo }}</h1>
        <button @click="store.addSaldo">
          aumentar saldo
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import store from "../store/index";
import { inject } from "vue";
export default {
  name: "useProvide",
  setup() {
    const contador = inject("useProvideContador");
    const color = inject("useProvideColor");

    return { contador, color, store };
  },
};
</script>

<style></style>
