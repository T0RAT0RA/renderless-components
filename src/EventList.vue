<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import useEvents from "./composables/useEvents.js";

import { ref } from "@vue/composition-api";

export default {
  name: "EventList",
  components: { ScaleLoader },
  setup() {
    const category = ref();
    const { events, isLoading, subscribe } = useEvents(category);

    return {
      category,
      events,
      isLoading,
      subscribe
    };
  }
};
</script>

<template>
  <div>
    Category:
    <select v-model="category">
      <option :value="null">All</option>
      <option value="vue">Vue</option>
      <option value="react">React</option>
      <option value="angular">Angular</option>
    </select>
    <hr />
    <ScaleLoader v-if="isLoading" />
    <ul>
      <li
        class="event"
        v-for="event in events"
        :key="event.title"
        @click="subscribe(event)"
      >
        <img src="//placehold.it/50x50" />
        <p>{{ event.title }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.event {
  text-align: center;
  width: 300px;
  margin: 10px;
  background-color: #282c34;
  border-radius: 5px;
  padding: 10px;
  color: #7ec699;
  cursor: pointer;

  img {
    float: left;
    margin: 0 5px;
  }

  p {
    display: inline-block;
  }
}
</style>
