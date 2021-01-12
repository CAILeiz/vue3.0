<template>
  <div>
    <div>num {{ num }}</div>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>
<script>

import { reactive,computed ,toRefs, watch, ref } from 'vue'
export default {
  setup(){
    const event = reactive({
      capacity:4,
      attending:["Tim","Bob","Joe"],
      sapcesLeft:computed(()=>{
        return event.capacity - event.attending.length;
      })
    })
    let num = ref(3);
    watch(num, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    })
    function increaseCapacity() {
        num.value++;
    }
    return {...toRefs(event), increaseCapacity, num}
  }
}
</script>
