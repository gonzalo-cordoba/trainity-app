"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { login } from "@/app/utils/appwrite";

export const LoginForm = () => {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="space-y-4">
        {/* START: EmailInput component */}
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
        {/* END: EmailInput component */}

        {/* START: PasswordInput component */}
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
        {/* END: PasswordInput component */}
      </div>
      {/* START: SubmitButton component */}
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-mint-green to-mint-green/80 text-gray-900 hover:from-mint-green/90 hover:to-mint-green/70 transition-all duration-300"
      >
        Inicia sesión en tu cuenta
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      {/* END: SubmitButton component */}
    </form>
  );
};
