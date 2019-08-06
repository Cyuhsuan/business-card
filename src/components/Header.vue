<template>
  <div>
    <header>
      <div class="title">yuHsuanC</div>
      <div class="group">
        <div class="btn"></div>
        <div class="btn"></div>
        <div class="btn">menu</div>
      </div>
    </header>
    <div class="modal">
      <div class="group_option">
        <div class="option">home</div>
        <div class="option">introduction</div>
        <div class="option">tool</div>
        <div class="option">plan</div>
      </div>
    </div>
  </div>
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

.modal {
  display: none;
  // display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
}

.group_option {
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

    &:hover{
      border-bottom: 1px solid #fff; 
      color: #fff;
    }

  }
}
</style>
