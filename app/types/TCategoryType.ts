import type { ApiResponse } from "./TGlobal";

export type TCategory = {
  _id: string;
  name: string;
  slug: string;
  isActive: boolean;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
export type CategoryContextType = {
  categories: TCategory[];
  // addCategory: (category: TCategory) => void;
  // getCategory: (id: string) => void;
  // updateCategory: (category: TCategory, id: string) => void;
  // deleteCategory: (id: string) => void;
  fetchCategories?: () => Promise<ApiResponse<"categories", TCategory[]>>;
  // fetchCategories: (pageNumber: number) => Promise<void>;
};
//   delta: number;
//   isFinalPage: boolean;

// isDeleted : boolean,
// https://nw-ex.vercel.app/api/v1/categories
// const category = [
//   "All",
//   "Business",
//   "Entertainment",
//   "General",
//   "Health",
//   "Science",
//   "Sports",
//   "Technology",
// ];

// export type ICategoryContextType = {
//   // createCategory: (category: ICategory) => Promise<ICategory>;
//   // updateCategory: (id: string, category: ICategory) => Promise<ICategory>;

// };

// export type CreateCategoryInput = Omit<
//   ICategory,
//   "id" | "createdAt" | "updatedAt"
// >;
// export type UpdateCategoryInput = Partial<
//   Omit<ICategory, "_id" | "createdAt" | "updatedAt">
// >;
// export type ICategoryContextType = {
//   createCategory: (category: CreateCategoryInput) => Promise<ICategory>;
//   updateCategory: (
//     id: string,
//     category: UpdateCategoryInput,
//   ) => Promise<ICategory>;
//   deleteCategory: (id: string) => Promise<boolean>;
// };
export type TCategoryType = {
  categories: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;
};
