<script>
import FullCalendar from "@fullcalendar/vue";
import timeGridWeek from "@fullcalendar/timegrid";

import { events } from "./events";

export default {
  name: "Calendar",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        initialDate: "2020-08-02",
        plugins: [timeGridWeek],
        initialView: "timeGridWeek"
      },
      events: []
    };
  },
  created() {
    // Fetch events to be displayed in calendar
    // we use setTimeout to simulate the api call.
    setTimeout(() => {
      this.events = events;
    }, 1000);
  }
};
</script>

<template>
  <div>
    <FullCalendar :options="{ ...calendarOptions, events }" />
  </div>
</template>

<style lang="scss"></style>
