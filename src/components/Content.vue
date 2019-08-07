<template>
  <div>
    <div class="page-index" v-if="page_control.index">
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
              <router-link to="/intro" class="more-btn">more</router-link>
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
              <router-link to="/tool" class="more-btn">more</router-link>
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
              <router-link to="/plan" class="more-btn">more</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="page-intro" v-if="page_control.intro">
      <div class="title">
        <img class="head_photo" src="../assets/imgs/bg.jpg" alt />
        <div class="description">
          <h1>this is h1:introduct myself</h1>
          <div class="txt">
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
            Write HTML Using Notepad or TextEdit
            Web pages can be created and modified by using professional HTML editors.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["page"],
  data(page) {
    let now_page = page.$options.propsData.page;
    let page_control = {
      index: false,
      intro: false,
      tool: false,
      plan: false
    };
    console.log("this is content", now_page);
    switch (now_page) {
      case "index":
        page_control.index = true;
        break;
      case "intro":
        page_control.intro = true;
        break;
      case "tool":
        page_control.tool = true;
        break;
      case "plan":
        page_control.plan = true;
        break;
    }
    console.log({ page_control });
    return { page_control };
  }
};
</script>

<style lang="scss">
.page-index {
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
      transition: all 0.2s ease-in-out;

      &:active {
        transform: scale(0.9);
      }
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
}

.page-intro {
  padding: 50px;

  .title {
    display: flex;

    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid black;
    }

    h1 {
      margin: 0 0 20px;
      font-size: 30px;
    }

    .txt {
      width: 50%;
    }
  }

  .head_photo {
    width: 300px;
    height: 300px;
    margin: 0 50px 0 0;
    border-radius: 50%;
  }
}
</style>

