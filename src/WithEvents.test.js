/* eslint-disable no-unused-vars */
import Vue from "vue";
import { mount } from "@vue/test-utils";
import WithEvents from "./WithEvents";

// Mock events.js module with fake events
let mockEvents = [
  { title: "event 1", date: "2020-08-02 10:00:00" },
  { title: "event 2", date: "2020-08-03 09:00:00" }
];

jest.mock("./events", () => ({
  get events() {
    return mockEvents;
  }
}));

jest.useFakeTimers();

const scopedSlots = {
  default: '<span slot-scope="data">{{ data }}</span>'
};

describe("WithEvents", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(WithEvents, {
      scopedSlots
    });
  });

  it("is loading while fetching events", () => {
    const expected = {
      events: [],
      isLoading: true
    };
    expect(wrapper.text()).toBe(JSON.stringify(expected, null, 2));
  });

  it("is not loading after fetching events", async () => {
    const expected = {
      events: mockEvents,
      isLoading: false
    };

    jest.runAllTimers();
    await Vue.nextTick();

    expect(wrapper.text()).toBe(JSON.stringify(expected, null, 2));
  });

  it("can subscribe to events", async () => {
    console["log"] = jest.fn();

    wrapper = mount(WithEvents, {
      scopedSlots: {
        default: `
        <span slot-scope="{ events, subscribe }">
          <span @click="subscribe(events[0])" class="event">{{ events[0] }}</span>
        </span>`
      }
    });

    jest.runAllTimers();
    await Vue.nextTick();

    wrapper.find(".event").trigger("click");
    expect(console["log"]).toHaveBeenCalledWith("Subscribe to", "event 1");
  });
});
