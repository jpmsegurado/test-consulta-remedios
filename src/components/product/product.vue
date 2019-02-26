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
      <button>
        adicionar ao carrinho
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    productInfo: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped src="./product.scss" />
