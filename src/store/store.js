import Vue from "vue";
import Vuex from "vuex";
import PRODUCT from "./modules/products";
import CART from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PRODUCT,
    CART
  }
});
