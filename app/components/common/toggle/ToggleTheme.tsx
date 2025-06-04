import { Button } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";
import { useCallback } from "react";
import { Moon, Sun } from "lucide-react";
const ToggleTheme = () => {
  // 🌞🌜💻
  const { isDarkMode, setTheme } = useTheme();
  const Dark = useCallback(() => {
    setTheme("dark");
  }, []);
  const Light = useCallback(() => {
    setTheme("light");
  }, []);

  return (
    <>
      {isDarkMode ? (
        <Button icon={2} variant={"muted"} onClick={Light} aria-label="dark">
          <Moon />
        </Button>
      ) : (
        <Button icon={2} variant={"muted"} onClick={Dark} aria-label="light">
          <Sun />
        </Button>
      )}
    </>
  );
};
export default ToggleTheme;
