import api from "@/services/config/axios-global";
import { API_CATEGORIES } from "@/services/constants/api-url";
import type { CategoryContextType, TCategory } from "@/types/TCategoryType";
import type { ApiResponse, TGlobal } from "@/types/TGlobal";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const CategoryContext = createContext<CategoryContextType | null>(null);
const Provider = CategoryContext.Provider;
export const CategoryProvider = ({ children }: TGlobal) => {
  // :Promise<SuccessResponse<Paginated<CategorySchema>>>
  const [categories, setCategories] = useState<TCategory[]>([]);

  const fetchCategories = useCallback(async () => {
    try {
      const response =
        await api.get<ApiResponse<"categories", TCategory[]>>(API_CATEGORIES);
      const { data, status } = response;
      // const { limit, page, results, pages } = data;
      if (status === 200) setCategories(data?.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const valueContext = useMemo(() => ({ categories }), [categories]);
  return <Provider value={valueContext}>{children}</Provider>;
};
export const useCategory = () => {
  const context = use(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider",
    );
  }
  return context;
};
