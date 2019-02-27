<template>
  <div id="app">
    <div class="row">
      <div class="products-wrapper">
        <h2>Games</h2>
        <mySelect v-model="selected" :value="selected" :list="options" />
        <products :selectedOption="options[selected]" />
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
import mySelect from "./components/select/select";

export default {
  name: "app",
  components: {
    products,
    shoppingCart,
    mySelect
  },
  data() {
    return {
      options: [
        { label: "Mais populares", prop: "score" },
        { label: "Mais baratos", prop: "price" },
        { label: "Ordem Alfabética", prop: "name" }
      ],
      selected: 0
    };
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

  > .row {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .products-wrapper {
      width: 75%;

      > h2 {
        font-size: 48px;
        margin-top: 0;
        margin-bottom: 44px;
        width: calc(100% - 277px);
        display: inline-block;
      }

      > .select {
        width: 262px;
        margin-right: 15px;
      }
    }

    .shopping-cart-wrapper {
      width: 25%;
    }
  }
}
</style>
