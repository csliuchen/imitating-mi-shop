import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import env from './env';
// 根据跨域来做调整
axios.defaults.baseURL = "/api"; //暂且定为api
axios.defaults.timeout = 8000;
//根据环境变量来获取 baseurl
axios.defaults.baseURL = env.baseURL;
//错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data; // 此处data是axios的
  //0:已登陆，10:未登录
  if (res.status == 0) {
    return res.data; //此处 data 和 status 都是 api 的
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios); //把axios对象挂载上去这样就不用每次都import
Vue.config.productionTip = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
