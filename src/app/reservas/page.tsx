import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ReservasPage() {
  const clases = [
    { id: 1, nombre: "Yoga", horario: "10:00 AM", cupos: 5 },
    { id: 2, nombre: "Spinning", horario: "11:30 AM", cupos: 3 },
    { id: 3, nombre: "Pilates", horario: "2:00 PM", cupos: 8 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-dark">
        Reserva de Clases
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clases.map((clase) => (
          <Card key={clase.id} className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-dark">{clase.nombre}</CardTitle>
              <CardDescription className="text-mint-green">
                Horario: {clase.horario}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-metallic-gray">
                Cupos disponibles: {clase.cupos}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-dark hover:bg-blue-800 text-white">
                Reservar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
