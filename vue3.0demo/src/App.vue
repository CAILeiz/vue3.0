<template>
  <div id="nav">
    <div>
      <router-view />
      <navBottom />
    </div>
  </div>
</template>
<script>
import navBottom from "./views/navBottom.vue"
export default {
  components: {
    navBottom
  },
  setup(props, { root }) {
    return {  }
  }
}
</script>

<style>
@import "./assets/css/index.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  border-top: 1px solid rgb(194, 190, 190);
  background-color: #000;
  color: #fff;
}
.nav-bottom > span {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.active {
  color: yellow !important;
}
</style>
