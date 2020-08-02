<script>
import FullCalendar from "@fullcalendar/vue";
import timeGridWeek from "@fullcalendar/timegrid";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import WithEvents from "./WithEvents.vue";

export default {
  name: "Calendar",
  components: {
    FullCalendar,
    ScaleLoader,
    WithEvents
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
  }
};
</script>

<template>
  <WithEvents v-slot="{ events, isLoading, subscribe }">
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
  </WithEvents>
</template>

<style lang="scss" scoped>
::v-deep .fc-event {
  cursor: pointer;
}
</style>
