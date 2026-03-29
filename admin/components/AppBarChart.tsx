"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", total: 186, success: 80 },
  { month: "February", total: 305, success: 200 },
  { month: "March", total: 237, success: 120 },
  { month: "April", total: 190, success: 73 },
  { month: "May", total: 209, success: 130 },
  { month: "June", total: 214, success: 140 },
];

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-4)",
  },
  success: {
    label: "Successful",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

const AppBarChart = () => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="min-h-50 w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="total" fill="var(--color-total)" radius={4} />
          <Bar dataKey="success" fill="var(--color-success)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
