"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Label, Pie, PieChart, Sector } from "recharts";
import { type PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

const desktopData = [
  { month: "January", desktop: 186, fill: "var(--color-january)" },
  { month: "February", desktop: 305, fill: "var(--color-february)" },
  { month: "March", desktop: 237, fill: "var(--color-march)" },
  { month: "April", desktop: 173, fill: "var(--color-april)" },
  { month: "May", desktop: 209, fill: "var(--color-may)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "var(--chart-8)",
  },
  february: {
    label: "February",
    color: "var(--chart-9)",
  },
  march: {
    label: "March",
    color: "var(--chart-10)",
  },
  april: {
    label: "April",
    color: "var(--chart-11)",
  },
  may: {
    label: "May",
    color: "var(--chart-12)",
  },
} satisfies ChartConfig;

const AppPieChart = () => {
  const [activeMonth, setActiveMonth] = useState<string>("january");
  const activeMonthIndex = desktopData
    .map((item) => item.month.toLowerCase())
    .findIndex((month) => month === activeMonth);
  return (
    <>
      <Select
        onValueChange={(value) => {
          setActiveMonth(value);
        }}
        defaultValue={activeMonth}
      >
        <SelectTrigger className="ml-auto">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectItem value="january">January</SelectItem>
            <SelectItem value="february">February</SelectItem>
            <SelectItem value="march">March</SelectItem>
            <SelectItem value="april">April</SelectItem>
            <SelectItem value="may">May</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square min-h-50 w-full transition-all ease-in"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={desktopData}
            dataKey="desktop"
            nameKey="month"
            innerRadius={60}
            strokeWidth={5}
            activeIndex={activeMonthIndex}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <g>
                <Sector {...props} outerRadius={outerRadius * 1.05} />
                <Sector
                  {...props}
                  outerRadius={outerRadius * 1.15}
                  innerRadius={outerRadius * 1.07}
                />
              </g>
            )}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="auto"
                    >
                      <tspan className="text-2xl fill-primary font-bold">
                        {desktopData[activeMonthIndex].desktop}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 18}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </>
  );
};

export default AppPieChart;
