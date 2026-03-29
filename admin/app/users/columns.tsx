"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, Trash2, User } from "lucide-react";
import Link from "next/link";

export type User = {
  id: string;
  user: string;
  email: string;
  status: "active" | "inactive";
  avatar: string;
};

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src={row.original.avatar} />{" "}
        <AvatarFallback>
          {row.original.user.split(" ").map((text) => text.charAt(0))}
        </AvatarFallback>
      </Avatar>
    ),
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
            status === "active" && "bg-success/40",
            status === "inactive" && "bg-failed/40",
          )}
        >
          {status}
        </span>
      );
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
          <DropdownMenuContent className="w-fit">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild className="text-xs p-2">
                <button
                  onClick={() => navigator.clipboard.writeText(row.original.id)}
                  className="w-full"
                >
                  <Copy className="w-2 h-2" />
                  Copy User Id
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="text-xs p-2">
                <Link href={`/users/${row.original.id}`}>
                  <User className="w-2 h-2" />
                  View User Profile
                </Link>
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
