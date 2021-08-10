<template>
  <div class="">
    <h1>
      {{ title }}
    </h1>
    <h3>
      <h2>
        {{ subtitle }}
      </h2>
      {{ day }}
    </h3>
    <useProvide />
    <use-provide />
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
    <hr />
    <hr />
    <h1>
      {{ hook }}
    </h1>
    <ol>
      <li v-for="(req,i) in request" :key="i">  
          {{req.name}}
      </li>
    </ol>
  </div>
</template>

<script>
import Emmits from "./Emmits.vue";
import { computed, onMounted, provide, ref } from "vue";
import UseProvide from "./useProvide";
// import { useAcount } from "../hooks/useContador";
export default {
  name: "NewComponont",
  components: {
    Emmits,
    UseProvide,
  },
  props: {
    msg: String,
    hks: String,
  },
  setup(props) {
    const title = "composition API";
    const subtitle = props.msg;
    const day = new Date().getFullYear();

    const contador = ref(0);
    provide("useProvideContador", contador);

    const color = computed(() => (contador.value < 10 ? "teal" : "aqua"));
    provide("useProvideColor", color);

    const autor = ref({});
    const sumar = () => contador.value++;

    const request = ref([])
    onMounted(
      async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await res.json()
        request.value  = data  
      }
    );
    const hook = props.hks;
    return {
      title,
      day,
      subtitle,
      contador,
      color,
      autor,  
      sumar,
      hook,
      request
    };
  },
    
};
</script>

<style scoped>
li{
  color:teal;
  margin:10px;
  padding:10px;
  font-weight:bold;
}

</style>

