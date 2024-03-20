<template>
  <main>
    <slide-section />
    <event-section />
    <best-product-section />
    <slide-section2 />
    <hot-section />
    <new-prd-section />
    <instargram-section />
    <go-link-section />

  </main>
</template>

<script>
import SlideSection from "@/components/HomeSection/SlideSection.vue"
import EventSection from "@/components/HomeSection/EventSection.vue"
import BestProductSection from "@/components/HomeSection/BestProductSection.vue"
import SlideSection2 from "@/components/HomeSection/SlideSection2.vue"
import HotSection from "@/components/HomeSection/HotSection.vue"
import NewPrdSection from "@/components/HomeSection/NewPrdSection.vue"
import instargramSection from "@/components/HomeSection/instargramSection.vue"
import GoLinkSection from "@/components/HomeSection/GoLinkSection.vue"

export default {
  name: "HomeView",
  components: {
    SlideSection,
    EventSection,
    BestProductSection,
    SlideSection2,
    HotSection,
    NewPrdSection,
    instargramSection,
    GoLinkSection,



  },
};
</script>

<style lang="scss" scoped>

</style>
