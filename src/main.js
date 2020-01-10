import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from 'axios'

Vue.config.productionTip = false;

// 使用mint-ui引入全部的组件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

// 配置公共的url
Axios.defaults.baseURL = "http://www.sinya.online/api/"
// 配置axios
Vue.prototype.$axios = Axios;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
