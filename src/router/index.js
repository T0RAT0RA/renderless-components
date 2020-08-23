import Vue from "vue";
import VueRouter from "vue-router";
import Calendar from "../Calendar.vue";
import EventList from "../EventList.vue";
import EventCarousel from "../EventCarousel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Calendar",
    component: Calendar
  },
  {
    path: "/events",
    name: "EventList",
    component: EventList
  },
  {
    path: "/events-carousel",
    name: "EventCarousel",
    component: EventCarousel
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
