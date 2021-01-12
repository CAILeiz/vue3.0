<template>
  <div class="home">
    <div class="banner">
      <img
        v-show="index == n"
        v-for="(item, index) in list"
        :key="index"
        :src="item"
      />
      <div class="banner-circle">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="index == n ? 'selected' : ''"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { onMounted, reactive, toRefs, inject } from "vue";
export default {
  name: "Home",
  components: {},
  setup(props, context) {
    console.log("props", props)
    // const list = inject("list");
    let state = reactive({
      name: "name是是是",
      bannerList: [
        require("../assets/img/1.png"),
        require("../assets/img/2.png"),
        require("../assets/img/3.png"),
        require("../assets/img/4.png"),
        require("../assets/img/5.png"),
      ],
      n: 0,
      list: inject("list")
    });
    const autoPlay = () => {
      setInterval(play, 1000);
    };
    let play = () => {
      state.n++;
      if (state.n >= state.list.length) {
        state.n = 0;
      }
    };
    onMounted(() => {
      autoPlay();
    });
    return { ...toRefs(state) };
  },
};
</script>
<style>
.home {
  width: 100%;
}
</style>
