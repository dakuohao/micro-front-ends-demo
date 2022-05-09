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
      微前端落地实践 ©2021
    </a-layout-footer>

  </a-layout>
</template>

<style>
#subapp {
  text-align: center;
  min-height: 300px;
}
</style>

<script>

export default {
  name: 'App',
}
</script>

