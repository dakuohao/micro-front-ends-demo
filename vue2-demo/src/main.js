// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import './public-path';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

let instance = null;

function render(props = {}) {
    const {container} = props;
    instance = new Vue({
        render: (h) => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}


//qiankun生命周期钩子
export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
    console.log('[vue] vue app mount');
    console.log('[vue] props from main framework', props);
    render(props);
}

export async function unmount() {
    console.log('[vue] vue app unmount');
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}