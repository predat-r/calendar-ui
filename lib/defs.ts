export interface EventType {
  id: string;
  summary: string;
  organizer: {
    email: string;
  };
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  htmlLink:string,
}
