<template>
  <div>
    <section class="white">
      <h1>introduction</h1>
      <div class="group">
        <div class="photo">
          <img src="../assets/imgs/bg.jpg" alt />
        </div>
        <div class="description">
          <h2>this is h2</h2>
          <div class="txt">
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
            <div class="more-btn">more</div>
          </div>
        </div>
      </div>
    </section>
    <section class="yallow">
      <h1>tool</h1>
      <div class="group contrary">
        <div class="photo">
          <img src="../assets/imgs/bg.jpg" alt />
        </div>
        <div class="description">
          <h2>this is h2</h2>
          <div class="txt">
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
            <div class="more-btn">more</div>
          </div>
        </div>
      </div>
    </section>
    <section class="white">
      <h1>plan</h1>
      <div class="group">
        <div class="photo">
          <img src="../assets/imgs/bg.jpg" alt />
        </div>
        <div class="description">
          <h2>this is h2</h2>
          <div class="txt">
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
            <div class="more-btn">more</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
section {
  // display: flex;
  width: 100%;
  height: 700px;
  padding: 150px 0;
  // border-bottom:1px solid black;

  h1 {
    width: 200px;
    height: 50px;
    border: 1px solid black;
    text-align: center;
    font-size: 35px;
    margin: 0 auto 20px;
  }

  .group {
    display: flex;

    .photo,
    .description {
      display: flex;
      width: 50%;

      img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
      }

      h2 {
        margin: 0 0 20px 0;
        font-size: 35px;
      }

      .txt {
        width: 450px;
        position: relative;
      }
    }

    .description {
      flex-direction: column;
      padding: 50px 0 0 0;
      text-align: left;
    }

    .photo {
      justify-content: flex-end;
      padding: 0 70px 0 0;
    }
  }

  .more-btn {
    position: absolute;
    bottom: -50px;
    left: 380px;
    width: 70px;
    border: 1px solid black;
    text-align: center;
  }

  .contrary {
    flex-direction: row-reverse;

    .description {
      //   justify-content:flex-end;
      text-align: right;
      flex-wrap: wrap-reverse;
    }

    .more-btn {
      left: 0;
    }

    .photo {
      padding: 0 50px;
      justify-content: flex-start;
    }
  }
}
</style>

