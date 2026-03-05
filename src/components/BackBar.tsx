import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "../ThemeContext";
import { t } from "../theme";

interface BackBarProps {
  title: string;
  to?: string;
}

export default function BackBar({ title, to }: BackBarProps) {
  const navigate = useNavigate();
  const { mode } = useTheme();

  return (
    <div
      className="flex items-center gap-1 h-[56px] px-1 shrink-0"
      style={{ backgroundColor: t("surface", mode) }}
    >
      <button
        onClick={() => (to ? navigate(to) : navigate(-1))}
        className="flex items-center justify-center w-12 h-12 cursor-pointer"
        style={{ background: "none", border: "none" }}
      >
        <ArrowLeft size={24} color={t("onSurface", mode)} />
      </button>
      <span className="text-[20px] font-medium" style={{ color: t("onSurface", mode) }}>
        {title}
      </span>
    </div>
  );
}
