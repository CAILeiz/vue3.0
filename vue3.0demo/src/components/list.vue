<template>
  <div class="home">
    <div class="list">
      <div class="con" v-for="(item, index) in list" :key="index">
        <div>
          {{ item.title }} : {{ item.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src 
import { reactive, toRefs } from "vue";
export default {
  name: "Home",
  setup(props, context) {
    let state = reactive({
      list: [
        {
          title: "帽子",
          price: "10",
        },
        {
          title: "围巾",
          price: "10",
        },
        {
          title: "装怪",
          price: "10",
        },
        {
          title: "四川",
          price: "10",
        },
      ],
      n: 0,
    });
    return { ...toRefs(state) };
  },
};
</script>
<style>
.list::after {
  content: "";
  display: block;
  clear: both;
}
.list > .con {
  float: left;
  width: 20%;
  height: 100px;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid black;
  margin: 2.5%;
}
</style>
