"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const timeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

export function BookingCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1 bg-secondary text-secondary-foreground">
        <CardHeader>
          <CardTitle>Seleccionar Fecha</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-secondary-foreground/20"
          />
        </CardContent>
      </Card>
      <Card className="col-span-2 bg-secondary text-secondary-foreground">
        <CardHeader>
          <CardTitle>Horarios Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant="outline"
                className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
              >
                <Clock className="mr-2 h-4 w-4" />
                {time}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
