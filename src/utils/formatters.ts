import dayjs from "dayjs";

// Format date to full date and time (e.g., "January 1, 2024 12:00:00")
export const formatFullDateTime = (date: string | Date) => {
  return dayjs(date).format("MMMM D, YYYY HH:mm:ss");
};

// Format date to short date (e.g., "Jan 1, 2024")
export const formatShortDate = (date: string | Date) => {
  return dayjs(date).format("MMM D, YYYY");
};

// Format date to time only (e.g., "12:00:00")
export const formatTime = (date: string | Date) => {
  return dayjs(date).format("HH:mm:ss");
};

// Format date to year only (e.g., "2024")
export const formatYear = (date: string | Date) => {
  return dayjs(date).format("YYYY");
};

// Format date to month and year (e.g., "January 2024")
export const formatMonthYear = (date: string | Date) => {
  return dayjs(date).format("MMMM YYYY");
};

// Format date to day and month (e.g., "January 1")
export const formatDayMonth = (date: string | Date) => {
  return dayjs(date).format("MMMM D");
};

// Get current date and time formatted
export const getCurrentDateTime = () => {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
};

// Custom format function
export const formatCustom = (date: string | Date, format: string) => {
  return dayjs(date).format(format);
};
