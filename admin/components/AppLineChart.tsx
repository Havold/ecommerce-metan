"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "./ui/chart";
import { type ChartConfig } from "./ui/chart";

const chartData = [
  { month: "January", desktop: 120, mobile: 60 },
  { month: "February", desktop: 40, mobile: 80 },
  { month: "March", desktop: 200, mobile: 120 },
  { month: "April", desktop: 180, mobile: 100 },
  { month: "May", desktop: 240, mobile: 150 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-4)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

const AppLineChart = () => {
  return (
    <>
      <ChartContainer
        config={chartConfig}
        className="min-h-40 w-full lg:max-h-144"
      >
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine
            tickFormatter={(value) => value.slice(0, 3)}
            tickMargin={10}
          />
          <YAxis tickLine tickMargin={10} />
          <Line
            dataKey="desktop"
            stroke="var(--color-desktop)"
            strokeWidth={1}
            type="monotone"
          />
          <Line
            dataKey="mobile"
            stroke="var(--color-mobile)"
            strokeWidth={1}
            type="monotone"
          />
        </LineChart>
      </ChartContainer>
    </>
  );
};

export default AppLineChart;
