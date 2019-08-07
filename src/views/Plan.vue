<template>
  <div>
    <Banner :page="page" />
    <Content :page="page" />
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "plan",
  components: {
    // Header: Header,
    Banner: Banner,
    Content: Content,
    Footer: Footer
  },
  data() {
    let page = "plan";
    return { page };
  }
};
</script>