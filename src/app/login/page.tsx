"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen bg-[#1A1D1F] overflow-hidden">
      {/* Left Side - Interactive Elements */}
      <div className="hidden lg:flex lg:w-1/2 relative p-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-mint-green/20 via-blue-600/20 to-purple-600/20 backdrop-blur-3xl" />

        {/* Floating Elements */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/4 left-8 max-w-sm"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              F2 Performance Gym
            </h1>
            <p className="text-gray-400">
              Transforma tu cuerpo, desafía tus límites. Únete a la comunidad
              que te lleva al siguiente nivel.
            </p>
          </motion.div>

          {/* Animated Shapes */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 right-12 w-64 h-64 rounded-full bg-gradient-to-r from-mint-green/30 to-blue-600/30 blur-2xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 left-24 w-48 h-48 rounded-full bg-gradient-to-r from-purple-600/30 to-mint-green/30 blur-2xl"
          />

          {/* Stats */}
          <div className="absolute bottom-12 left-8 grid grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Miembros activos" },
              { number: "50+", label: "Entrenadores expertos" },
              { number: "100%", label: "Satisfaccion" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              ¡Bienvenido/a! 👋
            </h2>
            <p className="text-gray-400">
              Ingrese sus credenciales para acceder a su cuenta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Nombre"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="nombre@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-mint-green to-mint-green/80 text-gray-900 hover:from-mint-green/90 hover:to-mint-green/70 transition-all duration-300"
            >
              Inicia sesión en tu cuenta
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#1A1D1F] px-2 text-gray-400">
                  O continuar con
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-12 bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700/50 hover:text-mint-green transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700/50 hover:text-mint-green transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-400">
              ¿No tienes una cuenta?{" "}
              <a
                href="#"
                className="text-mint-green hover:text-mint-green/80 transition-colors"
              >
                Regístrate gratis
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
