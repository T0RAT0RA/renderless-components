<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import useEvents from "./composables/useEvents.js";
import { Carousel, Slide } from "vue-carousel";
import { ref } from "@vue/composition-api";

export default {
  name: "EventList",
  components: { ScaleLoader, Carousel, Slide },
  setup() {
    const { events, isLoading, subscribe } = useEvents(ref("vue"));

    return {
      events,
      isLoading,
      subscribe
    };
  }
};
</script>

<template>
  <div>
    <ScaleLoader v-if="isLoading" />
    <carousel :per-page="1">
      <slide v-for="event in events" :key="event.title">
        <img src="//placehold.it/50x50" />
        <p>{{ event.title }}</p>
      </slide>
    </carousel>
  </div>
</template>
