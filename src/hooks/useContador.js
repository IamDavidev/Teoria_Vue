// -> importaciones

import { computed, ref } from "vue";

// -> exportaciones

export function useAcount() {
  const contador = ref(0);
  const color = computed(() =>
    contador.value < 10
      ? "red"
      : (contador.value = "es es una propiedad computada ")
  );
  const autor = ref({});
  const sumar = () => contador.value++;

  return {
    contador,
    color,
    autor,
    sumar,
  };
}
