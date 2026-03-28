import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface TablePaginationProps<TData> {
  table: Table<TData>;
}

export default function TablePagination<TData>({
  table,
}: TablePaginationProps<TData>) {
  return (
    <div className="text-xs flex items-center justify-between p-4">
      {/* LEFT - TOTAL SELECTED ROWS SECTION */}
      <div className="hidden lg:block text-muted-foreground">
        <span>{`${table.getSelectedRowModel().rows.length} of ${table.getRowCount()} rows(s) selected.`}</span>
      </div>
      {/* RIGHT */}
      <div className="flex gap-8">
        {/* ROW PER PAGE SECTION */}
        <div className="flex gap-2 items-center">
          <span className="text-center">Rows per page</span>
          <Select
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="text-xs">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectGroup>
                {[10, 25, 50].map((item) => (
                  <SelectItem key={item} value={item.toString()}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* PAGE NUMBER SECTION */}
        <div className="flex items-center">
          <span className="text-center">{`Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}</span>
        </div>
        {/* CONTROLs */}
        <div className="flex gap-2 items-center">
          <Button
            disabled={!table.getCanPreviousPage()}
            className="p-2 cursor-pointer"
            variant="outline"
            onClick={() => table.firstPage()}
          >
            <span className="sr-only">Go To First Page</span>
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button
            disabled={!table.getCanPreviousPage()}
            className="p-2 cursor-pointer"
            variant="outline"
            onClick={() => table.previousPage()}
          >
            <span className="sr-only">Go To Before Page</span>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            className="p-2 cursor-pointer"
            variant="outline"
            onClick={() => table.nextPage()}
          >
            <span className="sr-only">Go To Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            className="p-2 cursor-pointer"
            variant="outline"
            onClick={() => table.lastPage()}
          >
            <span className="sr-only">Go To Last Page</span>
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
