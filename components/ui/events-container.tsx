import React from "react";
import EventCard from "./event-card";
import { EventType } from "@/lib/defs";

const EventsContainer = ({ events }: { events: EventType[] }) => {
  if (!events.length) {
    return (
      <div className="w-full h-full p-6 rounded-lg min-h-[200px] flex items-center justify-center">
        <p className="text-blue-800 text-lg">No events scheduled</p>
      </div>
    );
  }

  return (
    <div className=" w-full h-full p-4 rounded-lg">
      <div className="flex flex-row flex-wrap gap-4">
        {events.map((element) => (
          <div
            key={element.id}
            className="flex-grow-0 flex-shrink-0 basis-auto md:basis-[calc(50%-1rem)] lg:basis-[calc(33.33%-1rem)]"
          >
            <EventCard
              id={element.id}
              key={element.id}
              summary={element.summary}
              start={element.start}
              end={element.end}
              organizer={element.organizer}
              htmlLink={element.htmlLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsContainer;
