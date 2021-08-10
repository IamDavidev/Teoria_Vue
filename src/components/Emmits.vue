<template>
  <div>
    <button @click="Emmit_btn">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: String,
  },
  setup({ btnText }, context) {
    const Emmit_btn = () => {
      context.emit("emmitVue");
    };
    return { btnText, Emmit_btn };
  },
};
</script>

<style></style> 
