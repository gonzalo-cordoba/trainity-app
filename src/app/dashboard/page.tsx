import { Sidebar } from "@/components/layout/sidebar";
import {
  DashboarHeader,
  LeftColumn,
  RightColumn,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#1A1D1F]">
      <Sidebar />
      <div className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8">
        <DashboarHeader />

        <div className="grid lg:grid-cols-12 gap-6">
          <LeftColumn />

          <RightColumn />
        </div>
      </div>
    </div>
  );
}
