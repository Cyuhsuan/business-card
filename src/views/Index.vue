<template>
  <div class="content">
    <!-- <Header /> -->
    <Banner />
    <Content />
    <Footer/>
  </div>
</template>
<script>
// import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "index",
  components: {
    // Header: Header,
    Banner: Banner,
    Content: Content,
    Footer: Footer
  }
};
</script>
<style lang="scss">
.content {
  width: 100%;
  height: 100vh;
  // background: url("../assets/imgs/bg.jpg") no-repeat;
  background-size: cover;
}
</style>
