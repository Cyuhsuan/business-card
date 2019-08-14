<template>
  <footer>
    <div>
      <div class="group">
        <a href="https://www.facebook.com/profile.php?id=100002505830499" class="icon">
          <div class="fb"></div>
        </a>
        <a href="https://www.instagram.com/chang_yu_hsan/" class="icon">
          <div class="ig"></div>
        </a>
        <a href="https://line.me/ti/p/bTEbQHeA2a" class="icon">
          <div class="line"></div>
        </a>
      </div>
      <div class="footer_href">
        <router-link to="/">home</router-link> |
        <router-link to="/intro">introduction</router-link> |
        <router-link to="/tool">tool</router-link> |
        <router-link to="/plan">plan</router-link>
      </div>
      <p class="mail">x89301089@gmail.com</p>
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
    padding: 0 0 5px;

    .icon {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 10px 0;
      background: #fff;
    }

    .fb-icon {
      width: 45px;
      height: 45px;
    }

    .fb {
      width: 50px;
      height: 50px;
      background: url("../assets/icon/fb_b.png") no-repeat;
      background-size: contain;
    }
    .ig {
      width: 50px;
      height: 50px;
      background: url("../assets/icon/ig_r.png") no-repeat;
      background-size: cover;
    }
    .line {
      // position: absolute;
      // top: -5px;
      // left: -5px;
      width: 50px;
      height: 50px;
      background: url("../assets/icon/line_g.png") no-repeat;
      background-size: cover;
    }
  }

  .footer_href{
    color: #fff;
  }

  .mail{
    text-align: center;
    color: #fff;
  }
}
</style>
