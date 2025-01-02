"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const days = Array.from({ length: 31 }, (_, i) => i + 1);

export function Calendar() {
  const [selectedDay, setSelectedDay] = useState(10);

  return (
    <div className="bg-gray-800 rounded-xl p-4 min-w-[300px]">
      <div className="grid grid-cols-7 gap-1">
        {days.slice(0, 31).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm",
              selectedDay === day
                ? "bg-mint-green text-gray-900"
                : "text-gray-400 hover:bg-gray-700"
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
