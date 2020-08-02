<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

import { events } from "./events";

export default {
  name: "EventList",
  components: { ScaleLoader },
  data() {
    return {
      isLoadingEvents: false,
      events: []
    };
  },
  created() {
    this.isLoadingEvents = true;
    // Fetch events to be displayed in calendar
    // we use setTimeout to simulate the api call.
    setTimeout(() => {
      this.events = events;
      this.isLoadingEvents = false;
    }, 1000);
  }
};
</script>

<template>
  <div>
    <ScaleLoader v-if="isLoadingEvents" />
    <ul>
      <li class="event" v-for="event in events" :key="event.title">
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
  width: 200px;
  margin: 10px;
  background-color: #282c34;
  border-radius: 5px;
  padding: 10px;
  color: #7ec699;

  img {
    float: left;
    margin: 0 5px;
  }

  p {
    display: inline-block;
  }
}
</style>
