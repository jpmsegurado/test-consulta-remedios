<template>
  <div class="products">
    <div class="product-wrapper" v-for="product in products" :key="product.id">
      <product :product-info="product" />
    </div>
  </div>
</template>

<script>
import product from "../product/product";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    product
  },
  computed: {
    ...mapGetters({
      products: "PRODUCT/ALL"
    })
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
