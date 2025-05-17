import useTheme from "~/hooks/useTheme";
import { Button } from "../ui";

const ToggleTheme = () => {
  const { isDarkMode, setTheme, theme } = useTheme();
  return (
    <Button
      icon={3}
      variant="ghost"
      shape="square"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {isDarkMode ? "🌞" : "🌜"}
    </Button>
  );
};

export default ToggleTheme;
