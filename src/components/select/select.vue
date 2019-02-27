<template>
  <div :class="['select', showList ? 'opened' : '']">
    <div class="selected" @click="toggleList">
      {{ selected === -1 ? "Escolha um item" : list[selected].label }}
      <img src="@/assets/arrow-down-icon.svg" alt="arrow" />
    </div>
    <transition name="fade">
      <div class="list" v-if="showList">
        <div
          v-for="(item, index) in list"
          :class="['item', selected === index ? 'selected' : '']"
          :key="item.label"
          @click="chose(index)"
        >
          {{ item.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Number, String],
      default: -1
    }
  },
  data() {
    return {
      showList: false,
      selected: -1
    };
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
    },
    chose(index) {
      this.selected = index;
      this.$emit("input", index);
      this.showList = false;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selected = val;
      }
    }
  }
};
</script>

<style lang="scss" scoped src="./select.scss" />
