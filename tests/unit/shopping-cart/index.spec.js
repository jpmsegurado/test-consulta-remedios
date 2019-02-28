import { shallowMount } from "@vue/test-utils";
import shoppingCart from "@/components/shopping-cart/shopping-cart.vue";
import products from "@/assets/products.json";
import { formatMoney } from "../../../src/utils";
import store from "@/store/store";

describe("shopping-cart-item.vue", () => {
  it("render shopping cart empty state", () => {
    const wrapper = shallowMount(shoppingCart, {
      store,
      mocks: {
        formatMoney
      }
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("check shippingCost with one product", () => {
    const wrapper = shallowMount(shoppingCart, {
      store,
      mocks: {
        formatMoney
      }
    });

    store.dispatch("CART/ADD_TO_CART", products[0]);
    expect(wrapper.vm.shoppingCost).toBe(10);
  });

  it("check shippingCost with three product", () => {
    const wrapper = shallowMount(shoppingCart, {
      store,
      mocks: {
        formatMoney
      }
    });

    store.dispatch("CART/ADD_TO_CART", products[0]);
    store.dispatch("CART/ADD_TO_CART", products[0]);
    store.dispatch("CART/ADD_TO_CART", products[1]);

    expect(wrapper.vm.shoppingCost).toBe(0);
  });
});
