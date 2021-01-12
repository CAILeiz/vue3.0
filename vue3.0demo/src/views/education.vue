<template>
  <div>
    <h1>Search for <input type="text" :value="searchInput" @input="add()"></h1>
    <h1>Loading: {{loading}}</h1>
    <h1>Error: {{results}}</h1>
    <h1>Number of events: {{results}}</h1>
  </div>
</template>
<script>

import { ref, watch } from "vue";
import usePromise from "./usePromise";
export default {
  setup() {
    const searchInput = ref("");
    function getEventCount() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(3), 1000);
      });
    }
    function add(e) {
      console.log(e);
      searchInput.value = e.target.value;
    }
    const getEvents = usePromise((searchInput) => getEventCount());

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      } else {
        getEvents.results.value = null;
      }
    });

    return { searchInput, ...getEvents, add };
  },
};
</script>
