<template>
  <div>
    <header>
      <router-link to="/" class="title">yuHsuanC</router-link>
      <div class="group">
        <div class="btn"></div>
        <div class="btn"></div>
        <div class="btn" @click="show = !show">menu</div>
      </div>
    </header>
    <transition name="fade">
      <div class="modal" v-if="show">
        <div class="group_option">
          <transition name="scale">
            <i @click="show = !show"></i>
          </transition>
          <router-link to="/" class="option" @click.native="show = !show">home</router-link>
          <router-link to="/intro" class="option" @click.native="show = !show">introduction</router-link>
          <router-link to="/tool" class="option" @click.native="show = !show">tool</router-link>
          <router-link to="/plan" class="option" @click.native="show = !show">plan</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    let show = false;
    return { show };
  }
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  padding: 0 20px;
  background: #000;
  .title {
    font-size: 35px;
    color: #fff;
  }
  .btn {
    color: #aaa;
    transition: all .2s ease-in-out;

    &:hover {
      color: #fff;
    }
  }
}

.modal {
  // display: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
}

.group_option {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  background: #222;
  border: 2px solid #fff;
  border-radius: 10px;

  .option {
    width: 70%;
    height: 50px;
    margin: 0 0 20px;
    border-bottom: 1px solid #aaa;
    font-size: 30px;
    text-align: center;
    color: #aaa;
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      border-bottom: 1px solid #fff;
      color: #fff;
    }
  }

  i {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: url("../assets/icon/cancel.png") no-repeat;
    background-size: contain;
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }
}

.scale-enter-active{
  transition: test 0.5s;
}

.scale-leave-active{
  transition: test 0.5s reverse;
}
@keyframes test{
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1.3);
  }
}


.scale-enter,.scale-leave-tp{
  scale: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
