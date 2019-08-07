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
          <i @click="show = !show"></i>
          <router-link to="/" class="option" @click.native="show = !show">home</router-link>
          <router-link to="/intro" class="option" @click.native="show = !show">introduction</router-link>
          <div class="option">tool</div>
          <div class="option">plan</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    let show = false;
    return {show};
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

    &:hover{
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

    &:hover {
      border-bottom: 1px solid #fff;
      color: #fff;
    }
  }

  i{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: url("../assets/icon/cancel.png") no-repeat;
    background-size: contain;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
