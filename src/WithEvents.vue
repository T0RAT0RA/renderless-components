<script>
import { events } from "./events";

export default {
  name: "WithEvents",
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
  render() {
    return this.$scopedSlots.default({
      events: this.events,
      isLoading: this.isLoading
    });
  }
};
</script>
