// export type TResponseData<T> = {
//   status: string;
//   limit: number;
//   page: number;
//   pages: (number | string)[];
//   results: number;
//   data: T[];
// };
// export interface ApiResponseKey<T> {
//   results: number;
//   currentPage: number;
//   itemsPerPage: number;
//   totalPages: number;
//   data: T[];
// }
// // API response with pagination
// export type ApiResponseData<key extends string, T> = Omit<
//   TResponseData<T>,
//   "data"
// > & { [K in key]: T | null };

// // Pagination types
// export type PaginationContextType<T> = {
//   data: T[];
//   currentPage: number;
//   itemsPerPage: number;
//   setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
//   totalItems: number;
//   //   setTotalItems: React.Dispatch<React.SetStateAction<number>>;
//   totalPages: number;

//   goToPage: (page: number) => void;
// };
// type SuccessResponse<T> = {
//   status: "success";
//   data: T;
// };
// export type ApiResponse<T> =
//   | SuccessResponse<T>
//   | { status: "error"; error: string };

// type PaginatedResponse<T> = {
//   results: number;
//   currentPage: number;
//   itemsPerPage: number;
//   totalPages: number;
//   data: T[];
// };

// export type ApiResponseWithPagination<T> = ApiResponse<PaginatedResponse<T>>;

// type ResponseData<T> = {
//   status: string;
//   limit: number;
//   page: number;
//   pages: (number | string)[];
//   results: number;
//   data: T[];
// };
// interface ErrorResponse {
//   status: "error";
//   errors: ErrorMessage[];
// }
// type ErrorMessage = {
//   message: string;
// };
