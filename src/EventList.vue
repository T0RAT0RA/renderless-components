<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import WithEvents from "./WithEvents.vue";

export default {
  name: "EventList",
  components: { ScaleLoader, WithEvents },
};
</script>

<template>
  <WithEvents v-slot="{ events, isLoading, subscribe }">
    <div>
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
  </WithEvents>
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
