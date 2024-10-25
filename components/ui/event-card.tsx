import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventType } from "@/lib/defs";

import React from "react";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const getRandomPastelColor = () => {
  const pastelColors = [
    "#FFB3BA", // light pastel pink
    "#FFDFBA", // light pastel peach
    "#FFFFBA", // light pastel yellow
    "#BAFFC9", // light pastel mint
    "#BAE1FF", // light pastel blue
    "#E2F0CB", // light pastel green
    "#FFCCD2", // light pastel rose
    "#D4C1EC", // light pastel lavender
    "#C1E1EC", // light pastel cyan
  ];
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
};
const EventCard = ({ summary, start, end, organizer, htmlLink }: EventType) => {
  const startDate = parseISO(start.dateTime);
  const eventDate = format(startDate, "MMMM d, yyyy h:mm a");
  const startTime = format(startDate, "h:mm a");
  const endDate = parseISO(end.dateTime);
  const endTime = format(endDate, "h:mm a");

  return (
    <div>
      <Card
        style={{ backgroundColor: getRandomPastelColor() }}
        className="bg-repeat-round"
      >
        <CardHeader>
          <CardTitle>{summary}</CardTitle>
          <CardDescription>{eventDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <Link className="hover:text-blue-800" href={htmlLink}>
            Event Link
          </Link>
        </CardContent>
        <CardContent>
          <span>Starts At : {startTime}</span>
          <span> and </span>
          <span>Ends At : {endTime}</span>
        </CardContent>
        <CardFooter>
          <p>Organized by {organizer.email}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventCard;
