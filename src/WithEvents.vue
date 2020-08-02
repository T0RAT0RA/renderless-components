<script>
import { events } from "./events";

export default {
  name: "WithEvents",
  props: {
    category: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isLoading: false,
      events: []
    };
  },
  created() {
    this.isLoading = true;
    // Fetch events
    // we use setTimeout to simulate the api call.
    setTimeout(() => {
      this.events = events;
      this.isLoading = false;
    }, 1000);
  },
  methods: {
    subscribe(event) {
      console.log("Subscribe to", event.title);
    }
  },
  computed: {
    filteredEvents() {
      return this.events.filter(
        e => e.category === this.category || !this.category
      );
    }
  },
  render() {
    return this.$scopedSlots.default({
      events: this.filteredEvents,
      isLoading: this.isLoading,
      subscribe: this.subscribe
    });
  }
};
</script>
