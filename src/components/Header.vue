<template>
  <header>
    <div class="title">yuHsuanC</div>
    <div class="group">
      <div class="btn"></div>
      <div class="btn"></div>
      <div class="btn">menu</div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
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
    color: #fff;
  }
}
</style>
