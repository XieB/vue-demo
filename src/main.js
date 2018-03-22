// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import axios from 'axios'
import Qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/reset.css'
import './assets/css/iconfont/iconfont.css'

var axios_instance = axios.create({
    baseURL: '',
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }]
})

// 添加请求拦截器
axios_instance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('auth');
        if (token) {
            config.headers.authorization = token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

// 添加响应拦截器
axios_instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status == '401') {  //过期失效
            router.replace({
                path: '/login',
                // param: {redirect: router.currentRoute.fullPath}
            })
        }
        return Promise.reject(error);
    }
);


Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Vue.use(ElementUI)
Vue.prototype.$http = axios_instance
/* eslint-disable no-new */
router.beforeEach(function (to, from, next) {
    let auth = sessionStorage.getItem('auth');
    if (to.meta.requireAuth && (auth == null || auth == '')) {
        next('/login');
    } else {
        next();
    }
})

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
