import Switch from "./ui/Switch";
import Sun from "/src/assets/sun.svg?react";
import Moon from "/src/assets/moon.svg?react";
import { useTheme } from "./ThemeProvider";

export default function LightDarkToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        icons={{
          unchecked: <Sun className="size-5 dark:invert" />,
          checked: <Moon className="size-5 var(--icon-filter)" />,
        }}
      ></Switch>
    </div>
  );
}
