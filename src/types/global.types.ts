import { JSX } from "react";
export type ProviderProp = {
  children: React.ReactNode;
};
export type ApiResponse<T> = {
  status?: "success" | "pending" | "fail" | "error";
  error: string | null;
  isLoading: boolean;
  data: T[] | null;
};
export type ApiResponseWithKey<Key extends string, T> = Omit<
  ApiResponse<T>,
  "data"
> & {
  [K in Key]: T | null;
};
export type ResponseAPI<key extends string, T> = {
  status: "success" | "pending" | "fail" | "error";
} & {
  [K in keyof T as key]: T[K] | null;
};
// export type Response<T> = {} & { [K in keyof T]: T[K] | null };
export type PaginateData = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  results: number;
};
export type ApiResponseKey<T> = ApiResponse<T> & PaginateData;
export type THandleForm = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ElementAndChildren = {
  path: string;
  element: JSX.Element;
  children: { path: string; element: JSX.Element }[];
} & { children: { path: string; element: JSX.Element }[] };
