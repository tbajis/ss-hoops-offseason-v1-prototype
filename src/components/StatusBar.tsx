import { useTheme } from "../ThemeContext";
import { t } from "../theme";

export default function StatusBar() {
  const { mode } = useTheme();
  return (
    <div
      className="flex items-center justify-between h-[54px] px-6 shrink-0"
      style={{ backgroundColor: t("surface", mode) }}
    >
      <span className="text-[16px] font-medium" style={{ color: t("onSurface", mode) }}>
        9:41
      </span>
      <span className="text-[13px] font-medium" style={{ color: t("onSurfaceVariant", mode) }}>
        📶&nbsp;&nbsp;🔋
      </span>
    </div>
  );
}
