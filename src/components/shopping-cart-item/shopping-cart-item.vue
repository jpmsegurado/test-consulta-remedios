<template>
  <div class="shopping-cart-item">
    <div class="item-image">
      <img :src="require(`@/assets/${productInfo.image}`)" alt="Fifa 18" />
    </div>

    <div class="item-info">
      <p>
        {{ productInfo.name }}
        {{
          productInfo.products.length > 1
            ? `(${productInfo.products.length}x)`
            : ""
        }}
      </p>
      <p>{{ formatMoney(productInfo.total) }}</p>
    </div>

    <button @click="removeFromCart(productInfo)">X</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    productInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions({
      removeItem: "CART/REMOVE_FROM_CART"
    }),
    removeFromCart(product) {
      this.removeItem(product);
      this.$forceUpdate();
    }
  }
};
</script>

<style src="./shopping-cart-item.scss" lang="scss" scoped />
