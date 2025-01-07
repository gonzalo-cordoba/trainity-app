import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

interface CalendarCardProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export const CalendarCard = ({ date, onDateChange }: CalendarCardProps) => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Calendario</CardTitle>
        <CardDescription className="text-gray-400">
          Selecciona una fecha
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          className="rounded-md border border-gray-700"
        />
      </CardContent>
    </Card>
  );
};
