<template>
  <main class="row">
    <section-title title="장바구니" sub_title="장바구니내용" />
    <cart-list />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
<<<<<<< HEAD
import CartList from "@/components/myPage/CartList.vue";

=======

import CartList from "@/components/myPage/CartList.vue";
>>>>>>> origin/main
export default {
  name: "Cart",
  components: {
    SectionTitle,
    CartList,
  },
};
</script>

<style lang="scss" scoped></style>
