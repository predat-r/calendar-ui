import { getServerSession } from "next-auth";
import { authOptions } from "./authoptions";

export const fetchEventsOfUser = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    const calendarId = "primary";
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );
    const events = await response.json();
    console.log(events);
  }
};
