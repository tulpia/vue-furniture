import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

Vue.component("app-header", Header);
Vue.component("app-footer", Footer);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
