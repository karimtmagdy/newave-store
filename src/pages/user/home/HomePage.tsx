// import ProductList from "@/components/elements/product/product-list";

import Header from "@/components/elements/header/header";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/types/TThemeType";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Content />
      <h4>HomePage</h4>
    </div>
  );
};

export default HomePage;

const ThemeToggles: React.FC = () => {
  const { theme, setTheme, isDarkMode } = useTheme();

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="theme-selector">
      <h2>Theme Settings</h2>
      <div className="theme-options">
        <button
          onClick={() => handleThemeChange("light")}
          className={`theme-button ${theme === "light" ? "active" : ""}`}
          style={{
            padding: "8px 16px",
            backgroundColor:
              theme === "light" ? "var(--primary)" : "var(--secondary)",
            color:
              theme === "light"
                ? "var(--primary-foreground)"
                : "var(--secondary-foreground)",
            margin: "0 8px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ☀️ Light
        </button>

        <button
          onClick={() => handleThemeChange("dark")}
          className={`theme-button ${theme === "dark" ? "active" : ""}`}
          style={{
            padding: "8px 16px",
            backgroundColor:
              theme === "dark" ? "var(--primary)" : "var(--secondary)",
            color:
              theme === "dark"
                ? "var(--primary-foreground)"
                : "var(--secondary-foreground)",
            margin: "0 8px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🌙 Dark
        </button>

        <button
          onClick={() => handleThemeChange("system")}
          className={`theme-button ${theme === "system" ? "active" : ""}`}
          style={{
            padding: "8px 16px",
            backgroundColor:
              theme === "system" ? "var(--primary)" : "var(--secondary)",
            color:
              theme === "system"
                ? "var(--primary-foreground)"
                : "var(--secondary-foreground)",
            margin: "0 8px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          💻 System
        </button>
      </div>

      <div className="current-theme-info" style={{ marginTop: "16px" }}>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <p>Dark mode is {isDarkMode ? "enabled" : "disabled"}</p>
      </div>
    </div>
  );
};

const Content: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Theme System Example</h1>

      <ThemeToggles />

      <div
        style={{
          backgroundColor: "var(--card)",
          color: "var(--card-foreground)",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "2rem",
          border: "1px solid var(--border)",
        }}
      >
        <h2>Sample Content Card</h2>
        <p>This card adapts to your selected theme automatically.</p>
        <p>
          The current mode is: <strong>{isDarkMode ? "Dark" : "Light"}</strong>
        </p>
      </div>
    </div>
  );
};
