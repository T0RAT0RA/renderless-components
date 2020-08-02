<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Calendar</router-link>
      <router-link to="/events">Events List</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #fff;
  font-family: Arial;
}
.nav {
  background-color: #282c34;
  height: 40px;
}
.nav a {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 5px;
  color: #fff;
  text-decoration: none;
  height: 100%;
  box-sizing: border-box;
  vertical-align: middle;

  &.router-link-exact-active {
    background-color: #fff;
    color: #000;
  }
}
</style>
