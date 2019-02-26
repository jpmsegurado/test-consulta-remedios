<template>
  <div id="app">
    <h2>Games</h2>

    <div class="row">
      <div class="products-wrapper">
        <products />
      </div>

      <div class="shopping-cart-wrapper">
        <shopping-cart />
      </div>
    </div>
  </div>
</template>

<script>
import products from "./components/products/products";
import shoppingCart from "./components/shopping-cart/shopping-cart";

export default {
  name: "app",
  components: {
    products,
    shoppingCart
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Open Sans";
  padding: 42px 70px;

  > h2 {
    font-size: 48px;
    margin-top: 0;
    margin-bottom: 44px;
  }

  > .row {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .products-wrapper {
      width: 75%;
    }

    .shopping-cart-wrapper {
      width: 25%;
    }
  }
}
</style>
