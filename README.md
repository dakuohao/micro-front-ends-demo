# 微前端Demo
微前端架构具体实践

# 项目架构
- 微前端框架：[qiankun](https://qiankun.umijs.org/zh)
- 框架：[UmiJS](https://umijs.org/zh-CN)


# 快速启动

```shell
# 安装主依赖
yarn
# 一键安装全部应用的依赖
yarn all:install

# 启动所有服务
yarn all:serve

```
启动后各应用绑定端口如下：
- main-vue2 ：http://localhost:8000
- main-react ：http://localhost:9000


- vue2-demo ：http://localhost:8001
- vue3-demo ：http://localhost:8002
- react-demo ：http://localhost:8003
- angular-demo ：http://localhost:8004
- h5-demo ：http://localhost:8005


# 文档
https://www.yuque.com/docs/share/140f7bde-50ef-4332-9068-085e78fbde07?# 《微前端落地实践》


# 关于umi
- uim介绍：https://umijs.org/zh-CN
- umi对qiankun的支持，微前端：https://umijs.org/zh-CN/plugins/plugin-qiankun

使用不多，见子项目
- umi-demo: 试玩umi
- umi-plugin-qiankun-master： umi的微前端支持插件 试玩

---
---


# 微前端落地实践-记录
# 微前端解决的问题

**问题：**

- 现代网站越来越复杂：业务功能越来越多，开发人员越来越多
- 软件工程中，工程问题开始大于软件本身的技术问题
- 这个时候需要一种解决方案来降低工程的复杂性

**理论支撑：**

- 由“**康威定律**”知系统的复杂度主要取决于系统之间的沟通方式
- 人越多，沟通越多，协同越多，效率越低，内耗越高
- 软件组件和模块越多，之间的交互越多，，效率越低，内耗越高
- 降低内耗的有效方式是减少沟通成本（降低沟通或干脆不沟通）

**解决方案：**

- 解耦：后端微服务，前端微前端，微前端是把后端技术范式“微服务”扩展到了前端，目的还是“解耦”
- **对技术的解耦，本质是对人的解耦。**
- 把一个网站分成多个模块，每个模块由独立的团队完成，各团队之间沟通减少，内部依赖性高，即技术和架构上的“高内聚低耦合”。
- 同时，各团队之间技术选型可以不一样，每个团队选择适合自己团队的技术框架实现，用最合适的、成本最低的方式实现网站。

**补充说明：**
当然，任何技术都没有银弹，合适场景下选适合的技术。

# 微前端落地实现

## 技术选型

- 微前端框架：[qiankun](https://qiankun.umijs.org/zh)
- 开发环境：[IDEA](https://www.jetbrains.com/zh-cn/idea/)（不用vscode）

  ## 环境准备

  ```shell
  ### 准备开发环境
  # 安装nodejs
  # 下载地址：http://nodejs.cn/download/
  # 根据你的操作系统，安装合适的nodejs
  # 安装完的nodejs默认带包管理器npm
  ```

```
### npm设置淘宝镜像源,国内网络环境不好

# 首先查看当前镜像源

npm config get registry

# 设置淘宝镜像源

npm config set registry https://registry.npm.taobao.org

# 需要换回时改为官方的镜像源

npm config set registry https://registry.npmjs.org

# 不用npm，安装包管理器yarn

npm install -g yarn

### 集成开发工具

安装IDEA，也安装vscode
```


# 创建项目并实践微前端
我们使用多种技术框架创建多个demo，区分为使用打包工具webpack打包的和不适用webpack打包的

使用webpack打包的，是使用nodejs现代技术，比如vue、react、angular等框架组件化、模块化开发的
不使用webpack打包的，是传统老项目，比如jQuery，HTML，CSS，js开发的静态网站，或者php，JSP等后端渲染技术的网站也归属于这类。

创建多个项目：

- vue2：vue2框架搭建的demo，绑定端口**8001**
- vue3：vue3框架创建的demo，绑定端口**8002**
- react：react框架创建的demo，绑定端口**8003**
- angular：angular框架创建的demo，绑定端口**8004**
- h5：非webpack打包的，纯html静态网站（代表老旧网站，使用html+css+js写的静态页面，另外php，JSP，jQuery等等也等同），绑定端口**8005**

然后我们选其中一个demo为主应用，其他demo为子应用，扩展为微前端架构
我实验了vue2和react做主应用，其他自己实验吧，举一反三

- 选vue2为主应用，绑定端口**8000**
- 选react为主应用，绑定端口**9000**

## 创建一个工作区
```shell
# 创建一个目录作为工作区
mkdir micro-frond-ends-demo
cd micro-frond-ends-demo
````

## 创建vue2-demo

```shell
###安装vue-cli
# 文档：https://cli.vuejs.org/zh/guide/installation.html
npm install -g @vue/cli

# 创建vue2-demo
vue create vue2-demo
cd vue2-demo

# 修改绑定端口为8001
# 创建一个与package.json同级的文件vue.config.js并添加如下内容
module.exports = {
    devServer: {
        port: 8001 //修改为你需要的端口
    }
}

# 启动项目
yarn serve
```

打开: [http://localhost:8001/](http://localhost:8001/)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639019797087-3b02b29c-7d1a-49de-96ae-437f2197b59b.png#clientId=u9fb0bf1f-81f1-4&from=paste&height=551&id=uabf7e0e0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1102&originWidth=1000&originalType=binary&ratio=1&size=88533&status=done&style=none&taskId=u0598e169-111d-4da7-b1e4-c54c6b4110f&width=500)

## 创建vue3-demo

```powershell
# 创建vue3-demo
vue create vue3-demo
cd vue3-demo

# 更改端口绑定为8002
# 创建一个与package.json同级的文件vue.config.js并添加如下内容
module.exports = {
    devServer: {
        port: 8002 //修改为你需要的端口
    }
}

# 启动项目
yarn serve
```

打开地址： [http://localhost:8002/](http://localhost:8002/)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639019857790-5d0eb2a6-6352-4edb-af21-5bb635b2ef29.png#clientId=u9fb0bf1f-81f1-4&from=paste&height=581&id=u7391aad8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1162&originWidth=1100&originalType=binary&ratio=1&size=93639&status=done&style=none&taskId=uf1cdeb56-ade4-465e-9979-a91324eac9d&width=550)

## 创建react-demo

```shell
# npx是 npm 5.2+ 附带的 package 运行工具
# 文档：https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app
npx create-react-app my-app

# 修改端口绑定到8003
# package.json的scripts执行前增加环境变量
# windows：set PORT=8003 && react-scripts start
# linux或macos：PORT=4003 react-scripts start
"serve": "set PORT=8003 && react-scripts start",

# 启动项目
yarn serve
```

打开地址：[http://localhost:8003](http://localhost:8003)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639031454671-71a9e7a0-ab7e-4b46-9716-5050ae2ec779.png#clientId=u9fb0bf1f-81f1-4&from=paste&height=736&id=ufddd1b6b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1472&originWidth=1376&originalType=binary&ratio=1&size=143600&status=done&style=none&taskId=u1be89736-39c0-4a76-a597-045a0d2691b&width=688)

## 创建angualr-demo

```shell
# 安装angualr-cli
# 文档：https://angular.cn/cli
npm install -g @angular/cli

#创建项目
ng new angualr-demo

# 修改端口
# package.json文件scripts增加
"serve": "ng serve --port 8004"

# 启动项目
yarn serve
```

打开地址： [http://localhost:8004/](http://localhost:8004/)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639034332794-d975783a-00cd-4b2d-81ea-baf24b11cb14.png#clientId=u9fb0bf1f-81f1-4&from=paste&height=670&id=u19b2c4b3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1340&originWidth=1885&originalType=binary&ratio=1&size=155546&status=done&style=none&taskId=uac00d87d-f704-4dd4-bbe6-fca53dad7dd&width=942.5)

## 创建静态h5-demo

创建一个简单的html

```shell
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>H5静态页面</title>
    <script src="//cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
<div class="content">
    <h1>h5-demo</h1>
    静态HTML页面示例
</div>
<div class="h5-content">
</div>
<style>
    .content {
        text-align: center;
        font-size: large;
        padding: 200px 0;
    }
</style>
</body>

</html>
```

为了方便启动，安装一个简单的http-server，然后配置可以跨域访问，新建package.json

```shell
{
  "name": "h5-demo",
  "version": "1.0.0",
  "main": "index.html",
  "scripts": {
    "serve": "cross-env PORT=8005 http-server . --cors",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "cross-env": "^7.0.2",
    "http-server": "^0.12.1"
  }
}
```

启动项目

```shell
# 安装依赖
yarn

#启动项目
yarn serve
```

访问地址：[http://localhost:8005/](http://localhost:8005/)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639115747493-02926789-4c8c-4dad-81c7-8184f73be044.png#clientId=u7d7286d7-c341-4&from=paste&height=249&id=u9f7e9505&margin=%5Bobject%20Object%5D&name=image.png&originHeight=497&originWidth=781&originalType=binary&ratio=1&size=17023&status=done&style=none&taskId=u427b4ac6-ef06-4c9c-9d40-59800754577&width=390.5)

# 改造为微前端

- 按照qiankun官网微前端文档：[https://qiankun.umijs.org/zh/guide/tutorial](https://qiankun.umijs.org/zh/guide/tutorial)
- 1.改造主应用
- 2.改造子应用

![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639116044574-63602df7-df43-46cb-bd08-95f8932d4955.png#clientId=u7d7286d7-c341-4&from=paste&height=700&id=u54e940c4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1399&originWidth=1907&originalType=binary&ratio=1&size=81382&status=done&style=none&taskId=u59a9cedb-91fe-46b3-aea6-be380d99996&width=953.5)

我们做一个如上图的主应用，中间content部分替换为子应用

- 设计语言使用阿里的：[ant desgin](https://ant.design/components/layout-cn/)
- vue组件库使用[ ant desgin vue](https://www.antdv.com/docs/vue/getting-started-cn/)
- react组件库使用 [ant desgin](https://ant.design/docs/react/use-with-create-react-app-cn)

使用布局Layout：
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639116260814-df5e3b35-3b64-45ed-95db-377b21f77cd5.png#clientId=u7d7286d7-c341-4&from=paste&height=220&id=u1be7a9c1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=439&originWidth=1092&originalType=binary&ratio=1&size=15537&status=done&style=none&taskId=u506234c6-f1f6-4eea-b7ff-29846fccabf&width=546)
使用导航菜单Menu：
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639116329489-85e192d2-5d35-4715-91f7-c11cf79d0dba.png#clientId=u7d7286d7-c341-4&from=paste&height=52&id=u2c487e0f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=103&originWidth=718&originalType=binary&ratio=1&size=6142&status=done&style=none&taskId=ub15f5c48-2de0-4fa7-90ac-b22efc6fdfc&width=359)

## 主应用使用vue

```shell
# 创建一个vue2的项目
vue create main-vue
cd main-vue

# 安装ant desgin vue
yarn add  ant-design-vue

##### 引入ant并创建布局，App.vue改为
<template>
  <a-layout id="components-layout-demo-top-side">

    <a-layout-header class="header">
      <a-menu theme="dark" mode="horizontal">
        <a-menu-item key="1"><a href="/home">首页</a></a-menu-item>
        <a-menu-item key="2"><a href="/vue2">vue2示例</a></a-menu-item>
        <a-menu-item key="3"><a href="/vue3">vue3示例</a></a-menu-item>
        <a-menu-item key="4"><a href="/react">react示例</a></a-menu-item>
        <a-menu-item key="5"><a href="/angular">angular示例</a></a-menu-item>
        <a-menu-item key="6"><a href="/h5">h5示例</a></a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content>
      <a-layout-content class="content">
        <div id="subapp">
          Content 内容
        </div>
      </a-layout-content>
    </a-layout-content>

    <a-layout-footer style="text-align: center;color:white;background-color: #1a1919">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>

  </a-layout>
</template>

<style>
#subapp {
  text-align: center;
  min-height: 800px;
}
</style>

<script>

export default {
  name: 'App',
}
</script>


##### 注册为qiankun主应用
#创建子应用路由数组  apps.js
module.exports = [
    {
        name: 'vue2-demo',
        entry: '//localhost:8001',
        container: '#subapp',
        activeRule: '/vue2',
    },
    {
        name: 'vue3-demo',
        entry: '//localhost:8002',
        container: '#subapp',
        activeRule: '/vue3',
    },
    {
        name: 'react-demo',
        entry: '//localhost:8003',
        container: '#subapp',
        activeRule: '/react',
    },
    {
        name: 'angular-demo',
        entry: '//localhost:8004',
        container: '#subapp',
        activeRule: '/angular',
    },
    {
        name: 'h5-demo',
        entry: '//localhost:8005',
        container: '#subapp',
        activeRule: '/h5',
    },
]

# main.js注册子应用
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
```

## 改造微应用

建议一个一个的改造子应用，主应用中定义子路由的apps.js可以注释一部分，子应用一个一个的注册，调试

## 微应用vue2-demo

1. 在 src 目录新增 public-path.js

  ```shell
  if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
  ```

2. 入口文件 main.js 修改，为了避免根 id #app 与其他的 DOM 冲突，需要限制查找范围。

  ```shell
  // import Vue from 'vue'
  // import App from './App.vue'
  //
  // Vue.config.productionTip = false
  //
  // new Vue({
  //   render: h => h(App),
  // }).$mount('#app')
  ```


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

````
3. 打包配置修改（vue.config.js）
```shell
const {name} = require('./package.json');
module.exports = {
    devServer: {
        port: 8001,//修改为你需要的端口
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};
````

## 微应用vue3-demo

基本跟vue2-demo一致，只是js改成了ts

1. 在 src 目录新增 public-path.js

  ```shell
  if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
  ```


````
2. 入口文件 main.js 修改，为了避免根 id #app 与其他的 DOM 冲突，需要限制查找范围。
```shell
import './public-path';
import {createApp} from 'vue';
import App from './App.vue';

let instance = null;


function render(props = {}) {
    const {container} = props;
    instance = createApp(App);
    instance.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

function storeTest(props) {
    props.onGlobalStateChange &&
    props.onGlobalStateChange(
        (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
        true,
    );
    props.setGlobalState &&
    props.setGlobalState({
        ignore: props.name,
        user: {
            name: props.name,
        },
    });
}

export async function mount(props) {
    storeTest(props);
    render(props);
    instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
    instance.unmount();
    instance._container.innerHTML = '';
    instance = null;
}
````

3. 打包配置修改（vue.config.js）

  ```shell
  const {name} = require('./package');
  ```


module.exports = {
devServer: {
port: 8002, //修改为你需要的端口
headers: {
'Access-Control-Allow-Origin': '*',
},
},
// 自定义webpack配置
configureWebpack: {
output: {
// 把子应用打包成 umd 库格式
library: `${name}-[name]`,
libraryTarget: 'umd',
jsonpFunction: `webpackJsonp_${name}`,
},
},
};

````
## 微应用react-demo

1. 在 src 目录新增 public-path.js
```shell
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
````

2. 设置 history 模式路由的 base

  ```shell
  <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
  ```


````
3. 入口文件 index.js 修改，为了避免根 id #root 与其他的 DOM 冲突，需要限制查找范围。
```shell
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function render(props) {
    const { container } = props;
    ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[react16] react app mount');
    console.log('[react16] props from main framework', props);
    render(props);
}

export async function unmount(props) {
    console.log('[react16] react app unmount');
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
````

4. 修改 webpack 配置,安装插件 @rescripts/cli

  ```shell
  yarn add @rescripts/cli
  ```

根目录新增 .rescriptsrc.js

  ```shell
  const { name } = require('./package');
  ```


module.exports = {
webpack: (config) => {
config.output.library = `${name}-[name]`;
config.output.libraryTarget = 'umd';
config.output.jsonpFunction = `webpackJsonp_${name}`;
config.output.globalObject = 'window';

```
    return config;
},

devServer: (_) => {
    const config = _;

    config.headers = {
        'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
},
```

};

````
修改 package.json：
```shell

-   "start": "react-scripts start",
+   "serve": "set PORT=8003 && rescripts start",
-   "build": "react-scripts build",
+   "build": "rescripts build",
-   "test": "react-scripts test",
+   "test": "rescripts test",
-   "eject": "react-scripts eject"
````

## 微应用angular-demo

接入angular较为繁琐，当然这对于选用angualr技术的团队来说，这不算什么。
我这边使用最新版angular，集成顺利

```shell
ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 13.0.4
Node: 16.13.0
Package Manager: npm 8.1.0
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1300.4 (cli-only)
@angular-devkit/core         13.0.4 (cli-only)
@angular-devkit/schematics   13.0.4 (cli-only)
@schematics/angular          13.0.4 (cli-only)
```

1. 在 src 目录新增 public-path.js 文件

  ```shell
  if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
  ```

2. 设置 history 模式路由的 base，src/app/app-routing.module.ts 文件
  ```shell
  

- import { APP_BASE_HREF } from '@angular/common';
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
- // @ts-ignore
- providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/angular' : '/' }]
  })

````
3. 修改入口文件，src/main.ts 文件。
```shell
// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


import 'public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: Object) {
  console.log(props);
}

export async function mount(props: Object) {
  render();
}

export async function unmount(props: Object) {
  console.log(props);
  // @ts-ignore
  app.destroy();
}
````

4. 修改 webpack 打包配置

先安装 @angular-builders/custom-webpack 插件，**注意：angular 9 项目只能安装 9.x 版本，angular 10 项目可以安装最新版**。

```shell
yarn add @angular-builders/custom-webpack
```

在根目录增加 custom-webpack.config.js ，内容为：

```shell
const {name} = require('./package');
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    //加这行 报错，去掉
    // jsonpFunction: `webpackJsonp_${appName}`,
  },
};
```

修改 angular.json，将 [packageName] > architect > build > builder 和 [packageName] > architect > serve > builder 的值改为我们安装的插件，将我们的打包配置文件加入到 [packageName] > architect > build > options。

```shell
- "builder": "@angular-devkit/build-angular:browser",
+ "builder": "@angular-builders/custom-webpack:browser",
  "options": {
+    "customWebpackConfig": {
+      "path": "./custom-webpack.config.js"
+    }
  }



- "builder": "@angular-devkit/build-angular:dev-server",
+ "builder": "@angular-builders/custom-webpack:dev-server",
```

5. 解决 zone.js 的问题

在**父应用**引入 zone.js，需要在 import qiankun 之前引入。

```shell
// 为 Angular 微应用所做的 zone 包注入
//Angular 运行依赖于 zone.js。
// qiankun 基于 single-spa 实现，single-spa 明确指出一个项目的 zone.js 只能存在一份实例，所以我们在主应用注入 zone.js。
//解决微应用是angualr式， zone.js 的问题
//必须import 'zone.js/dist/zone'
//安装命令：yarn add zone.js
import "zone.js/dist/zone";
```

将**微应用**的 src/polyfills.ts 里面的引入 zone.js 代码删掉。

```shell
// import 'zone.js';  // Included with Angular CLI.
```

6. 修正 ng build 打包报错问题，修改 tsconfig.json 文件，参考[issues/431](https://github.com/umijs/qiankun/issues/431)
  ```shell
  

- "target": "es2015",
  

- "target": "es5",
  
- "typeRoots": [
  
- "node_modules/@types"
  
- ],
  

7. 为了防止主应用或其他微应用也为 angular 时，<app-root></app-root> 会冲突的问题，建议给<app-root> 加上一个唯一的 id，比如说当前应用名称。

src/index.html ：

```shell
- <app-root></app-root>
+ <app-root id="angular9"></app-root>
```

src/app/app.component.ts ：

```shell
- selector: 'app-root',
+ selector: '#angular9 app-root',
```

**特别说明：angular本身适配了single-spa,**如果嫌弃angular接入步骤太繁琐，也可以选择使用 single-spa-angular 插件，参考[single-spa-angular 的官网](https://single-spa.js.org/docs/ecosystem-angular) 和 [angular demo](https://github.com/umijs/qiankun/tree/master/examples/angular9)。我尝试安装没有成功，各种报错。。。遂放弃。

## 微前端h5-demo

增加一个entry.js入口文件

```shell
//声明一个入口文件，用于暴漏相对应的生命周期
//额外创建一个script文件entry用于 export 相对应的 lifecycles

const render = ($) => {
    //页面渲染完了 执行操作 比如使用jQuery
    $('#h5-content').html('Hello, render with jQuery');
    return Promise.resolve();
};

((global) => {
    global['h5-demo'] = {
        bootstrap: () => {
            console.log('生命周期 bootstrap');
            return Promise.resolve();
        },
        mount: () => {
            console.log('生命周期 mount');
            return render($);
        },
        unmount: () => {
            console.log('生命周期 unmount');
            return Promise.resolve();
        },
    };
})(window);
```

index.html增加entry.js

```shell
<script src="entry.js" entry></script>
```

## npm管理多个项目

多个项目手工启动麻烦，使用npm管理
在主工作区micro-frond-ends-demo目录创建package.json

```shell
cd micro-frond-ends-demo
yarn init

#然后安装npm-run-all  文档：https://github.com/mysticatea/npm-run-all
yarn add npm-run-all --dev


npm-run-all 提供了多种运行多个命令的方式，常用的有以下几个：
--parallel: 并行运行多个命令
--serial: 多个命令按排列顺序执行
--continue-on-error: 是否忽略错误，添加此参数 npm-run-all 会自动退出出错的命令，继续运行正常的
--race: 添加此参数之后，只要有一个命令运行出错，那么 npm-run-all 就会结束掉全部的命令


### 添加常用脚本
"scripts": {
    "all:install": "npm-run-all --serial install:*",
    "all:serve": "npm-run-all --parallel serve:*",
    "install:vue2-demo": "cd vue2-demo && yarn",
    "install:vue3-demo": "cd vue3-demo && yarn",
    "install:react-demo": "cd react-demo && yarn",
    "install:angular-demo": "cd angular-demo && yarn",
    "install:h5-demo": "cd h5-demo && yarn",
    "install:main-vue2": "cd main-vue2 && yarn",
    "serve:vue2-demo": "cd vue2-demo && yarn serve",
    "serve:vue3-demo": "cd vue3-demo && yarn serve",
    "serve:react-demo": "cd react-demo && yarn serve",
    "serve:angular-demo": "cd angular-demo && yarn serve",
    "serve:h5-demo": "cd h5-demo && yarn serve",
    "serve:main-vue2": "cd main-vue2 && yarn serve"
  }

 # 安装全部项目依赖
 yarn all:install

 # 启动所有项目
 yarn all:serve
```

## 改造完成 看下效果

首页 [http://localhost:8000/home](http://localhost:8000/home)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639118499555-292494f3-2029-42c0-9bd4-31411d06f106.png#clientId=u7d7286d7-c341-4&from=paste&height=772&id=u4d3ea652&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1544&originWidth=1911&originalType=binary&ratio=1&size=94910&status=done&style=none&taskId=u948c1f41-ea35-4cf9-894f-8df27cdb6b6&width=955.5)
vue2示例：[http://localhost:8000/vue2](http://localhost:8000/vue2)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639118538895-0e6d5960-708a-4430-84b1-767e8b859587.png#clientId=u7d7286d7-c341-4&from=paste&height=730&id=u6c2345bc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1460&originWidth=1901&originalType=binary&ratio=1&size=145344&status=done&style=none&taskId=u7dd00b4c-fee9-45f5-ac0c-d8a6b5ca160&width=950.5)
vue3示例：[http://localhost:8000/vue3](http://localhost:8000/vue3)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639118563021-f825df55-6672-49e4-af01-670a7946dc18.png#clientId=u7d7286d7-c341-4&from=paste&height=726&id=uc0d4500b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1452&originWidth=1883&originalType=binary&ratio=1&size=146536&status=done&style=none&taskId=u9b278614-97d0-4f30-843c-cccd43c2ff1&width=941.5)
react示例：[http://localhost:8000/react](http://localhost:8000/react)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639118586057-31f11688-da35-4a2e-9d85-348528d3fd4d.png#clientId=u7d7286d7-c341-4&from=paste&height=866&id=u0f7df863&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1732&originWidth=1828&originalType=binary&ratio=1&size=184591&status=done&style=none&taskId=u564c8f0d-9edf-4b7f-aa17-69baa57dc2a&width=914)
angular示例：[http://localhost:8000/angular](http://localhost:8000/angular)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639118728899-cba2e827-59c7-4cf8-b9e5-3b11269558b6.png#clientId=u7d7286d7-c341-4&from=paste&height=854&id=u7a12aad1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1707&originWidth=1912&originalType=binary&ratio=1&size=188902&status=done&style=none&taskId=u99d51a80-185e-42d8-a5da-27e8e2c71a8&width=956)
h5示例：[http://localhost:8000/h5](http://localhost:8000/h5)
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639118760176-4fd3c2de-1f2e-4c26-9cbb-1a5407f03ec6.png#clientId=u7d7286d7-c341-4&from=paste&height=591&id=ud32a338c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1181&originWidth=1770&originalType=binary&ratio=1&size=71689&status=done&style=none&taskId=u1d9d3319-7c25-48dc-9290-e284b89582e&width=885)

## 主应用使用react

布局依旧
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639119415135-43379d80-51ae-48db-b285-7b12e97e2a59.png#clientId=u7d7286d7-c341-4&from=paste&height=115&id=u351fdb90&margin=%5Bobject%20Object%5D&name=image.png&originHeight=230&originWidth=1898&originalType=binary&ratio=1&size=22067&status=done&style=none&taskId=u88eac6a3-e068-419d-a033-8ac363bf4a4&width=949)

```shell
# 创建项目
npx create-react-app main-react

# 修改端口绑定到9000,package.json增加
"serve": "set PORT=8003 && react-scripts start",

# 启动项目
yarn serve



# 启动无问题后改造为微前端主应用

## 安装ant desgin 设置布局和导航栏
yarn add antd

# App.js改为
import './App.css';
import {Layout, Menu} from 'antd';
const {Header, Content, Footer} = Layout;

function App() {
    return (
        <div className="App">

            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><a href="/home">首页</a></Menu.Item>
                        <Menu.Item key="2"><a href="/vue2">vue2示例</a></Menu.Item>
                        <Menu.Item key="3"><a href="/vue3">vue3示例</a></Menu.Item>
                        <Menu.Item key="4"><a href="/react">react示例</a></Menu.Item>
                        <Menu.Item key="5"><a href="/angular">angular示例</a></Menu.Item>
                        <Menu.Item key="6"><a href="/h5">h5示例</a></Menu.Item>
                    </Menu>
                </Header>

                <Content style={{padding: '0 50px'}}>

                    <div id="subapp">
                        Content 内容
                    </div>

                </Content>

                <Footer style={{textAlign: "center",color:"white",backgroundColor: "#1a1919"}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>

        </div>
    );
}

export default App;

# 把main-vue中的微应用路由apps.js拿过来

# index.js注册微应用
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import apps from './apps'

//解决微应用是angualr式， zone.js 的问题
//必须import 'zone.js/dist/zone'
//安装命令：yarn add zone.js
import 'zone.js/dist/zone';

import {registerMicroApps, start} from "qiankun";


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//qiankun 微前端

registerMicroApps(apps);

start();
```

启动看效果，简单截图几个如下：
![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639119558625-5ecc41f3-cf76-4193-b62e-a56a99943a71.png#clientId=u7d7286d7-c341-4&from=paste&height=592&id=ue41faec1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1183&originWidth=1890&originalType=binary&ratio=1&size=133953&status=done&style=none&taskId=u3565fa22-d2ef-4b97-80b1-77219e80d91&width=945)

![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639119572996-bc64cbd0-fd77-4a28-bce4-b2d1ad53d933.png#clientId=u7d7286d7-c341-4&from=paste&height=609&id=ua3b44e72&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1218&originWidth=1866&originalType=binary&ratio=1&size=139904&status=done&style=none&taskId=u01cad494-3fe1-4529-b97e-75a852f0bcb&width=933)

![imagepng](https://cdn.nlark.com/yuque/0/2021/png/251474/1639119585258-5cbd6dbb-49d6-4c4d-9ed9-aff86151044e.png#clientId=u7d7286d7-c341-4&from=paste&height=887&id=ue321ffb6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1773&originWidth=1902&originalType=binary&ratio=1&size=196680&status=done&style=none&taskId=ud6e14779-f081-4a1d-af5b-40df5e04c1b&width=951)

# 默认浏览器打开

多项目统一管理，micro-frond-ends-demo下的package.json

```shell
{
  "name": "micro-frond-ends-demo",
  "version": "1.0.0",
  "main": "index.js",
  "author": "",
  "license": "MIT",
  "scripts": {
    "all:install": "npm-run-all --serial install:*",
    "all:serve": "npm-run-all --parallel serve:*",

    "install:micro-frond-ends-demo": "yarn",
    "install:vue2-demo": "cd vue2-demo && yarn",
    "install:vue3-demo": "cd vue3-demo && yarn",
    "install:react-demo": "cd react-demo && yarn",
    "install:angular-demo": "cd angular-demo && yarn",
    "install:h5-demo": "cd h5-demo && yarn",
    "install:main-vue2": "cd main-vue2 && yarn",
    "install:main-react": "cd main-react && yarn",

    "serve:vue2-demo": "cd vue2-demo && yarn serve",
    "serve:vue3-demo": "cd vue3-demo && yarn serve",
    "serve:react-demo": "cd react-demo && yarn serve",
    "serve:angular-demo": "cd angular-demo && yarn serve",
    "serve:h5-demo": "cd h5-demo && yarn serve",
    "serve:main-vue2": "cd main-vue2 && yarn serve",
    "serve:main-react": "cd main-react && yarn serve"
  },
  "devDependencies": {
    "npm-run-all": "^4.1.5"
  }
}
```

应用启动后的默认动作

```shell
### react默认启动后会打开浏览器，关闭打开行为
# 通过环境变量方式，在react项目根目录创建文件.env
#关闭自动打开浏览器
BROWSER=none

#绑定端口
PORT=9000


### vue默认启动后不打开浏览器，设置为打开
# 通过修改vue.config.js文件配置
module.exports = {
    devServer: {
        //绑定端口
        port: 8000,
        //默认打开浏览器
        open: true,
    }
}

### angular通过命令行可以直接修改
ng serve --port 8004 --open
```

本项目设置为：启动所有项目，然后浏览器打开main-vue项目

# 完

（完）