<template>
  <div class="banner">
    <div class="banner-content">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data(page) {
    let now_page = page.$options.propsData.page;
    let title = "";
    switch (now_page) {
      case "index":
        title = "this is index";
        break;
      case "intro":
        title = "this is intro";
        break;
      case "tool":
        title = "this is index";
        break;
      case "plan":
        title = "this is index";
        break;
    }
    return { title };
  },
  methods: {
    init() {}
  },
  props: ["page"]
};
</script>

<style lang="scss">
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  margin: 65px 0 0;
  background: rgba(99, 99, 99, 0.5);
}

.banner-content {
  width: 50%;

  h1 {
    text-align: center;
    font-size: 50px;
  }
}
</style>
