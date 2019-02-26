<template>
  <div class="products">
    <div class="product-wrapper">
      <product />
    </div>
  </div>
</template>

<script>
import product from "../product/product";

export default {
  components: {
    product
  }
};
</script>

<style lang="scss" scoped src="./products.scss" />
