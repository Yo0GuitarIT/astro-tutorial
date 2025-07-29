import { useState, useEffect } from "react";
import SunIcon from "@/assets/sun.svg?react"; // 匯入太陽圖示
import MoonIcon from "@/assets/moon.svg?react"; // 匯入月亮圖示

function ThemeButton() {
  // 1. 使用 useState 來管理當前的主題狀態
  const [theme, setTheme] = useState<string>(() => {
    // 在客戶端，從 localStorage 或系統偏好讀取初始主題
    if (typeof localStorage !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  // 2. 使用 useEffect 來處理副作用 (操作 DOM 和 localStorage)
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. 點擊按鈕時，切換主題狀態
  const handleToggleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button id="themeToggle" onClick={handleToggleClick}>
      {/* 根據主題顯示不同的圖示 */}
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeButton;
