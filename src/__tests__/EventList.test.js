import { render } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";
import mockData from "../mock-data";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test("renders event summary", async () => {
    const events = mockData;
    EventListComponent.rerender(<EventList events={events} />);
    expect(
      EventListComponent.queryByText(events[0].summary)
    ).toBeInTheDocument();
  });

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(
      allEvents.length
    );
  });
});
