<template>
  <div class="product">
    <div class="image">
      <img :src="require(`@/assets/${productInfo.image}`)" alt="fifa 18" />
    </div>
    <div class="info">
      <p>{{ productInfo.name }}</p>
      <p>{{ formatMoney(productInfo.price) }}</p>
    </div>

    <div class="action">
      <button @click="addToCart(productInfo)">
        adicionar ao carrinho
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "product",
  props: {
    productInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions({
      addProdToCart: "CART/ADD_TO_CART"
    }),
    addToCart(product) {
      this.addProdToCart(product);
    }
  }
};
</script>

<style lang="scss" scoped src="./product.scss" />
