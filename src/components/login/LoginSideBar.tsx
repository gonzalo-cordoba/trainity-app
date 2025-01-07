import React from "react";
import { motion } from "framer-motion";

export const LoginSideBar = () => {
  return (
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
            Transforma tu cuerpo, desafía tus límites. Únete a la comunidad que
            te lleva al siguiente nivel.
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
  );
};
