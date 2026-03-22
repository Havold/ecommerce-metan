"use client";
import { useState } from "react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Card } from "./card";
import { Checkbox } from "./checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ScrollArea } from "./scroll-area";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const ToDoList = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="w-full">
          <Button variant="outline">
            <CalendarIcon />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            selected={date}
            mode="single"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-120 overflow-y-auto mt-4">
        <div className="flex flex-col gap-4 py-2 px-1">
          <Card className="flex items-center justify-between p-4">
            <Checkbox id="item-1" />
            <label htmlFor="item-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </Card>
          <Card className="flex items-center justify-between p-4">
            <Checkbox id="item-2" />
            <label htmlFor="item-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </Card>{" "}
          <Card className="flex items-center justify-between p-4">
            <Checkbox id="item-3" />
            <label htmlFor="item-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </Card>{" "}
          <Card className="flex items-center justify-between p-4">
            <Checkbox id="item-4" />
            <label htmlFor="item-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </Card>{" "}
          <Card className="flex items-center justify-between p-4">
            <Checkbox id="item-5" />
            <label htmlFor="item-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </Card>{" "}
          <Card className="flex items-center justify-between p-4">
            <Checkbox id="item-6" />
            <label htmlFor="item-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </Card>{" "}
          <Card className="flex items-center justify-between p-4">
            <Checkbox id="item-7" />
            <label htmlFor="item-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </Card>
        </div>
      </ScrollArea>
    </>
  );
};

export default ToDoList;
