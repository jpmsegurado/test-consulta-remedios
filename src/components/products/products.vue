<template>
  <div class="products">
    <div
      class="product-wrapper"
      v-for="product in sortedProducts"
      :key="product.id"
    >
      <product :product-info="product" />
    </div>
  </div>
</template>

<script>
import product from "../product/product";
import { mapGetters, mapActions } from "vuex";
import orderBy from "lodash/fp/orderBy";

export default {
  components: {
    product
  },
  props: {
    selectedOption: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters({
      products: "PRODUCT/ALL"
    }),
    sortedProducts() {
      if (this.selectedOption.prop) {
        return orderBy([this.selectedOption.prop], ["asc"])(this.products);
      } else {
        return this.products;
      }
    }
  },
  methods: {
    ...mapActions({
      loadProducts: "PRODUCT/LOAD_PRODUCTS"
    })
  },
  mounted() {
    this.loadProducts();
  }
};
</script>

<style lang="scss" scoped src="./products.scss" />
