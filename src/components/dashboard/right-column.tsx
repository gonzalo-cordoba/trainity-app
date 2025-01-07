import React from "react";
import { Goals } from "@/components/dashboard/goals";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Send, CreditCard } from "lucide-react";

export const RightColumn = () => {
  return (
    <div className="lg:col-span-4 space-y-6">
      <Card className="bg-gray-800 border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-medium">Your Balance</h3>
          <ArrowUpRight className="text-mint-green" />
        </div>
        <div className="text-3xl font-bold text-white mb-2">$20,088.38</div>
        <div className="text-mint-green text-sm">+24.17% from last month</div>
      </Card>

      <div className="bg-gray-800 rounded-xl p-4 space-y-3">
        <h3 className="text-white font-medium mb-2">Quick Action</h3>
        <Button
          variant="outline"
          className="w-full justify-start text-gray-400 hover:text-white"
        >
          <Send className="mr-2 h-4 w-4" /> Send Money
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start text-gray-400 hover:text-white"
        >
          <CreditCard className="mr-2 h-4 w-4" /> Request Money
        </Button>
      </div>

      <Goals />

      <Card className="bg-gray-800 border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-yellow-500/10 rounded-lg">
            <span className="text-yellow-500">⭐</span>
          </div>
          <h3 className="text-white font-medium">Pro Version</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Get more features to improve your experience and unlock all benefits
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-400">Your Pay</div>
          <div className="text-white font-bold">
            $19.99 <span className="text-gray-400">/Month</span>
          </div>
        </div>
        <Button className="w-full bg-mint-green text-gray-900 hover:bg-mint-green/90">
          Learn More
        </Button>
      </Card>
    </div>
  );
};
