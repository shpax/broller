import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import VueMask from "v-mask";
import VueCarousel from "vue-carousel";
import { EmbedPlugin } from "bootstrap-vue";
import VModal from "vue-js-modal";

Vue.use(VModal);
Vue.use(EmbedPlugin);

Vue.use(VueCarousel);
Vue.use(VueMask);

// Or as a directive
import { VueMaskDirective } from "v-mask";
Vue.directive("mask", VueMaskDirective);

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
// Install components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
