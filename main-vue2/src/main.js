import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 为 Angular 微应用所做的 zone 包注入
//Angular 运行依赖于 zone.js。
// qiankun 基于 single-spa 实现，single-spa 明确指出一个项目的 zone.js 只能存在一份实例，所以我们在主应用注入 zone.js。
//解决微应用是angualr式， zone.js 的问题
//必须import 'zone.js/dist/zone'
//安装命令：yarn add zone.js
import "zone.js/dist/zone";

import {registerMicroApps, start} from 'qiankun';
import apps from './apps'



Vue.config.productionTip = false


Vue.use(Antd);

new Vue({
    render: h => h(App)
}).$mount('#app')


/** 微前端 **/

//注册微应用
registerMicroApps(apps);

//设置默认进入的子应用
// setDefaultMountApp('/h5');

//启动微前端
start();
