<script>
import FullCalendar from "@fullcalendar/vue";
import timeGridWeek from "@fullcalendar/timegrid";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

import { events } from "./events";

export default {
  name: "Calendar",
  components: {
    FullCalendar,
    ScaleLoader
  },
  data() {
    return {
      calendarOptions: {
        initialDate: "2020-08-02",
        plugins: [timeGridWeek],
        initialView: "timeGridWeek"
      },
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
    <FullCalendar v-else :options="{ ...calendarOptions, events }" />
  </div>
</template>

<style lang="scss"></style>
