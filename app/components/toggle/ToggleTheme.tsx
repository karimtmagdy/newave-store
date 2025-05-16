import useTheme from "~/hooks/useTheme";

const ToggleTheme = () => {
  const { isDarkMode, setTheme, theme } = useTheme();
  return (
    <button
      className="h-6 w-6 cursor-pointer rounded-lg border"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {isDarkMode ? "🌞" : "🌜"}
    </button>
  );
};

export default ToggleTheme;
