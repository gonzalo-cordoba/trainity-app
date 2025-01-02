import { Sidebar } from "@/components/layout/sidebar";
import { Calendar } from "@/components/dashboard/calendar";
import { TransactionsTable } from "@/components/dashboard/transactions-table";
import { Goals } from "@/components/dashboard/goals";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Send, CreditCard } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#1A1D1F]">
      <Sidebar />
      <div className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8">
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

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column */}
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

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">Your Balance</h3>
                <ArrowUpRight className="text-mint-green" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                $20,088.38
              </div>
              <div className="text-mint-green text-sm">
                +24.17% from last month
              </div>
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
                Get more features to improve your experience and unlock all
                benefits
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
        </div>
      </div>
    </div>
  );
}
