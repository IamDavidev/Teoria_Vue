<template>
<div class="storeUse">
    <h1>
        saldo: ${{store.saldo}}
    </h1>
    <button @click="store.addSaldo">
            Aumentar Saldo 
    </button>
</div>
</template>

<script setup >
import store from '../store/index'
</script>

<style>

</style>