<script>
import FullCalendar from "@fullcalendar/vue";
import timeGridWeek from "@fullcalendar/timegrid";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import useEvents from "./composables/useEvents.js";

export default {
  name: "Calendar",
  components: {
    FullCalendar,
    ScaleLoader
  },
  setup() {
    const { events, isLoading, subscribe } = useEvents();

    return {
      events,
      isLoading,
      subscribe
    };
  },
  data() {
    return {
      calendarOptions: {
        initialDate: "2020-08-02",
        plugins: [timeGridWeek],
        initialView: "timeGridWeek"
      }
    };
  }
};
</script>

<template>
  <div>
    <ScaleLoader v-if="isLoading" />
    <FullCalendar
      v-else
      :options="{
        ...calendarOptions,
        events,
        eventClick: e => subscribe(e.event)
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
::v-deep .fc-event {
  cursor: pointer;
}
</style>
