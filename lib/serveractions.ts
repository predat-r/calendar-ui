import { getServerSession } from "next-auth";
import { authOptions } from "./authoptions";
import { EventType } from "./defs";
export const fetchEventsOfUser = async (): Promise<EventType[] | null> => {
  try {
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
      return events.items;
    }
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};
