import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export type ITableType = {
  table: HTMLAttributes<HTMLTableElement>;
  header: HTMLAttributes<HTMLTableSectionElement>;
  body: HTMLAttributes<HTMLTableSectionElement>;
  footer: HTMLAttributes<HTMLTableSectionElement>;
  row: HTMLAttributes<HTMLTableRowElement>;
  head: ThHTMLAttributes<HTMLTableCellElement>;
  cell: TdHTMLAttributes<HTMLTableCellElement>;
  caption: HTMLAttributes<HTMLTableCaptionElement>;
};
