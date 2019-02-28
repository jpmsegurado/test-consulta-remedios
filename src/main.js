import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import { formatMoney } from "./utils";

Vue.config.productionTip = false;

Vue.prototype.formatMoney = formatMoney;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
