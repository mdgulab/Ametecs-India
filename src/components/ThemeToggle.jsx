import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme on initial load
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        fixed top-6 right-6 z-[999]
        p-3 rounded-full
        bg-white/50 dark:bg-black/50 backdrop-blur-xl
        text-gray-900 dark:text-yellow-300
        shadow-lg hover:scale-110 transition
      "
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
