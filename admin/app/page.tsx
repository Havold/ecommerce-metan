import AppAreaChar from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChar";
import CardList from "@/components/CardList";
import ToDoList from "@/components/ui/ToDoList";
import { TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-1 lg:col-span-2">
        <h1 className="text-sm mb-8">Total Revenue</h1>
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-sm mb-4">Latest Transactions</h1>
        <CardList type="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-sm mb-8">Browser Usage</h1>
        <AppPieChart />
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm md:text-xs 2xl:text-sm align text-center">
            Trending up by 5.2% this month{" "}
            <TrendingUp className="inline w-4 h-4 text-green-600" />
          </span>
          <span className="text-xs md:text-xs text-muted-foreground text-center">
            Showing total visitors for the last 6 months
          </span>
        </div>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-sm mb-4">Todo List</h1>
        <ToDoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-1 lg:col-span-2">
        <h1 className="text-sm mb-8">Total Visitors</h1>
        <AppAreaChar />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-sm mb-4">Popular Content</h1>
        <CardList type="Popular Content" />
      </div>
    </div>
  );
}
