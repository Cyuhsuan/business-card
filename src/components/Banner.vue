<template>
  <div class="banner-bg">
    <div class="banner">
      <div class="banner-content">
        <h1>{{title.title}}</h1>
        <p>{{title.content}}</p>
        <p>{{title.content_small}}</p>
      </div>
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
        title = {
          title: "An engineer who likes coding and trying anything new.",
          content: "What are you waiting for?",
          content_small: "Let's start!"
        };
        break;
      case "intro":
        title = {
          title: "Just be yourself and look around.",
          content: "You will know more about me",
          content_small: ""
        };
        break;
      case "tool":
        title = {
          title: "The more tools you use, the more skills you learn.",
          content: "",
          content_small: ""
        };
        break;
      case "plan":
        title = {
          title: "No GOAL, No SOUL.",
          content: "",
          content_small: ""
        };
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
.banner-bg {
  width: 100vw;
  height: 60h;
  background: url("../assets/imgs/bg3.jpg") no-repeat;
  background-size: cover;
  background-position: center center;

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    color: #fff;
    background: rgba(99, 99, 99, 0.6);
  }

  .banner-content {
    width: 50%;

    h1 {
      margin: 0 0 10px;
      text-align: center;
      font-size: 50px;
    }

    p {
      font-weight: bold;
      text-align: right;

      &:nth-child(2) {
        padding: 0 10px 0 0;
        margin: 0 0 10px;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .banner-content{
      width: 70vw;

      h1{
        font-size: 30px;
      }

      p{
        font-weight: normal;
        font-size: 15px;
      }
    }
  }
}
</style>
