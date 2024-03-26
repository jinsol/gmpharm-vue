<template>
  <section class="event_header">
    <ul>
      <li
        v-for="(item, index) in menuCategory"
        :key="index"
        :class="{ active: selectedCategory == item }"
        @click="changeCategory(item)"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "진행중 이벤트",
    };
  },
  props: ["menuCategory"],
  methods: {
    changeCategory(category) {
      this.selectedCategory = category;
      this.$emit("changeCategory", category);
    },
  },
};
</script>

<style lang="scss" scoped>
.event_header {
  ul {
    display: flex;
    justify-content: space-between;
    li {
      flex-basis: 50%;
      text-align: center;
      padding: 2% 0;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      &.active {
        background: red;
      }
    }
  }
}
</style>
