<template>
  <div class="">
    <h1>
      {{ title }}
    </h1>
    <h3>
      {{ day }}
    </h3>
    <h1>
      {{ subtitle }}
    </h1>
    <h2 :style="{ color }">contador : {{ contador }}</h2>
    <button @click="sumar">sumar un numero atravez de la composition</button>
    <Emmits btnText="aumentar desde un emmit" @emmitVue="sumar" />
    <hr />
    <label for=""> Nombre </label>
    <input type="text" v-model="autor.nombre" />
    <label for=""> Apellido </label>
    <input type="text" v-model="autor.apellido" />
    <h1>
      {{ autor }}
    </h1>
  </div>
</template>

<script>
import Emmits from "./Emmits.vue";
import { useContador } from '../hooks/useContador'
export default {
  name: "NewComponont",
  components: {
    Emmits,
  },
  props: {
    msg: String,
  },
  setup(props) {
    const title = "composition API";
    const subtitle = props.msg;
    const day = new Date().getFullYear();
    const hooks = {...useContador()}
    console.log(hooks);
    return { title, day,subtitle, ...useContador() };
  },
};
</script>

<style></style>
