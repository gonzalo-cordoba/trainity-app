import { BookingCalendar } from "@/components/booking/calendar";

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Reservar Turno</h2>
        <p className="text-muted-foreground">
          Selecciona una fecha y horario para tu próxima clase
        </p>
      </div>
      <BookingCalendar />
    </div>
  );
}
