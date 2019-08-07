<template>
  <div id="app">
    <Header />
    <transition
    name="fade"
    mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header: Header
  }
};
</script>

<style lang="scss">
@import "scss/minireset.scss";
#app {
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  .white {
    background: #fff;
  }
  .pink-deep {
    background: #f995b2;
  }

  .pink {
    background: #f4c3cc;
  }

  .blue {
    background: #8acdea;
  }

  .yallow {
    background: #f4da7a;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
