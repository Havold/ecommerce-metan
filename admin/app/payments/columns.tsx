"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Ellipsis, Pencil, Trash2, User } from "lucide-react";
import Link from "next/link";

export type Payment = {
  id: string;
  user: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          className="hidden lg:block"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          className="hidden lg:block"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <div className="hidden lg:flex items-center">
        Email{" "}
        <Button
          onClick={() => column.toggleSorting()}
          className="cursor-pointer bg-transparent text-foreground"
        >
          <ArrowUpDown className="w-4 h-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <span className="hidden lg:block">{row.getValue("email")}</span>
    ),
  },
  {
    accessorKey: "status", // Where data get from
    header: "Status", // what nam e should show
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
          className={cn(
            `p-1 rounded-sm w-full`,
            status === "pending" && "bg-pending/40",
            status === "processing" && "bg-process/40",
            status === "success" && "bg-success/40",
            status === "failed" && "bg-failed/40",
          )}
        >
          {status}
        </span>
      );
    },
  },

  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",
      }).format(amount);
      return <span>{formatted}</span>;
    },
  },
  {
    accessorKey: "action",
    header: "",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-transparent text-foreground">
              <Ellipsis className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="text-xs p-2">
                <Link href={`/users/${row.original.id}`}>
                  <User className="w-2 h-2" />
                  View Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs p-2">
                <Pencil className="w-2 h-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs p-2" variant="destructive">
                <Trash2 className="w-2 h-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
