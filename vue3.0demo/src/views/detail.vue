<template>
  <div class="detail">
      <a class="goback" @click="goBack()">返回</a>
      {{id}}
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive, toRefs } from "vue";
export default {
  name: "Home",
  setup(props, context) {
    console.log("context", context);
    let state = reactive({
        id: ""
    });
    let goBack = () => {
        root.$router.go();
    }
    onMounted(() => {
        state.id = root.$route.params.id
        root.$store.dispatch("isDetail", true)
    })
    onUnmounted(() => {
        root.$store.dispatch("isDetail", false)
    })
    return { ...toRefs(state), goBack};
  },
};
</script>
<style>
</style>
