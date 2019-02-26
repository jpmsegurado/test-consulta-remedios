import Vue from "vue";
import Vuex from "vuex";
import PRODUCT from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PRODUCT
  }
});
