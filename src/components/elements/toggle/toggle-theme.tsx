import { Button } from "@/components/ui";
import useClickOutSide from "@/hooks/use-click-outside";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/types/TThemeType";
import { Laptop, Menu, Moon, Sun, X } from "lucide-react";
import { memo, useState } from "react";

const ToggleTheme = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };
  const toggle = () => setOpen((prev) => !prev);
  const ref = useClickOutSide<HTMLDivElement>(() => setOpen(false));
  return (
    <template className="relative flex shrink-0">
      <Button icon={2} variant={"outline"} shape={"curved"} onClick={toggle}>
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <div
          ref={ref}
          className="bg-background absolute top-12 right-0 z-10 mx-[50%] flex translate-x-[50%] flex-col gap-y-1 rounded-lg border p-1"
        >
          <Button
            icon={2}
            variant={theme === "light" ? "default" : "outline"}
            shape={"curved"}
            aria-label="Light theme"
            onClick={() => handleThemeChange("light")}
          >
            <Sun />
          </Button>
          <Button
            icon={2}
            variant={theme === "system" ? "default" : "outline"}
            shape={"curved"}
            aria-label="System theme"
            onClick={() => handleThemeChange("system")}
          >
            <Laptop />
          </Button>
          <Button
            icon={2}
            variant={theme === "dark" ? "default" : "outline"}
            shape={"curved"}
            aria-label="Dark mode"
            onClick={() => handleThemeChange("dark")}
          >
            <Moon />
          </Button>
        </div>
      )}
    </template>
  );
};

export default memo(ToggleTheme);

//
//
//
// 🌙☀️💻
