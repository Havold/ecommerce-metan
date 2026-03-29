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
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, Trash2, User } from "lucide-react";
import Link from "next/link";

export type Product = {
  id: string | number;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export const columns: ColumnDef<Product>[] = [
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
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src={row.original.images[row.original.colors[0]]} />{" "}
        <AvatarFallback>
          {row.original.name.split(" ").map((text) => text.charAt(0))}
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <div className="hidden lg:flex items-center">
        Price{" "}
        <Button
          onClick={() => column.toggleSorting()}
          className="cursor-pointer bg-transparent text-foreground"
        >
          <ArrowUpDown className="w-4 h-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const price = row.original.price;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",
      }).format(price);
      return <span className="hidden lg:block">{formatted}</span>;
    },
  },
  {
    accessorKey: "shortDescription",
    header: "Description",
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
                  onClick={() =>
                    navigator.clipboard.writeText(row.original.id.toString())
                  }
                  className="w-full"
                >
                  <Copy className="w-2 h-2" />
                  Copy Product Id
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="text-xs p-2">
                <Link href={`/users/${row.original.id}`}>
                  <User className="w-2 h-2" />
                  View Detail Product
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
