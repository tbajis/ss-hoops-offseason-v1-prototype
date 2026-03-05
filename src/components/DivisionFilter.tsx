import { useTheme } from "../ThemeContext";
import { t } from "../theme";
import type { DivisionGroup } from "../data";

interface DivisionFilterProps {
  active: DivisionGroup;
  onChange: (group: DivisionGroup) => void;
}

const segments: DivisionGroup[] = ["All", "Boys", "Girls"];

export default function DivisionFilter({ active, onChange }: DivisionFilterProps) {
  const { mode } = useTheme();
  return (
    <div
      className="inline-flex self-start rounded-full h-[36px] overflow-hidden"
      style={{
        backgroundColor: t("surfaceContainerLow", mode),
        border: `1px solid ${t("outlineVariant", mode)}`,
      }}
    >
      {segments.map((seg) => (
        <button
          key={seg}
          onClick={() => onChange(seg)}
          className="flex items-center justify-center px-4 h-full rounded-full text-[13px] font-medium cursor-pointer"
          style={{
            backgroundColor: seg === active ? t("secondaryContainer", mode) : "transparent",
            color: seg === active ? t("onSecondaryContainer", mode) : t("onSurfaceVariant", mode),
            border: "none",
          }}
        >
          {seg}
        </button>
      ))}
    </div>
  );
}
