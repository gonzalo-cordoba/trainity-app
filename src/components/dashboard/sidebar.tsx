import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Users, Clock, BarChart2, Settings } from "lucide-react";
import Link from "next/link";

export function DashboardSidebar() {
  return (
    <div className="hidden border-r bg-secondary pt-16 lg:block">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold text-primary">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-secondary-foreground hover:text-primary"
              asChild
            >
              <Link href="/dashboard">
                <BarChart2 className="mr-2 h-4 w-4" />
                Estadísticas
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-secondary-foreground hover:text-primary"
              asChild
            >
              <Link href="/dashboard/bookings">
                <Calendar className="mr-2 h-4 w-4" />
                Reservas
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-secondary-foreground hover:text-primary"
              asChild
            >
              <Link href="/dashboard/schedule">
                <Clock className="mr-2 h-4 w-4" />
                Horarios
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-secondary-foreground hover:text-primary"
              asChild
            >
              <Link href="/dashboard/users">
                <Users className="mr-2 h-4 w-4" />
                Usuarios
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-secondary-foreground hover:text-primary"
              asChild
            >
              <Link href="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                Configuración
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
