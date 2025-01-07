import React from "react";
import { Button } from "../ui/button";

export const DashboarHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Overview</h1>
        <p className="text-gray-400">June 2024</p>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
        <select className="bg-gray-800 text-white rounded-lg px-4 py-2 text-sm w-full sm:w-auto">
          <option>US Dollar</option>
        </select>
        <Button
          variant="outline"
          className="text-mint-green border-mint-green w-full sm:w-auto"
        >
          Quick Action
        </Button>
      </div>
    </div>
  );
};
