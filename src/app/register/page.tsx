"use client";

import { FeatureSection } from "@/components/register";
import RegisterForm from "@/components/register/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-[#1A1D1F] overflow-hidden">
      <FeatureSection />

      <RegisterForm />
    </div>
  );
}
