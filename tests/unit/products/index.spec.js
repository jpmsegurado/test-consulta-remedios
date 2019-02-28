import { mount } from "@vue/test-utils";
import products from "@/components/products/products.vue";
import store from "@/store/store";
import { formatMoney } from "../../../src/utils";

const options = [
  { label: "Mais populares", prop: "score" },
  { label: "Mais baratos", prop: "price" },
  { label: "Ordem Alfabética", prop: "name" }
];

describe("products.vue", () => {
  it("render products list normally", () => {
    const wrapper = mount(products, {
      store,
      mocks: {
        formatMoney
      }
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    }, 1000);
  });

  it("render products list ordered by score", () => {
    const wrapper = mount(products, {
      store,
      mocks: {
        formatMoney
      },
      propsData: {
        selectedOption: options[0]
      }
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    }, 1000);
  });

  it("render products list ordered by price", () => {
    const wrapper = mount(products, {
      store,
      mocks: {
        formatMoney
      },
      propsData: {
        selectedOption: options[1]
      }
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    }, 1000);
  });

  it("render products list ordered by name", () => {
    const wrapper = mount(products, {
      store,
      mocks: {
        formatMoney
      },
      propsData: {
        selectedOption: options[2]
      }
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    }, 1000);
  });
});
