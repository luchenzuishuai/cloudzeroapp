<template>
  <div>
    <!-- head -->
    <div style="background-color: lightblue;display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px">
      <img src="https://oit.uta.edu/_images/_assets/oit-logo.png" alt="">
      <span style="font-weight: 700; color: white">Name: Chen Lu, Id: 91906</span>
    </div>
    <!-- body -->
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/people">Data</router-link>|
        <router-link to="/picinfo">PicInfo</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
