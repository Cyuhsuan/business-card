<template>
  <footer>
    <div class="group">
      <i class="fb"></i>
      <i class="ig"></i>
      <i class="line"></i>
    </div>
  </footer>
</template>
<script>
export default {};
</script>

<style lang="scss">
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: #000;

  .group {
    display: flex;
    align-items: center;
    justify-content: center;

    i{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 10px 0;
    }

    .fb{
      background: url("../assets/icon/fb2.png") no-repeat;
      background-size: contain;
    }
    .ig{
      background: url("../assets/icon/ig.png") no-repeat;
      background-size: cover;
    }
    .line{
      background: url("../assets/icon/line.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>
