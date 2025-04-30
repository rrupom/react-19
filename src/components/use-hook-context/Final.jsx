import { createContext, use, useState } from "react";

const ThemeContext = createContext({});

const ThemeDataProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div className="flex flex-col gap-6">
      <div
        className={
          theme === "light"
            ? "rounded bg-gray-50 p-8 text-neutral-900 border border-gray-100"
            : "rounded bg-gray-900 p-8 text-neutral-100 border border-gray-800"
        }
      >
        Hello Rupom. Currently you are working as an Associate Software Enginner
        at ShellBeeHaken Ltd. You should work very hard to improve your skills
        quickly.
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="rounded p-3 bg-blue-600 text-white cursor-pointer hover:bg-blue-800"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default function ThemeCard() {
  return (
    <ThemeDataProvider>
      <Theme />
    </ThemeDataProvider>
  );
}
