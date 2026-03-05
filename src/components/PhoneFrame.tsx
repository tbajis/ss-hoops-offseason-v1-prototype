import { useTheme } from "../ThemeContext";
import { Sun, Moon } from "lucide-react";
import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  const { mode, toggle } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {/* Mode toggle */}
      <button
        onClick={toggle}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
        style={{
          backgroundColor: mode === "light" ? "#333" : "#e0e0e0",
          color: mode === "light" ? "#fff" : "#222",
          border: "none",
        }}
      >
        {mode === "light" ? <Moon size={16} /> : <Sun size={16} />}
        {mode === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      {/* Phone bezel */}
      <div
        className="relative rounded-[44px] overflow-hidden"
        style={{
          width: 393 + 16,
          boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
          border: "8px solid #1a1a1a",
          backgroundColor: "#1a1a1a",
        }}
      >
        {/* Dynamic island */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[126px] h-[36px] bg-black rounded-full z-50" />

        {/* App content — scrollable */}
        <div className="w-[393px] h-[852px] overflow-y-auto overflow-x-hidden">
          {children}
        </div>

        {/* Home indicator bar */}
        <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full bg-white/30 z-50" />
      </div>
    </div>
  );
}
