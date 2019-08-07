<template>
  <div>
    <Banner :page='page'/>
    <Content :page='page'/>
    <!-- <Contact /> -->
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Content from "@/components/Content.vue";
import Contact from "@/components/Contaction.vue";
export default {
  name: "index",
  components: {
    Banner: Banner,
    Content: Content,
    Contact: Contact
  },
  data(){
      let page = "index";
      return { page };
  }
};
</script>
<style lang="scss">
</style>
