<template>
  <div class="shopping-cart">
    <h3>
      Carrinho <span v-if="products.length > 0">{{ productsAmount }}</span>
    </h3>
    <template v-if="products.length === 0">
      <div class="cart-icon">
        <img src="@/assets/cart-icon.svg" alt="Shopping Cart" />
      </div>

      <p>
        Até o momento, <br />
        o seu carrinho está vazio
      </p>
    </template>

    <shopping-cart-item
      v-for="prod in groupedProducts"
      :productInfo="prod"
      :key="prod.id"
    />

    <div class="footer" v-if="products.length > 0">
      <div class="subtotal">
        <span>subtotal</span>
        <strong>{{ formatMoney(subtotal) }}</strong>
      </div>

      <div class="frete">
        <span>frete</span>
        <strong>{{ formatMoney(shoppingCost) }}</strong>
      </div>

      <div class="total">
        <span>total</span>
        <strong>{{ formatMoney(shoppingCost + subtotal) }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import shoppingCartItem from "../shopping-cart-item/shopping-cart-item";
import { mapGetters } from "vuex";
import groupBy from "lodash/fp/groupBy";
import sumBy from "lodash/fp/sumBy";

export default {
  components: {
    shoppingCartItem
  },
  computed: {
    ...mapGetters({
      products: "CART/PRODUCTS",
      subtotal: "CART/SUBTOTAL",
      shoppingCost: "CART/SHIPPING_COST"
    }),
    groupedProducts() {
      if (this.products.length === 0) return [];

      const grouped = groupBy(item => item.id)(this.products);
      const ids = Object.keys(grouped);
      const values = Object.values(grouped);

      return ids.map((id, index) => ({
        id,
        products: values[index],
        name: values[index][0].name,
        image: values[index][0].image,
        total: sumBy(product => product.price)(values[index])
      }));
    },
    productsAmount() {
      return this.products.length !== 1
        ? `(${this.products.length} itens)`
        : "(1 item)";
    }
  }
};
</script>

<style lang="scss" scoped src="./shopping-cart.scss" />
