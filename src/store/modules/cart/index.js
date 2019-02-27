import sumBy from "lodash/fp/sumBy";

const state = {
  products: [],
  shippingCost: 0,
  subtotal: 0
};

const getters = {
  PRODUCTS: state => state.products,
  SHIPPING_COST: state => state.shippingCost,
  SUBTOTAL: state => state.subtotal
};

const actions = {
  ADD_TO_CART: ({ commit }, product) => {
    return Promise.resolve(commit("ADD_PRODUCTS", product));
  },
  REMOVE_FROM_CART: ({ commit }, product) => {
    return Promise.resolve(commit("REMOVE_PRODUCT", product));
  }
};

const mutations = {
  ADD_PRODUCTS: (state, product) => {
    state.products.push(product);
    const subtotal = sumBy(product => product.price)(state.products);
    state.subtotal = subtotal;
    state.shippingCost = subtotal > 250 ? 0 : state.products.length * 10;
  },
  REMOVE_PRODUCT: (state, product) => {
    const index = state.products.findIndex(p => p.id === product.id);
    const newProducts = [...state.products];
    newProducts.splice(index, 1);
    state.products = newProducts;
    const subtotal = sumBy(product => product.price)(state.products);
    state.subtotal = subtotal;
    state.shippingCost = subtotal > 250 ? 0 : state.products.length * 10;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
