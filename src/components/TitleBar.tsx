import { useTheme } from "../ThemeContext";
import { t } from "../theme";

interface TitleBarProps {
  title: string;
}

export default function TitleBar({ title }: TitleBarProps) {
  const { mode } = useTheme();

  return (
    <div
      className="flex items-center h-[56px] px-5 shrink-0"
      style={{ backgroundColor: t("surface", mode) }}
    >
      <span className="text-[20px] font-medium" style={{ color: t("onSurface", mode) }}>
        {title}
      </span>
    </div>
  );
}
