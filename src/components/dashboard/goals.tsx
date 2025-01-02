import { Progress } from "@/components/ui/progress";

const goals = [
  {
    name: "Married",
    amount: 12500.0,
    progress: 75,
    timeLeft: "2 months",
  },
  {
    name: "Basketball",
    amount: 4500.0,
    progress: 45,
    timeLeft: "4 months",
  },
];

export function Goals() {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-400 text-sm font-medium">MY GOALS</h3>
      {goals.map((goal) => (
        <div key={goal.name} className="bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">{goal.name}</span>
            <span className="text-mint-green">${goal.amount.toFixed(2)}</span>
          </div>
          <Progress value={goal.progress} className="h-2 bg-gray-700" />
          <p className="text-gray-400 text-sm mt-2">
            Achieved in {goal.timeLeft}
          </p>
        </div>
      ))}
    </div>
  );
}
