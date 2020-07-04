import Vue from "vue";
import Router from "vue-router";
import NoLoginPage from "@/components/NoLoginPage.vue";
import LoginPage from "../components/LoginPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Logout",
      component: NoLoginPage
    },
    {
      path: "/user",
      name: "Login",
      component: LoginPage
    }
  ]
});
