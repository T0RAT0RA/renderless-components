import { ref, computed, onBeforeMount } from "@vue/composition-api";
import { events as eventList } from "../events";

export default function useEvents(category = null) {
  const events = ref([]);
  const isLoading = ref(false);
  const subscribe = event => {
    console.log("Subscribe to", event.title);
  };

  const fetchEvents = () => {
    isLoading.value = true;
    // Fetch events
    // we use setTimeout to simulate the api call.
    setTimeout(() => {
      events.value = eventList;
      isLoading.value = false;
    }, 1000);
  };

  const filteredEvents = computed(() => {
    return events.value.filter(
      e => !category || !category.value || e.category === category.value
    );
  });

  onBeforeMount(fetchEvents);

  return {
    events: filteredEvents,
    isLoading,
    fetchEvents,
    subscribe
  };
}
