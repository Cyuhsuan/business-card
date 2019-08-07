import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Index.vue";
import Intro from "./views/Introduction.vue";
import Tool from "./views/Tool.vue";
import Plan from "./views/Plan.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro
    },
    {
      path: "/tool",
      name: "tool",
      component: Tool
    },
    {
      path: "/plan",
      name: "plan",
      component: Plan
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});