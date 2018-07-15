/*引入Vue框架*/
import Vue from 'vue';
/*引入资源请求插件*/
import axios from 'axios';
axios.defaults.baseURL = 'http://47.96.29.109/vueProject/vue.php';

/*使用axios插件*/
Vue.prototype.$axios = axios;
export default({
});