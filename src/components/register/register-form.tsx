"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signUp } from "@/app/utils/appwrite";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signUp(formData.email, formData.password);
      console.log("Usuario registrado:", response);

      // Aquí puedes agregar lógica adicional, como actualizar el nombre del usuario
      // Ejemplo: await account.updateName(`${formData.firstName} ${formData.lastName}`);

      router.push("/dashboard");
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      setError(
        "Hubo un problema al registrar el usuario. Inténtalo nuevamente."
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen bg-[#1A1D1F] overflow-hidden">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Crea tu cuenta
            </h2>
            <p className="text-gray-400">
              Únete a nosotros y comienza tu viaje de fitness hoy
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">
                  Nombre
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white">
                  Apellido
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-mint-green to-mint-green/80 text-gray-900 hover:from-mint-green/90 hover:to-mint-green/70 transition-all duration-300"
            >
              Regístrate
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="mt-6 text-center text-sm text-gray-400">
              ¿Ya tienes cuenta?{" "}
              <Link
                href="/login"
                className="text-mint-green hover:text-mint-green/80 transition-colors"
              >
                Inicia sesión
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
