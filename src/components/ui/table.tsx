import { ITableType } from "@/types/ITableType";
import { cn } from "@/utils/helpers";
import { forwardRef, memo } from "react";

const Table = memo(
  forwardRef<HTMLTableElement, ITableType["table"]>(
    ({ className, ...props }, ref) => (
      <div className="w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-600">
        <div className="relative w-full overflow-x-auto">
          <table
            ref={ref}
            className={cn(
              "w-full table-auto caption-bottom bg-white text-sm dark:bg-black",
              className,
            )}
            {...props}
          />
        </div>
      </div>
    ),
  ),
);
Table.displayName = "Table";
const TableHeader = memo(
  forwardRef<HTMLTableSectionElement, ITableType["header"]>(
    ({ className, ...props }, ref) => (
      <thead
        ref={ref}
        className={cn(
          "table-header-group uppercase [&_tr]:border-b [&_tr]:border-zinc-200 [&>tr]:hover:!bg-inherit",
          className,
        )}
        {...props}
      />
    ),
  ),
);
TableHeader.displayName = "TableHeader";
const TableBody = memo(
  forwardRef<HTMLTableSectionElement, ITableType["body"]>(
    ({ className, ...props }, ref) => (
      <tbody
        ref={ref}
        className={cn(
          "[&_tr]:border-zinc-200 dark:[&_tr]:border-zinc-600 [&_tr:last-child]:border-0",
          className,
        )}
        {...props}
      />
    ),
  ),
);
TableBody.displayName = "TableBody";
const TableFooter = memo(
  forwardRef<HTMLTableSectionElement, ITableType["footer"]>(
    ({ className, ...props }, ref) => (
      <tfoot
        ref={ref}
        className={cn(
          "border-t border-zinc-200 font-medium dark:border-zinc-600 [&_tr]:bg-transparent [&_tr:not(:is([footer]))]:bg-transparent [&>tr]:last:border-b-0 [&>tr]:hover:!bg-inherit",
          className,
        )}
        {...props}
      />
    ),
  ),
);
TableFooter.displayName = "TableFooter";
const TableHead = memo(
  forwardRef<HTMLTableCellElement, ITableType["head"]>(
    ({ className, ...props }, ref) => (
      <th
        ref={ref}
        className={cn(
          "h-12 table-cell px-4 text-center align-middle font-medium tracking-wider whitespace-nowrap text-zinc-600 uppercase select-none last-of-type:text-center [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          className,
        )}
        {...props}
      />
    ),
  ),
);
TableHead.displayName = "TableHead";
const TableRow = memo(
  forwardRef<HTMLTableRowElement, ITableType["row"]>(
    ({ className, ...props }, ref) => (
      <tr
        ref={ref}
        className={cn(
          "table-row divide-x divide-neutral-200 border-b text-black transition-colors hover:bg-zinc-200/50 data-[state=selected]:bg-zinc-100 dark:divide-neutral-600 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-700/50 data-[state=selected]:dark:bg-zinc-700/50",
          className,
        )}
        // odd:hover:bg-gray-200 even:hover:bg-gray-300
        // dark:odd:hover:bg-zinc-700 dark:even:hover:bg-neutral-900
        {...props}
      />
    ),
  ),
);
TableRow.displayName = "TableRow";
const TableCell = memo(
  forwardRef<HTMLTableCellElement, ITableType["cell"]>(
    ({ className, ...props }, ref) => (
      <td
        ref={ref}
        className={cn(
          "table-cell p-2 text-center align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          className,
        )}
        {...props}
      />
    ),
  ),
);
TableCell.displayName = "TableCell";
const TableCaption = memo(
  forwardRef<HTMLTableCaptionElement, ITableType["caption"]>(
    ({ className, ...props }, ref) => (
      <caption
        ref={ref}
        // items-center justify-between
        className={cn("mt-4 h-12 px-4 text-sm text-zinc-600", className)}
        {...props}
      />
    ),
  ),
);
TableCaption.displayName = "TableCaption";
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
