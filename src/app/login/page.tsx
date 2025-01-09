"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { login } from "@/app/utils/appwrite";
import Link from "next/link";
import { LoginSideBar } from "@/components/login";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(formData.email, formData.password);
      console.log("Usuario autenticado:", response);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Correo o contraseña incorrectos.");
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
      <LoginSideBar />
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
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="space-y-4">
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="nombre@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-mint-green focus:ring-mint-green/20"
                  required
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
            <p className="mt-6 text-center text-sm text-gray-400">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/register"
                className="text-mint-green hover:text-mint-green/80 transition-colors"
              >
                Regístrate aquí
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
