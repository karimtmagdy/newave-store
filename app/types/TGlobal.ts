export type TGlobal = {
  children: React.ReactNode;
};
export type ApiStatus = "success" | "pending" | "fail" | "error";
export type ApiState = {
  status: ApiStatus;
  message: string;
};
export type ResponseData<key extends string, T> = Omit<
  SuccessResponse<T>,
  "data"
> & {
  [K in key]: T;
} & PaginatedData;

export type ApiResponse<K extends string, V> = ResponseData<K, V>;

export type SuccessResponse<T> = {
  status: "success";
  message: string;
  data: T;
};

export type PaginatedData = {
  status: string;
  limit: number;
  page: number;
  pages: (number | string)[];
  results: number;
};

// S like success not required
// export type ApiResponseData<key extends string, T, S extends string = "success"> = {
//   status: S;
// } & {
//   [K in key]: T;
// } & PaginatedData;
export type Paginated = {
  handleNext: () => void;
  hasNext: boolean;
  handleBack: () => void;
  hasPrevious: boolean;
  handleItemsPerPageChange: (value: number) => void;
  handleStart: () => void;
  handleLast: () => void;
};
