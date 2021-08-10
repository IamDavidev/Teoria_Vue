<template>
  <div>
    <h1 :style="{ color }">contador:{{ contador }}</h1>
    <h2>
        {{contador}} - {{color }}
    </h2> 
    <section>
        <div class="store">
          <h1>
            saldo $:6969
          </h1>
        </div>
    </section>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
    name:"useProvide",
  setup() {
    const contador = inject("useProvideContador");
    const color = inject("useProvideColor");

    return {contador, color};
  },
};
</script>

<style></style>
