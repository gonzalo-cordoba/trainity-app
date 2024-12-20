import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60" />
        <Image
          src=""
          alt="Gym background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-secondary-foreground mb-6">
            TU VIAJE FITNESS COMIENZA AQUÍ
          </h1>
          <p className="text-lg text-secondary-foreground/70 mb-8">
            Nuestro equipo de entrenadores expertos y nuestras instalaciones de
            primera clase te ayudarán a alcanzar tus metas fitness.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/register">EMPIEZA AHORA →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
