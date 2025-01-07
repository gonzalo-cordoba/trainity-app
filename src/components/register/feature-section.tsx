import React from "react";
import { motion } from "framer-motion";

export const FeatureSection = () => {
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
            Start your fitness journey today
          </h1>
          <p className="text-gray-400">
            Join our community and get access to personalized workout plans,
            expert trainers, and more.
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

        {/* Features */}
        <div className="absolute bottom-12 left-8 grid grid-cols-2 gap-8">
          {[
            {
              title: "Personalized Plans",
              description: "Tailored workouts just for you",
            },
            {
              title: "Expert Trainers",
              description: "Learn from the best in the industry",
            },
            {
              title: "Progress Tracking",
              description: "Monitor your fitness journey",
            },
            {
              title: "Community Support",
              description: "Connect with like-minded individuals",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
