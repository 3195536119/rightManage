<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-10-26 20:01:30
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-29 15:18:18
-->
<template>
  <router-view />
</template>

<style lang="scss">
@import './assets/css/init.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
