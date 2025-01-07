"use client";

import { FeatureSection, RegisterForm } from "@/components/register";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-[#1A1D1F] overflow-hidden">
      <FeatureSection />

      <RegisterForm />
    </div>
  );
}
