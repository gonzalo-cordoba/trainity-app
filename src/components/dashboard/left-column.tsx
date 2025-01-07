import React from "react";
import { Card } from "../ui/card";
import { Calendar } from "@/components/dashboard/calendar";
import { TransactionsTable } from "@/components/dashboard/transactions-table";

export const LeftColumn = () => {
  return (
    <div className="lg:col-span-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-gray-800 border-gray-700 p-4">
          <div className="text-gray-400 mb-2">Transaction</div>
          <div className="text-3xl font-bold text-white">40</div>
        </Card>
        <Card className="bg-gray-800 border-gray-700 p-4">
          <div className="text-gray-400 mb-2">Income</div>
          <div className="text-3xl font-bold text-white">24</div>
        </Card>
        <Card className="bg-gray-800 border-gray-700 p-4">
          <div className="text-gray-400 mb-2">Outcome</div>
          <div className="text-3xl font-bold text-white">16</div>
        </Card>
      </div>

      <div className="overflow-x-auto">
        <Calendar />
      </div>
      <TransactionsTable />
    </div>
  );
};
