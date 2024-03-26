import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
<<<<<<< HEAD
import store from "./store";
import router from "./router";
import "./assets/css/reset.css";
=======
import store from "@/store";
import router from "@/router";
import "@/assets/css/reset.css";
>>>>>>> origin/main

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
