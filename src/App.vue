<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import storage from "./storage/index.js";
export default {
  name: "App",
  components: {},
  mounted() {
    //storage.setItem('userName',{A:1},'user')
    //storage.setItem("score", { gpa: 3.2 }, "user");
    //console.log(storage.getStorage()['user'])
    //storage.clear('sex')
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
      //console.log(res);
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
