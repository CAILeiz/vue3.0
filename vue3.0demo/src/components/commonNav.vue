<template>
  <div class="home">
    <div class="index-category">
      <div class="category" v-for="(item, index) in navList" :key="index">
        <i
          class="iconfont"
          :class="[item.icon]"
          :style="{ backgroundColor: item.color }"
        ></i>
        <label>{{ item.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src 
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "nav",
  components: {  },
  setup(props, context) {
    let state = reactive({
      navList: [
        { name: "页面1", icon: "icon-yonghu", color: "#f60" },
        { name: "页面2", icon: "icon-yonghu", color: "#92d85c" },
        { name: "页面3", icon: "icon-yonghu", color: "#f60" },
        { name: "页面4", icon: "icon-yonghu", color: "#92d85c" },
        { name: "页面5", icon: "icon-yonghu", color: "#660" },
        { name: "页面6", icon: "icon-yonghu", color: "#92d85c" },
        { name: "页面7", icon: "icon-yonghu", color: "#f60" },
      ],
    });
    return { ...toRefs(state) };
  },
};
</script>
<style>
.home {
  width: 100%;
}
.category {
  float: left;
  width: 25%;
  box-sizing: border-box;
  padding: 4px 10px;
  text-align: center;
}
.category > i {
  margin-top: 2px;
  display: inline-block;
  border-radius: 10px;
  width: 98%;
  font-size: 30px;
  border: 1px solid black;
}
.index-category::after,
.list::after {
  content: "";
  display: block;
  clear: both;
}
</style>
