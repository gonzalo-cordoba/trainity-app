import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-dark">
        Dashboard Administrativo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-blue-dark">Reservas Activas</CardTitle>
            <CardDescription className="text-mint-green">
              Total de reservas para hoy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-metallic-gray">24</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-blue-dark">Clases Programadas</CardTitle>
            <CardDescription className="text-mint-green">
              Clases para los próximos 7 días
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-metallic-gray">18</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-blue-dark">
              Entrenadores Disponibles
            </CardTitle>
            <CardDescription className="text-mint-green">
              Entrenadores listos para sesiones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-metallic-gray">8</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
