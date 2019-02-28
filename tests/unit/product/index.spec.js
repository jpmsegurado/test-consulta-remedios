import { shallowMount } from "@vue/test-utils";
import product from "@/components/product/product.vue";
import products from "@/assets/products.json";
import { formatMoney } from "../../../src/utils";

describe("product.vue", () => {
  it("render product info normally", () => {
    const productInfo = products[0];
    const wrapper = shallowMount(product, {
      propsData: { productInfo },
      mocks: {
        formatMoney
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
