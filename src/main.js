import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";

// 全引入
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);

// 按照需求引入部分组件
import { Message, Button, Select, Row } from "element-ui";

import store from "./store";

import Cleave from "cleave.js";
Vue.directive("cleave", {
  inserted: (el, binding) => {
    el.cleave = new Cleave(el, binding.value || {});
  },
  update: (el) => {
    el.value = el.cleave.properties.result;
    const event = new Event("input", { bubbles: true });
    el.dispatchEvent(event);
  },
});

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Select.name, Row);
// 方法需要追加道原型上面
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
