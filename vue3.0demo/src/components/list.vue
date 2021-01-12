<template>
  <div class="home">
    <div class="list" style="padding-bottom: 52px">
      <div class="con" v-for="item in conList" :key="item.id">
        <div>
          <router-link :to="'/detail/'+ item.id">
          {{item.title}} --- {{item.price}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src 
import { reactive, toRefs, inject } from "vue";
export default {
  name: "Home",
  setup(context) {
    console.log("context", context);
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
      conList: inject("conList")
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
