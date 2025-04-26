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
export type PaginateData = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  results: number;
};
export type ApiResponseKey<T> = ApiResponse<T> & PaginateData;
