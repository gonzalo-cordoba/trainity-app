import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-secondary text-secondary-foreground">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-primary">TRAINITY</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about"
              className="transition-colors hover:text-primary"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/membership"
              className="transition-colors hover:text-primary"
            >
              Membresías
            </Link>
            <Link href="/blog" className="transition-colors hover:text-primary">
              Blog
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-primary"
            >
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              asChild
              className="text-secondary-foreground hover:text-primary"
            >
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/register">Registrarse</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
