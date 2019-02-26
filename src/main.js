import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.prototype.formatMoney = (value, decimal = 2) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimal
  });

  return formatter.format(value);
};

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
