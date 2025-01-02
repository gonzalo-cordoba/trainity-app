import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: 1,
    company: "Company XYZ",
    amount: 15000.0,
    status: "Waiting",
    method: "Credit Card",
    date: "Aug 23, 2024",
  },
  {
    id: 2,
    company: "Vera K.",
    amount: 850.0,
    status: "Success",
    method: "Bank Transfer",
    date: "Aug 18, 2024",
  },
  {
    id: 3,
    company: "Birthday",
    amount: 240.0,
    status: "Due Date",
    method: "Credit Card",
    date: "Aug 15, 2024",
  },
];

export function TransactionsTable() {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-medium">Recent Transactions</h3>
        <button className="text-mint-green text-sm">Filter</button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700">
              <TableHead className="text-gray-400">TYPE</TableHead>
              <TableHead className="text-gray-400">AMOUNT</TableHead>
              <TableHead className="text-gray-400">STATUS</TableHead>
              <TableHead className="text-gray-400 hidden sm:table-cell">
                METHOD
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-gray-700">
                <TableCell className="text-white">
                  {transaction.company}
                </TableCell>
                <TableCell className="text-white">
                  ${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(
                      "bg-opacity-10 whitespace-nowrap",
                      transaction.status === "Success" &&
                        "border-green-500 text-green-500",
                      transaction.status === "Waiting" &&
                        "border-yellow-500 text-yellow-500",
                      transaction.status === "Due Date" &&
                        "border-red-500 text-red-500"
                    )}
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-400 hidden sm:table-cell">
                  {transaction.method}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
