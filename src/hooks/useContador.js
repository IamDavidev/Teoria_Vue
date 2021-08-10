// -> importaciones 

import { computed,ref }  from 'vue'

// -> exportaciones 

export function useContador() {
    const contador = ref(0);

    const color = computed(() => (contador.value < 10 ? "red" : contador.value = 'es es una propiedad computada '));

    const sumar = () => contador.value++;

    const autor = ref({});


    return(contador, color , sumar )
}
