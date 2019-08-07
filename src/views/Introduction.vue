<template>
    <div>
        <Banner :page='page'/>
        <Content :page='page'/>
        <!-- <Footer /> -->
    </div>
</template>

<script>
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
  },
  data(){
      let page = "intro";
      return { page };
  }
};
</script>

<style lang="scss">
    
</style>
