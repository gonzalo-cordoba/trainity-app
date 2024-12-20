import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$70",
    description: "Ideal para principiantes",
    features: [
      "Acceso a sala de musculación",
      "Clases grupales básicas",
      "Casillero personal",
    ],
  },
  {
    name: "Advanced",
    price: "$120",
    description: "Para deportistas intermedios",
    features: [
      "Todo lo incluido en Basic",
      "Clases especializadas",
      "Evaluación mensual",
      "Plan nutricional básico",
    ],
  },
  {
    name: "Premium",
    price: "$320",
    description: "La experiencia completa",
    features: [
      "Todo lo incluido en Advanced",
      "Entrenador personal",
      "Plan nutricional avanzado",
      "Acceso 24/7",
      "Invitados permitidos",
    ],
  },
];

export function MembershipPlans() {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          PLANES DE MEMBRESÍA FLEXIBLES
          <br />
          PARA TU ESTILO DE VIDA
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative overflow-hidden bg-secondary-foreground text-secondary"
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-secondary/70">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6 text-primary">
                  {plan.price}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Seleccionar Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
