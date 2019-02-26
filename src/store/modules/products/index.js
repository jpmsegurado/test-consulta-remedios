import products from "../../../assets/products.json";

const state = {
  products: []
};

const getters = {
  ALL: state => state.products
};

const actions = {
  LOAD_PRODUCTS: ({ commit }) => {
    return Promise.resolve(commit("SET_PRODUCTS", products));
  }
};

const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
