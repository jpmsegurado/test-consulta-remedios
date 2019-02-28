import { mount } from "@vue/test-utils";
import shoppingCart from "@/components/shopping-cart/shopping-cart.vue";
import products from "@/assets/products.json";
import { formatMoney } from "../../../src/utils";
import store from "@/store/store";

describe("shopping-cart-item.vue", () => {
  it("render shopping cart empty state", () => {
    const wrapper = mount(shoppingCart, {
      store,
      mocks: {
        formatMoney
      }
    });

    console.log(store.dispatch("CART/ADD_TO_CART", products[0]));

    expect(wrapper).toMatchSnapshot();
  });

  it("render shopping cart with one product", () => {
    const wrapper = mount(shoppingCart, {
      store,
      mocks: {
        formatMoney
      }
    });

    store.dispatch("CART/ADD_TO_CART", products[0]);

    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    }, 1000);
  });

  it("render shopping cart with repeated products", () => {
    const wrapper = mount(shoppingCart, {
      store,
      mocks: {
        formatMoney
      }
    });

    store.dispatch("CART/ADD_TO_CART", products[0]);
    store.dispatch("CART/ADD_TO_CART", products[0]);
    store.dispatch("CART/ADD_TO_CART", products[1]);

    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    }, 1000);
  });
});
