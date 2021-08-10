import { reactive } from "vue";

const store = reactive({
  saldo: 469,
  addSaldo: function() {
    this.saldo += 100;
    console.log(this.saldo);
  },
});

export default store;
