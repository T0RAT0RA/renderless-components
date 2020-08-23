<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import WithEvents from "./WithEvents.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "EventList",
  components: { ScaleLoader, WithEvents, Carousel, Slide }
};
</script>

<template>
  <WithEvents v-slot="{ events, isLoading }" category="vue">
    <div>
      <ScaleLoader v-if="isLoading" />
      <carousel :per-page="1">
        <slide v-for="event in events" :key="event.title">
          <img src="//placehold.it/50x50" />
          <p>{{ event.title }}</p>
        </slide>
      </carousel>
    </div>
  </WithEvents>
</template>
