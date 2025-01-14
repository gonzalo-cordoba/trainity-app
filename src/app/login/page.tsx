"use client";

import { motion } from "framer-motion";
import {
  LoginForm,
  LoginSideBar,
  RegisterLink,
  WelcomeMessage,
} from "@/components/login";

export default function LoginPage() {
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
          <WelcomeMessage />
          <LoginForm />
          <RegisterLink />
        </motion.div>
      </div>
    </div>
  );
}
