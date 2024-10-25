import { ModeToggle } from "@/components/mode-toggle";
import SigninButton from "@/components/signin-button";
import SignoutButton from "@/components/signout-button";
import { DatePicker } from "@/components/ui/date-picker";
import EventsContainer from "@/components/ui/events-container";
import { authOptions } from "@/lib/authoptions";
import { EventType } from "@/lib/defs";
import { fetchEventsOfUser } from "@/lib/serveractions";
import { getServerSession } from "next-auth";

import React from "react";

const Homepage = async () => {
  const session = await getServerSession(authOptions);

  const events: EventType[] | null = await fetchEventsOfUser();
  console.log(events);

  return (
    <div className="p-4 flex flex-col justify-center items-center w-screen h-screen gap-y-10">
      <div className="flex w-1/2  flex-row justify-evenly">
        {" "}
        <ModeToggle></ModeToggle>
        {session ? <SignoutButton /> : <SigninButton />}
      </div>
      {session ? (
        <h1 className="font-bold text-xl">
          Create and View your calendar events
        </h1>
      ) : (
        <h1>Sign in to view your upoming events</h1>
      )}
      {session ? (
        <div className="flex flex-col gap-y-10 justify-center items-center">
          <DatePicker></DatePicker>
          <h1 className="text-2xl">Scheduled Events</h1>
        </div>
      ) : null}

      {events !== null && <EventsContainer events={events} />}
    </div>
  );
};

export default Homepage;
