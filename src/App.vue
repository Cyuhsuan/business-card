<template>
  <div id="app">
    <transition></transition>
    <Header />
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header: Header,
    Footer: Footer
  },
  data() {
    return {
      prevHeight: 0
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
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
body {
  padding: 65px 0 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
