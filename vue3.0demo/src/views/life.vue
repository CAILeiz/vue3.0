<template>
  <div class="home">
    <banner />
    <commonNav />
    <list />
  </div>
</template>

<script>
// @ is an alias to /src 
import banner from "@/components/banner.vue"; 
import commonNav from "@/components/commonNav.vue";
import list from "@/components/list.vue";
import { reactive, toRefs, provide, onMounted } from "vue";
export default {
  name: "Home",
  components: { banner, commonNav, list },
  setup(props, { root }) {
    let state = reactive({
      list: [
        {
          title: "帽子",
          price: "10",
          id: 1
        },
        {
          title: "围巾",
          price: "10",
          id: 2
        },
        {
          title: "装怪",
          price: "10",
          id: 3
        },
        {
          title: "四川",
          price: "10",
          id: 4
        },  {
          title: "帽子",
          price: "10",
          id: 5
        },
        {
          title: "围巾",
          price: "10",
          id: 1
        },
        {
          title: "装怪",
          price: "10",
          id: 6
        },
        {
          title: "四川",
          price: "10",
          id: 1
        },  {
          title: "帽子",
          price: "10",
          id: 7
        },
        {
          title: "围巾",
          price: "10",
          id: 8
        },
        {
          title: "装怪",
          price: "10",
          id: 9
        },
        {
          title: "四川",
          price: "10",
          id: 10
        },  {
          title: "帽子",
          price: "10",
          id: 11
        },
        {
          title: "围巾",
          price: "10",
          id: 12
        },
        {
          title: "装怪",
          price: "10",
          id: 13
        },
        {
          title: "四川",
          price: "10",
          id: 14
        },  {
          title: "帽子",
          price: "10",
          id: 15
        },
        {
          title: "围巾",
          price: "10",
          id: 16
        },
        {
          title: "装怪",
          price: "10",
          id: 17
        },
        {
          title: "四川",
          price: "10",
          id: 18
        },  {
          title: "帽子",
          price: "10",
          id: 19
        },
        {
          title: "围巾",
          price: "10",
          id: 20
        },
        {
          title: "装怪",
          price: "10",
          id: 21
        },
        {
          title: "四川",
          price: "10",
          id: 22
        },
      ],
      bannerList: [
        require("../assets/img/1.png"),
        require("../assets/img/2.png"),
        require("../assets/img/3.png"),
      ],

      n: 0,
    });
    let getData = () => {
      root.$http.get("xxxx").then(res => {
        console.log(res);
        if(res.status == '200') {
          state.list = res.data.data;
        }
      }).catch(err => {
        console.log("err", err);
      })
    }
    provide("list", state.bannerList);
    provide("bannerList", state.bannerList);
    provide("conList", state.list)
    onMounted(() => {
      // getData();
    })
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
