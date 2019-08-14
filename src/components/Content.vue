<template>
  <div>
    <div class="page-index" v-if="page_control.index">
      <div v-for="(item,key) in index_content">
        <section
          v-bind:class="{'white':key=='introduction','yallow':key=='tool','pink':key=='plan'}"
        >
          <h1>{{item.title}}</h1>
          <div class="group" v-bind:class="{'contrary':key=='tool'}">
            <div class="photo">
              <div class="myphoto" v-if="key=='introduction'"></div>
              <div class="photo-bg" v-if="key!='introduction'">
                <img v-if="key=='tool'" src="../assets/icon/logo.png" alt />
                <img v-if="key=='plan'" src="../assets/icon/plan.png" alt />
              </div>
            </div>
            <div class="description">
              <h2>{{item.description}}</h2>
              <p class="txt">
                {{item.txt}}
                <router-link to="/intro" class="more-btn" v-if="key=='introduction'">more</router-link>
                <router-link to="/tool" class="more-btn" v-if="key=='tool'">more</router-link>
                <router-link to="/plan" class="more-btn" v-if="key=='plan'">more</router-link>
              </p>
              <router-link to="/intro" class="more-btn-phone" v-if="key=='introduction'">more</router-link>
              <router-link to="/tool" class="more-btn-phone" v-if="key=='tool'">more</router-link>
              <router-link to="/plan" class="more-btn-phone" v-if="key=='plan'">more</router-link>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="page-other" v-if="page_control.intro">
      <div v-for="item in introduction_content">
        <h1 class="title">{{item.title}}</h1>
        <p class="txt">{{item.txt}}</p>
      </div>
    </div>
    <div class="page-other" v-if="page_control.tool">
      <div v-for="item in tool_content">
        <h1 class="title">{{item.title}}</h1>
        <p class="txt">{{item.txt}}</p>
      </div>
    </div>
    <div class="page-other" v-if="page_control.plan">
      <div v-for="item in plan_content">
        <h1 class="title">{{item.title}}</h1>
        <p class="txt">{{item.txt}}</p>
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

    let index_content = {};
    let introduction_content = {};
    let tool_content = {};
    let plan_content = {};
    index_content = {
      introduction: {
        title: "Introduction",
        description: "一個熱愛coding的數學系",
        txt:
          "一個在高雄長大卻跑到後山念書的學子,喜歡自然環境卻也喜歡科技帶來的便利,熱愛運動卻也喜歡宅在家看影集,興趣廣泛也充滿求知慾"
      },
      tool: {
        title: "Tool",
        description: "工程師就是解決問題的人",
        txt:
          "常常聽到別人說起工程師,印象就是熬夜、跟客戶交流的工作。但對我來說,工程師就是一個解決問題的人,解決問題的方法不只一種,沒有絕對好的方法,只有適合的方法"
      },
      plan: {
        title: "Plan",
        description: "有目標,人生才有活著的意義",
        txt:
          "目前在公司擔任前端工程師,負責撰寫網頁跟使用者的互動,但...這樣就滿足了嗎?與資料庫的互動也很好玩哦"
      }
    };

    introduction_content = {
      myself: {
        title: "ABOUT ME",
        txt:
          "畢業於東華大學數學系,由於在系上接受了很嚴謹的邏輯訓練,在期間的選修課偶然發現程式的魅力。運用合理的邏輯就可以做到自己想要的結果,甚至不合理也可以,程式居然充滿著無限可能。"
      },
      interest: {
        title: "LOVE OF OUTDOORS",
        txt:
          "熱愛運動,從高中跳舞跳到大學,由於就讀了一間全台灣最美麗的大學,我很幸運地擁有與眾不同的大學生活。朔溪、泛舟、海泳,我所經歷的每一項事物朔造了如今的我,正如我的基因般拓印在我的靈魂中。"
      },
      experience: {
        title: "EXPERIENCE",
        txt:
          "一年的海軍陸戰莒拳隊退伍,當兵的期間,我原是可以安安穩穩的站哨渡過我一年的軍旅生涯,但我發現可以預期的生活竟是如此的沒有挑戰跟希望,所以我選擇報訓來挑戰自己,也是在此時,發現自己對於挑戰跟未知充滿幹勁。大學畢業後曾糾結研究所跟職場,人生是一道道的選擇題,比起茫茫無知而不知為何的選擇研究所,我毅然的決定進入職場,現在在公司擔任一個前端工程師。"
      }
    };

    tool_content = {
      basic: {
        title: "BASIC",
        txt:
          "HTML、CSS、JavaScript 的原生方式我認為是寫網頁的基礎。當然,原生的寫法免不了要借助 JQuery 的幫助"
      },
      angular: {
        title: "Angular",
        txt:
          "身為最多人使用的前端框架怎麼能不接觸呢,平常在公司的 case 大部分都是使用 angular 作為前端的開發框架"
      },
      vue: {
        title: "Vue",
        txt:
          "前端框架中的新星,看中他的輕量,跟提供給工程師全新的開發體驗,目前正在熟悉中,而你現在看到的這個網頁正是由Vue開發而成的一頁式網頁哦(Single Page Application SPA),使用起來有沒有覺得很流暢呢"
      },
      laravel: {
        title: "Laravel",
        txt:
          "PHP 框架,已有初步的認識,可以跟 MySql 溝通,基本的 CRUD 也難不倒我,積極的學習中"
      }
    };
    plan_content = {
      plan: {
        title: "朝後端前進",
        txt:
          "身為一個前端工程師,不可避免的,常會跟後端做串接的動作,或許是個性使然,讓我不禁好奇後端的架構究竟是如何打造的。目前給了自己幾個 side project 的目標,研究 laravel 是最重要的一個,而你們看到的這個網站也是其中的 side project 之一,當你們看到這個網站時代表我這個 side project 已告一段落,期待我的成長吧"
      }
    };

    return {
      page_control,
      index_content,
      introduction_content,
      tool_content,
      plan_content
    };
  }
};
</script>

<style lang="scss">
.page-index {
  z-index: 0;

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

        // img {
        //   width: 300px;
        //   height: 300px;
        //   border-radius: 50%;
        // }

        .myphoto {
          width: 300px;
          height: 300px;
          background: url("../assets/imgs/myphoto.jpg") no-repeat;
          background-size: 100% 130%;
          border-radius: 50%;
        }

        .photo-bg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 300px;
          background: #fff;
          border-radius: 50%;
        }

        h2 {
          margin: 0 0 20px 0;
          font-size: 35px;
        }

        .txt {
          z-index: 0;
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

    .more-btn-phone {
      display: none;
      width: 70vw;
      height: 10vw;
      font-size: 30px;
      margin: 20px auto 0;
      border: 1px solid black;
      text-align: center;
    }

    .contrary {
      flex-direction: row-reverse;

      .description {
        // justify-content: flex-end;
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

  @media screen and (max-width: 1000px) {
    section {
      padding: 20px 5px;

      .group {
        display: block;

        .photo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          padding: 0;
        }

        .description {
          // display: flex;
          // justify-content: center;
          text-align: center;
          padding: 10px 0;
          width: 100vw;
          font-size: 20px;

          .txt {
            width: 80vw;
            margin: 0 auto;
            text-align: center;
            font-size: 20px;
          }

          h2 {
            font-size: 30px;
          }
        }
      }

      .more-btn {
        display: none;
      }
      .more-btn-phone {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.page-other {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;

  .title {
    font-size: 35px;
    text-align: center;
  }

  .txt {
    width: 50vw;
    margin: 0 auto 20px;
    text-align: center;
    line-height: 40px;
  }

  @media screen and (max-width: 1000px) {
    .txt {
      width: 70vw;
      font-size: 15px;
      line-height: 20px;
    }
  }
}
</style>

