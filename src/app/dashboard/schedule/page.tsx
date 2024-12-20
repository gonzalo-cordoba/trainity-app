import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

const scheduleItems = [
  {
    title: "Crossfit",
    time: "07:00 - 08:00",
    trainer: "Juan Pérez",
    capacity: "15/20",
    type: "Grupal",
  },
  {
    title: "Yoga",
    time: "09:00 - 10:00",
    trainer: "María García",
    capacity: "8/12",
    type: "Grupal",
  },
  {
    title: "Musculación",
    time: "10:00 - 11:00",
    trainer: "Carlos López",
    capacity: "3/5",
    type: "Personal",
  },
  {
    title: "HIIT",
    time: "17:00 - 18:00",
    trainer: "Ana Martínez",
    capacity: "12/15",
    type: "Grupal",
  },
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Horarios de Hoy
        </h2>
        <p className="text-secondary-foreground/70">
          Vista general de las clases programadas
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {scheduleItems.map((item, index) => (
          <Card key={index} className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-primary">{item.title}</CardTitle>
              <CardDescription className="text-secondary-foreground/70">
                {item.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{item.time}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{item.capacity}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{item.trainer}</span>
                </div>
                <Button
                  className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  variant="outline"
                >
                  Reservar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
