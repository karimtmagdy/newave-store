import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import axios from "axios";
import { TCategoryType } from "@/types/TCategoryType";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTheme } from "@/hooks/use-theme";
import { formatCustom, formatFullDateTime } from "@/utils/formatters";
function App() {
  const { theme, setTheme, isDarkMode } = useTheme();
  const [category, setCategory] = useState<TCategoryType[]>([]);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0,
    totalResults: 0,
  });

  const url = import.meta.env.VITE_API_PROACTION;

  // Add this function to handle itemsPerPage changes
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setPagination((prev) => ({
      ...prev,
      itemsPerPage: newItemsPerPage,
      currentPage: 1, // Reset to first page when changing items per page
    }));
    fetchCategory(1, newItemsPerPage);
  };

  const fetchCategory = useCallback(
    async (page = 1, perPage = pagination.itemsPerPage) => {
      try {
        const response = await axios.get(
          `${url}/categories?page=${page}&limit=${perPage}`,
        );
        const {
          categories,
          currentPage,
          itemsPerPage,
          results: totalResults,
          totalPages,
        } = response.data;
        setPagination({
          currentPage,
          itemsPerPage,
          totalPages,
          totalResults,
        });
        setCategory(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    [url, pagination.itemsPerPage],
  );

  useEffect(() => {
    fetchCategory(1);
  }, [fetchCategory]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchCategory(newPage);
    }
  };

  return (
    <>
      <div
      // className={`p-4 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`mb-4 rounded px-4 py-2 ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>id</TableHead>
              <TableHead>name</TableHead>
              <TableHead>created at</TableHead>
              <TableHead>updated at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {category.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item._id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {formatCustom(item.createdAt, "MMM-DD-YY")}
                </TableCell>
                <TableCell>{formatFullDateTime(item.updatedAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>
                <TableCaption className={`flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="itemsPerPage"
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Items per page:{" "}
                    </label>
                    <select
                      className={`rounded border px-3 py-1 text-sm focus:ring-2 focus:outline-none ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500"
                          : "border-gray-300 bg-white text-gray-700 focus:ring-amber-500"
                      }`}
                      id="itemsPerPage"
                      value={pagination.itemsPerPage}
                      onChange={(e) =>
                        handleItemsPerPageChange(Number(e.target.value))
                      }
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                  </div>

                  <div
                    className={`flex items-center gap-4 text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span>
                      Page {pagination.currentPage} of {pagination.totalPages}
                    </span>
                    <span>Total items: {pagination.totalResults}</span>
                  </div>
                </TableCaption>

                <div className="mt-4 flex justify-center gap-2 pb-4">
                  <button
                    className={`flex h-8 w-8 items-center justify-center rounded ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-700 disabled:text-gray-600"
                        : "text-gray-700 hover:bg-gray-100 disabled:text-gray-300"
                    }`}
                    onClick={() => handlePageChange(1)}
                    disabled={pagination.currentPage === 1}
                  >
                    <ChevronsLeft className="h-5 w-5" />
                  </button>
                  <button
                    className={`flex h-8 w-8 items-center justify-center rounded ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-700 disabled:text-gray-600"
                        : "text-gray-700 hover:bg-gray-100 disabled:text-gray-300"
                    }`}
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {[...Array(pagination.totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    const showPage =
                      pagination.totalPages <= 7 ||
                      pageNum === 1 ||
                      pageNum === pagination.totalPages ||
                      Math.abs(pageNum - pagination.currentPage) <= 1;

                    return showPage ? (
                      <button
                        key={`page-${pageNum}`}
                        onClick={() => handlePageChange(pageNum)}
                        className={`flex h-8 w-8 items-center justify-center rounded ${
                          pagination.currentPage === pageNum
                            ? isDarkMode
                              ? "bg-blue-600 text-white"
                              : "bg-gray-900 text-white"
                            : isDarkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ) : (
                      (pageNum === pagination.currentPage - 2 ||
                        pageNum === pagination.currentPage + 2) && (
                        <span
                          key={`ellipsis-${pageNum}`}
                          className={`flex h-8 w-8 items-center justify-center font-bold ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          •••
                        </span>
                      )
                    );
                  })}

                  <button
                    className={`flex h-8 w-8 items-center justify-center rounded ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-700 disabled:text-gray-600"
                        : "text-gray-700 hover:bg-gray-100 disabled:text-gray-300"
                    }`}
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={pagination.currentPage === pagination.totalPages}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    className={`flex h-8 w-8 items-center justify-center rounded ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-700 disabled:text-gray-600"
                        : "text-gray-700 hover:bg-gray-100 disabled:text-gray-300"
                    }`}
                    onClick={() => handlePageChange(pagination.totalPages)}
                    disabled={pagination.currentPage === pagination.totalPages}
                  >
                    <ChevronsRight className="h-5 w-5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}

export default App;
