import { ModeToggle } from "@/components/mode-toggle";
import SigninButton from "@/components/signin-button";
import SignoutButton from "@/components/signout-button";
import { Card } from "@/components/ui/card";

import { DatePicker } from "@/components/ui/date-picker";
import EventCard from "@/components/ui/event-card";
import { authOptions } from "@/lib/authoptions";
import { fetchEventsOfUser } from "@/lib/serveractions";
import { getServerSession } from "next-auth";

import React from "react";

const Homepage = async () => {
  const session = await getServerSession(authOptions);
  await fetchEventsOfUser();
  return (
    <div className="p-4 flex flex-col justify-center items-center w-screen h-screen gap-y-5">
      <div className="flex w-1/2  flex-row justify-evenly">
        {" "}
        <ModeToggle></ModeToggle>
        {session ? <SignoutButton /> : <SigninButton />}
      </div>
      {session ? (
        <h1>Create and View your calendar events</h1>
      ) : (
        <h1>Sign in to view your upoming events</h1>
      )}
      {session ? <DatePicker></DatePicker> : null}
      <EventCard></EventCard>
    </div>
  );
};

export default Homepage;
