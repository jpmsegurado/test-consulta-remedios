import { shallowMount } from "@vue/test-utils";
import shoppingCartItem from "@/components/shopping-cart-item/shopping-cart-item.vue";
import products from "@/assets/products.json";
import { formatMoney } from "../../../src/utils";
import groupBy from "lodash/fp/groupBy";
import sumBy from "lodash/fp/sumBy";

function groupProducts(products) {
  const grouped = groupBy(item => item.id)(products);
  const ids = Object.keys(grouped);
  const values = Object.values(grouped);

  return ids.map((id, index) => ({
    id: Number(id),
    products: values[index],
    name: values[index][0].name,
    image: values[index][0].image,
    total: sumBy(product => product.price)(values[index])
  }));
}

const shoppingCartProducts = [];

shoppingCartProducts.push(products[0]);

describe("shopping-cart-item.vue", () => {
  it("render shopping cart item", () => {
    const productInfo = groupProducts(shoppingCartProducts)[0];
    const wrapper = shallowMount(shoppingCartItem, {
      propsData: { productInfo },
      mocks: {
        formatMoney
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("render shopping cart item with repeated item", () => {
    shoppingCartProducts.push(products[0]);
    const productInfo = groupProducts(shoppingCartProducts)[0];
    const wrapper = shallowMount(shoppingCartItem, {
      propsData: { productInfo },
      mocks: {
        formatMoney
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
