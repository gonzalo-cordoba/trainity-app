"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { CalendarCard, Header, TabsReservas } from "@/components/reservas";

export default function ReservasPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-[#1A1D1F] text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CalendarCard date={date} onDateChange={setDate} />
        </motion.div>

        <div className="lg:col-span-8">
          <TabsReservas />
        </div>
      </div>
    </div>
  );
}
